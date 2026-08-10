# requires python 3.9+
# run from or cd into PrismLauncher/instances/[modpack]
# so this code should be running from the instance folder by default
import json
import re
import traceback
import logging
import shutil
# pip install "nbtlib==1.12.1"
from nbtlib import schema, File, Int, String, List, Compound, Double
from pathlib import Path
from zipfile import ZipFile

# set up logging
logging.basicConfig(filename='mod_data/mod_data.log',
                    format='[%(asctime)s] [%(levelname)s] %(message)s',
                    datefmt='%H:%M:%S',
                    level=logging.DEBUG,
                    filemode='w')
log = logging.getLogger()

# required paths
modsPath = Path('mods')
extrasPath = Path('mod_data/extras')
generatedDir = Path('mod_data/generated')
overridesPath = Path('mod_data/overrides')
handledStructures = set()

# change this to where your swaps.json file is 
swapsJson = json.load(open('kubejs/config/swaps.json', 'r'))
swaps = {
    'removals': set(swapsJson.get('removals', [])),
    'item_swapper': swapsJson.get('item_swapper', {}),
    'block_swapper': swapsJson.get('block_swapper', {}),
    'entity_swapper': swapsJson.get('entity_swapper', {}),
    'structure_swapper': swapsJson.get('structure_swapper', {}),
    'state_swapper': swapsJson.get('state_swapper', {}),
    'state_swappable': set(),
    # combine block and item swappers
    'common_swapper': {**swapsJson.get('block_swapper', {}), **swapsJson.get('item_swapper', {})}
}
# Precompute swappable states for quick lookup
for state in swaps['state_swapper']:
    swaps['state_swappable'].add(state['old']['Name'])

# Compile regex patterns for structure swappers
for structure in list(swaps['structure_swapper'].keys()):
    structure: str
    if structure.startswith('/'):
        # turn structure str into regex
        swaps['structure_swapper'][re.compile(
            structure[1:-1])] = swaps['structure_swapper'][structure]
        del swaps['structure_swapper'][structure]


# https://github.com/vberlier/nbtlib/blob/main/docs/Usage.ipynb
Structure = schema('Structure', {
    'DataVersion': Int,
    'author': String,
    'size': List[Int],
    'palette': List[schema('State', {
        'Name': String,
        'Properties': Compound,
    })],
    'blocks': List[schema('Block', {
        'state': Int,
        'pos': List[Int],
        'nbt': Compound,
    })],
    'entities': List[schema('Entity', {
        'pos': List[Double],
        'blockPos': List[Int],
        'nbt': Compound,
    })],
})


class StructureFile(File, Structure):
    def __init__(self, structure_data=None):
        super().__init__(structure_data or {})
        self.gzipped = True

    @classmethod
    def load(cls, filename, gzipped=True, byteorder='big'):
        return super().load(filename, gzipped)


def gatherStructures(path: Path):
    log.info('Starting to gather mod structures...')
    for mod in path.iterdir():
        if (mod.suffix == '.jar' or mod.suffix == '.zip') and mod.is_file():
            log.info(f'Found mod: "{mod.name}"')
            # Open the jar file as a zipfile
            with ZipFile(mod, 'r') as jar:
                # Extract file from zip if in the structures folder
                for file in jar.namelist():
                    if 'structure' in file and file.endswith('.nbt'):
                        jar.extract(file, generatedDir)
                        log.info(
                            f'    Extracted structure: "{file}"')
                jar.close()

    log.info('Finished gathering mod structures.')


def swapLoop(path: Path) -> bool:
    """Recursively process structure files in the given path."""
    for target in path.iterdir():
        if target.is_dir():
            if swapLoop(target):  # propagate early exit
                return True
        elif target.suffix == '.nbt':
            targetSplit = target.as_posix().split('/')
            # ex: 'atmospheric'
            namespace = targetSplit[3]
            # ex: 'arid_garden/arid_garden_1.nbt
            filepath = '/'.join(targetSplit[5:]).removesuffix('.nbt')
            # ex: 'atmospheric:arid_garden/arid_garden_1.nbt'
            structureId = namespace + ':' + filepath

            if namespace == 'create':
                continue  # skip Create structures

            log.info(f'Processing structure: "{structureId}"')
            try:
                with StructureFile.load(target.as_posix()) as s:
                    if s.get('', None) is not None:
                        nbtStructure = s['']
                        blocks = nbtStructure.get('blocks', None)
                        palette = nbtStructure.get('palette', None)
                        entities = nbtStructure.get('entities', None)

                        if blocks is not None and len(blocks) > 0:
                            handleBlocks(structureId, blocks)
                        if palette is not None and len(palette) > 0 and palette[0] != '':
                            handlePalette(structureId, palette)
                        if entities is not None and len(entities) > 0:
                            handleEntities(structureId, entities)

            except Exception as e:
                log.error(f'Error processing structure "{structureId}": {e}')
                log.error(traceback.format_exc())
                return True  # signal “found and stop”
            log.info(f'Finished processing structure: "{structureId}"')
    return False  # nothing found in this branch


def getCommonSwap(structureId: str, itemToSwap: str) -> String | None:
    itemToSwapWith = swaps['common_swapper'].get(itemToSwap, None)
    if itemToSwapWith is not None:
        log.info(f'    Swapping item "{itemToSwap}" to "{itemToSwapWith}"')
        handledStructures.add(structureId)
        return String(itemToSwapWith)
    return None


def getEntitySwap(structureId: str, entityToSwap: str) -> String | None:
    entityToSwapWith = swaps['entity_swapper'].get(entityToSwap, None)
    if entityToSwapWith is not None:
        log.info(
            f'    Swapping entity "{entityToSwap}" to "{entityToSwapWith}"')
        handledStructures.add(structureId)
        return String(entityToSwapWith)
    return None


def getStateSwap(structureId: str, stateToSwap: dict) -> dict | None:
    if stateToSwap['Name'] in swaps['state_swappable']:
        for stateToSwapWith in swaps['state_swapper']:
            if stateToSwapWith['old']['Name'] == stateToSwap['Name'] and stateToSwapWith['old'].get('Properties', {}) == stateToSwap.get('Properties', {}):
                log.info(
                    f'    Swapping state "{stateToSwap}" to "{stateToSwapWith['new']}"')
                copiedNewState = Compound(stateToSwapWith['new'].copy())
                copiedNewState['Name'] = String(copiedNewState['Name'])
                propertiesDict = Compound()
                for key, value in copiedNewState['Properties'].items():
                    propertiesDict[key] = String(value)
                copiedNewState['Properties'] = propertiesDict
                handledStructures.add(structureId)
                return copiedNewState
    return None


def getSimpleBlockSwap(structureId: str, blockToSwap: str) -> str | None:
    blockToSwapWith = swaps['block_swapper'].get(blockToSwap, None)
    if blockToSwapWith is not None:
        log.info(
            f'    Swapping (simple) block "{blockToSwap}" to "{blockToSwapWith}"')
        handledStructures.add(structureId)
        return String(blockToSwapWith)
    return None


def getBlockSwap(structureId: str, blockToSwap: str) -> String | None:
    blockToSwapWith = None

    # Check structure swapper
    structureSwap = swaps['structure_swapper'].get(structureId, None)
    for structure, blockSwapDict in swaps['structure_swapper'].items():
        if isinstance(structure, re.Pattern):
            if structure.match(structureId):
                structureSwap = blockSwapDict
                break
    if structureSwap is not None:
        blockToSwapWith = structureSwap.get(blockToSwap, None)
    # Check block swapper
    if blockToSwapWith is None:
        blockToSwapWith = swaps['block_swapper'].get(blockToSwap, None)

    # Return
    if blockToSwapWith is not None:
        log.info(f'    Swapping block "{blockToSwap}" to "{blockToSwapWith}"')
        handledStructures.add(structureId)
        return String(blockToSwapWith)

    return None


def handleBlocks(structureId: str, blocks: List[Compound]):
    """Handle blocks in a structure; """
    for block in blocks:
        block: Compound

        try:
            if block.get('nbt', None) is not None:
                nbt = block['nbt']
                blockId = nbt['id']
                blockId: str

                # COPYCAT PANEL/STEP HANDLING
                if blockId == 'create:copycat':
                    swapWith = getSimpleBlockSwap(
                        structureId, nbt['Item']['id'])
                    if swapWith is not None:
                        nbt['Item']['id'] = swapWith
                        nbt['Material']['Name'] = swapWith
                    elif nbt['Item']['id'] in swaps['removals']:
                        log.warning(
                            f' Contains unswapped block: "{nbt['Item']['id']}" in "{blockId}" NBT')

                # JIGSAW BLOCK HANDLING
                elif blockId == 'minecraft:jigsaw':
                    swapWith = getBlockSwap(structureId, nbt['final_state'])
                    if swapWith is not None:
                        nbt['final_state'] = swapWith
                    elif nbt['final_state'] in swaps['removals']:
                        log.warning(
                            f' Contains unswapped block: "{nbt['final_state']}" in "{blockId}" NBT')

                # SPAWNER HANDLING
                elif blockId == 'minecraft:spawner':
                    spawnData = nbt.get('SpawnData', None)
                    if spawnData:
                        entityToSwap = spawnData['entity']['id']
                        entitySwapWith = getEntitySwap(structureId, entityToSwap)
                        if entitySwapWith:
                            spawnData['entity']['id'] = entitySwapWith
                        spawnPotentials = nbt.get('SpawnPotentials', None)
                        if spawnPotentials:
                            for potential in spawnPotentials:
                                potEntityToSwap = potential['entity']['id']
                                potEntitySwapWith = getEntitySwap(structureId,
                                    potEntityToSwap)
                                if potEntitySwapWith:
                                    potential['entity']['id'] = potEntitySwapWith

                # BLOCK ENTITY HANDLING
                elif 'chest' in blockId or re.match(r'create:.*_toolbox', blockId) or blockId == 'minecraft:shulker_box' or blockId == 'minecraft:barrel' \
                        or blockId == 'minecraft:hopper' or blockId == 'supplementaries:flower_box' or blockId == 'supplementaries:sack' \
                        or blockId == 'minecraft:dispenser' or blockId == 'minecraft:dropper' or blockId == 'supplementaries:item_shelf':

                    items = nbt.get('Items', None)
                    if items is not None:
                        for item in items:
                            if item == {}:
                                continue
                            itemSwapWith = getCommonSwap(structureId, item['id'])
                            if itemSwapWith is not None:
                                item['id'] = itemSwapWith
                            elif item['id'] in swaps['removals']:
                                log.warning(
                                    f' Contains unswapped ITEM: "{item['id']}" in "{blockId}" NBT')

                # REMOVALS HANDLING
                elif blockId in swaps['removals']:
                    log.warning(
                        f' Contains unswapped NON-palette block: "{blockId}"')

        except Exception as e:
            log.error(
                f'   Error handling block at position "{block['pos']}" in structure: {e}')
            log.error('   ' + traceback.format_exc())


def handlePalette(structureId: str, palette: List[Compound]):
    for block in palette:
        block: Compound

        try:
            if block.get('Properties', None) is not None:
                stateSwapWith = getStateSwap(structureId, block)
                if stateSwapWith is not None:
                    block['Name'] = stateSwapWith['Name']
                    block['Properties'] = stateSwapWith['Properties']

            if block.get('Name', None) is not None:
                blockSwapWith = getBlockSwap(structureId, block['Name'])
                if blockSwapWith is not None:
                    block['Name'] = blockSwapWith

            if block.get('Name', None) is not None and block['Name'] in swaps['removals']:
                log.warning(
                    f' Contains unswapped palette block: "{block['Name']}"')

        except Exception as e:
            log.error(
                f'   Error handling block "{block['Name']}" in structure: {e}')
            log.error('   ' + traceback.format_exc())


def handleEntities(structureId: str, entities: List[Compound]):
    for entity in entities:
        entity: Compound

        try:
            # Swap entity IDs
            if entity.get('nbt', None) is not None:
                nbt = entity['nbt']
                entityId = nbt.get('id', None)
                if entityId is None:
                    continue

                # Basic entity ID swap
                entitySwapWith = getEntitySwap(structureId, entityId)
                if entitySwapWith is not None:
                    nbt['id'] = entitySwapWith

                # ARMOR STAND HANDLING
                elif entityId == 'minecraft:armor_stand':
                    for item in nbt['ArmorItems']:
                        if item == {}:
                            continue
                        itemSwapWith = getCommonSwap(structureId, item['id'])
                        if itemSwapWith is not None:
                            item['id'] = itemSwapWith
                        elif item['id'] in swaps['removals']:
                            log.warning(
                                f' Contains unswapped ITEM: "{item['id']}" in "{entityId}" NBT')

                # ITEM FRAME HANDLING
                elif entityId == 'minecraft:item_frame' or entityId == 'minecraft:glow_item_frame' or entityId == 'quark:dyed_item_frame' or entityId == 'quark:glass_frame':
                    item = nbt.get('Item', None)
                    if item is not None:
                        itemSwapWith = getCommonSwap(structureId, item['id'])
                        if itemSwapWith is not None:
                            item['id'] = itemSwapWith
                        elif item['id'] in swaps['removals']:
                            log.warning(
                                f' Contains unswapped ITEM: "{item['id']}" in "{entityId}" NBT')

        except Exception as e:
            log.error(
                f'   Error modifying entity "{entity['nbt']['id']}" in structure: {e}')
            log.error('   ' + traceback.format_exc())


def zipStructures(outputPath: Path):
    log.info(f'Zipping modified structures into a data pack...')

    mcmeta = {
        "pack": {
            "description": "Generated structures with swapped blocks/items/entities for this modpack.",
            "version": "1.0.0",
            "pack_format": 10,
            "supported_formats": [
                10,
                18
            ]
        }
    }

    # Create output zip file
    outputPath.parent.mkdir(parents=True, exist_ok=True)

    with ZipFile(outputPath, 'w') as zf:
        # Write pack.mcmeta
        zf.writestr('pack.mcmeta', json.dumps(mcmeta, indent=4))

        # Zip all files from generatedDir/data
        dataDir = generatedDir / 'data'
        if dataDir.exists():
            for structure in handledStructures:
                structSplit = structure.split(':')
                structurePath = Path(dataDir.as_posix() + '/' + structSplit[0] + '/structure/' + structSplit[1] + '.nbt')
                if structurePath.exists():
                    arcname = structurePath.relative_to(generatedDir)
                    zf.write(structurePath, arcname)
        zf.close()

    log.info(f'Successfully created data pack zip at: {outputPath}')


def clearGeneratedDir():
    """Remove the generated directory and all its contents."""
    if generatedDir.exists():
        log.info(f'Clearing generated directory: {generatedDir}')
        shutil.rmtree(generatedDir)
        log.info('Generated directory cleared.')
    else:
        log.info('Generated directory does not exist, nothing to clear.')


def main():
    clearGeneratedDir()
    gatherStructures(extrasPath)
    gatherStructures(modsPath)
    gatherStructures(overridesPath)
    swapLoop(generatedDir / 'data')
    zipStructures(Path('kubejs/data/special-structures.zip'))


if __name__ == '__main__':
    main()
