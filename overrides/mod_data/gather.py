# requires python 3
# run or cd into PrismLauncher\instances\[modpack]
# so this code should be running from the instance folder
from zipfile import ZipFile
from pathlib import Path
import json
import re
import os
import logging


MUST_MATCH_PATTERNS = []  # compiled regex patterns loaded from config

logging.basicConfig(filename='mod_data/mod_data.log',
                    format='[%(asctime)s] [%(levelname)s] %(message)s',
                    datefmt='%H:%M:%S',
                    level=logging.DEBUG,
                    filemode='w')
log = logging.getLogger()

rawModData = {}
cleanedModData = {}
modsPath = Path('mods')
extrasPath = Path('mod_data/extras')

compiledModData = {
    'data': {},
    'assets': {}
}


def loadMustMatchPatterns(configPath: str = 'mod_data/config.json'):
    """Load and compile regex patterns from the config file.

    Returns a list of compiled regex patterns. Invalid patterns are skipped
    with an error logged. If the config file is missing, returns an empty list.
    """
    patterns = []
    try:
        with open(configPath, 'r', encoding='utf-8') as f:
            cfg = json.load(f)
        rawPatterns = cfg.get('must_match', []) or []
        for p in rawPatterns:
            try:
                patterns.append(re.compile(p))
            except re.error as e:
                log.error(f'Invalid regex in config "{p}": {e}')
        log.info(
            f'Loaded {len(patterns)}/{len(rawPatterns)} must_match patterns from {configPath}')
    except FileNotFoundError:
        log.warning(
            f'Config file not found at {configPath}; no filtering will be applied')
    except Exception as e:
        log.error(f'Failed to load config from {configPath}: {e}')
    return patterns


def pathMatchesAny(path: str, patterns: list[re.Pattern]) -> bool:
    """Return True if the given path matches any compiled regex in patterns."""
    for pat in patterns:
        if pat.search(path):
            return True
    return False


def gatherData(path: Path):
    log.info('Starting to gather mod data...')
    for mod in path.iterdir():
        if (mod.suffix == '.jar' or mod.suffix == '.zip') and mod.is_file():
            log.info(f'Found mod: "{mod.name}"')
            rawModData[mod.name] = {}

            # Open the jar file as a zipfile
            with ZipFile(mod, 'r') as jar:
                # Iterate through all files in the zipfile
                for file in jar.namelist():
                    # Check if the file is a JSON file
                    if file.endswith('.json'):
                        # Only include files that match one of the configured directories/patterns
                        if MUST_MATCH_PATTERNS and not pathMatchesAny(file, MUST_MATCH_PATTERNS):
                            # log.debug(f'Skipping non-matching file in {mod.name}: {file}')
                            continue
                        try:
                            # Read and parse the JSON content
                            with jar.open(file) as jsonFile:
                                jsonContent = json.load(jsonFile)
                                rawModData[mod.name][file] = jsonContent
                        except Exception as e:
                            log.error(
                                f'Failed to read "{file}" in "{mod.name}": {e}')
    log.info('Finished gathering mod data.')


def cleanData():
    """Transforms rawModData from flat file paths into nested directory structures."""
    log.info('Starting to clean mod data...')

    for modName, files in rawModData.items():
        cleanedModData[modName] = {}

        for filePath, content in files.items():
            # Split the path into parts
            parts = filePath.split('/')

            # Navigate/create nested dictionaries for each directory level
            currentLevel = cleanedModData[modName]
            for part in parts[:-1]:  # All parts except the filename
                if part not in currentLevel:
                    currentLevel[part] = {}
                currentLevel = currentLevel[part]

            # Set the file content at the final level
            filename = parts[-1]
            currentLevel[filename] = content

    log.info('Finished cleaning mod data.')


def compileData():
    """Interprets cleanedModData into what Minecraft actually uses."""
    log.info('Starting to compile mod data...')

    for modName, files in rawModData.items():
        modName: str
        files: dict

        log.info(f'Compiling data for mod: "{modName}"')
        for filePath, content in files.items():
            filePath: str
            content: dict

            # Split and interpret the file path
            filePathSplit = filePath.split('/')
            # Act like resourcepacks are datapacks (special case for Nature's Spirit)
            if filePathSplit[0] == 'resourcepacks':
                # Skip 'resourcepacks/datapackname' segment
                filePathSplit = filePathSplit[2:]

            contentType = filePathSplit[0]
            namespace = filePathSplit[1]
            operation = filePathSplit[2]  # e.g., 'tags', 'models', etc.
            filename = filePathSplit[-1]

            # Create new dicts for each directory
            if namespace not in compiledModData[contentType]:
                compiledModData[contentType][namespace] = {}
            if operation not in compiledModData[contentType][namespace]:
                compiledModData[contentType][namespace][operation] = {}

            if contentType == 'data':
                # Compile tags
                if operation == 'tags':
                    # e.g. 'blocks', 'worldgen/biome', etc
                    tagPath = '/'.join(filePathSplit[3:-1])
                    # Create tag path dict if it doesn't exist
                    if tagPath not in compiledModData[contentType][namespace][operation]:
                        compiledModData[contentType][namespace][operation][tagPath] = {}

                    # Create file dict if it doesn't exist
                    if filename not in compiledModData[contentType][namespace][operation][tagPath]:
                        compiledModData[contentType][namespace][operation][tagPath][filename] = content
                    else:  # Check if replace = True in currently compiled data or new content; otherwise merge
                        if 'replace' in compiledModData[contentType][namespace][operation][tagPath][filename] and \
                                compiledModData[contentType][namespace][operation][tagPath][filename]['replace'] == True:
                            continue
                        elif 'replace' in content and content['replace'] == True:
                            log.info(f'Overriding "{filePath}"')
                            compiledModData[contentType][namespace][operation][tagPath][filename] = content
                        else:
                            log.info(f'Merging values for "{filePath}"')
                            existingValues = compiledModData[contentType][
                                namespace][operation][tagPath][filename]['values']
                            newValues = content['values']

                            # Merge values, handling both strings and dicts
                            mergedValues = list(existingValues)
                            for newVal in newValues:
                                if newVal not in mergedValues:
                                    mergedValues.append(newVal)

                            compiledModData[contentType][namespace][operation][tagPath][filename]['values'] = mergedValues

                # Compile worldgen
                elif operation == 'worldgen':
                    # e.g., 'biome', 'configured_feature', etc.
                    worldgenPath = '/'.join(filePathSplit[3:-1])
                    if worldgenPath not in compiledModData[contentType][namespace][operation]:
                        compiledModData[contentType][namespace][operation][worldgenPath] = {}
                    
                    compiledModData[contentType][namespace][operation][worldgenPath][filename] = content

                elif operation == 'forge':
                    # e.g., worldgen modifiers
                    forgePath = '/'.join(filePathSplit[3:-1])
                    if forgePath not in compiledModData[contentType][namespace][operation]:
                        compiledModData[contentType][namespace][operation][forgePath] = {}

                    compiledModData[contentType][namespace][operation][forgePath][filename] = content

                # TODO: more things to deserialize (as needed)

            if contentType == 'assets':
                # Compile language
                if operation == 'lang':
                    if filename not in compiledModData[contentType][namespace][operation]:
                        compiledModData[contentType][namespace][operation][filename] = content
                    else:
                        compiledModData[contentType][namespace][operation][filename].update(
                            content)

    log.info('Finished compiling mod data.')


def dictAsJson(dct: dict, filename: str):
    """ Utility to write a dictionary to a JSON file for inspection. """
    try:
        with open(f'mod_data/generated/{filename}.json', 'w', encoding='utf-8') as f:
            json.dump(dct, f, indent=4)
        log.info(f'Mod data written to mod_data/generated/{filename}.json')
    except Exception as e:
        log.error(f'Failed to write mod data to JSON: {e}')


def jsonAsDict(filename: str) -> dict:
    """ Utility to read a JSON file into a dictionary for inspection. """
    try:
        with open(f'mod_data/generated/{filename}.json', 'r', encoding='utf-8') as f:
            dct = json.load(f)
        return dct
    except Exception as e:
        log.error(f'Failed to read mod data from JSON: {e}')
        return {}


def main():
    global MUST_MATCH_PATTERNS
    MUST_MATCH_PATTERNS = loadMustMatchPatterns()

    gatherData(extrasPath)
    gatherData(modsPath)
    # cleanData()
    dictAsJson(rawModData, 'raw_mod_data')
    # dictAsJson(cleanedModData, 'cleaned_mod_data')
    # rawModData = jsonAsDict('raw_mod_data')
    compileData()
    dictAsJson(compiledModData, 'compiled_mod_data')


if __name__ == '__main__':
    # clears python output terminal
    os.system('cls')

    main()
