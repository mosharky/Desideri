import logging
import os
import json
from gather import log, jsonAsDict, dictAsJson


compiledModData = jsonAsDict('compiled_mod_data')
PLACED = 'placed_feature'
CONFIGURED = 'configured_feature'

def getFeature(featureType: str, feature: str) -> dict:
    featureSplit = feature.split(':')
    namespace = featureSplit[0]
    featurePathSplit = featureSplit[1].split('/')
    featurePath = '/'.join(featurePathSplit[:-1])
    featureId = featurePathSplit[-1] + '.json'

    if featurePath != '':
        featurePath = featureType + '/' + featurePath
    else:
        featurePath = featureType

    try:
        featureData = compiledModData['data'][namespace]['worldgen'][featurePath][featureId]
        return featureData
    except KeyError:
        log.error(f'Feature not found: {feature}')
        return {}


def getBiome(biome: str) -> dict:
    biomeSplit = biome.split(':')
    namespace = biomeSplit[0]
    biomeId = biomeSplit[1] + '.json'

    try:
        biomeData = compiledModData['data'][namespace]['worldgen']['biome'][biomeId]
        return biomeData
    except KeyError:
        log.error(f'Biome not found: {biome}')
        return {}


def getTagAsList(tag: str) -> list:
    """ Returns a list of items/blocks in the given tag. 
    tag: e.g., 'minecraft:items/logs'. Put the full tag path."""

    tagSplit = tag.split(':')
    namespace = tagSplit[0]
    tagPathSplit = tagSplit[1].split('/')
    tagPath = '/'.join(tagPathSplit[:-1])
    tagName = tagPathSplit[-1] + '.json'

    try:
        tagValues = compiledModData['data'][namespace]['tags'][tagPath][tagName]['values']
        tagValues.sort()
        return tagValues
    except KeyError:
        log.error(f'Tag not found: {tag}')
        return []


def getLang(objType: str, obj: str) -> str:
    """ Type is the data type of the obj, like 'biome', 'item', or 'block' """
    objSplit = obj.split(':')
    namespace = objSplit[0]
    objId = objSplit[1]

    langId = f'{objType}.{namespace}.{objId}'
    try:
        return compiledModData['assets'][namespace]['lang']['en_us.json'][langId]
    except KeyError:
        log.error(f'Language string not found for {objType}: {obj}')
        return ''


def flattenTag(tag: str) -> list:
    tagValues = getTagAsList(tag)
    retSet = set()
    inputTagPath = '/'.join(tag.split(':')[1].split('/')[:-1])

    for obj in tagValues:
        toParse = ''
        if isinstance(obj, str):
            toParse = obj
        elif isinstance(obj, dict):
            toParse = obj['id']

        if toParse.startswith('#'):
            tagSplit = toParse[1:].split(':')
            namespace = tagSplit[0]
            tagPathSplit = tagSplit[1].split('/')
            tagName = tagPathSplit[-1]
            retSet.update(flattenTag(f'{namespace}:{inputTagPath}/{tagName}'))
        else:
            retSet.add(toParse)

    retList = list(retSet)
    retList.sort()
    return retList

def getBlocksFromPlacedFeature(placedFeature: str) -> list:
    placedFeatureData = getFeature(PLACED, placedFeature)
    configuredFeatureData = getFeature(CONFIGURED, placedFeatureData['feature'])
    blocks = []
    featureType = ''

    if configuredFeatureData['type'] == 'minecraft:random_patch':
        # Parse simple_block
        if configuredFeatureData['config']['feature']['feature']['type'] == 'minecraft:simple_block':
            # Parse simple_state_provider
            if configuredFeatureData['config']['feature']['feature']['type']['config']['to_place']['type'] == 'minecraft:simple_state_provider':
                blocks.append(configuredFeatureData['config']['feature']['feature']['config']['to_place']['state']['Name'])
            # Parse weighted_state_provider
            elif configuredFeatureData['config']['feature']['feature']['type']['config']['to_place']['type'] == 'minecraft:weighted_state_provider':
                entries = configuredFeatureData['config']['feature']['feature']['config']['to_place']['entries']
                for entry in entries:
                    blocks.append(entry['data']['Name'])

    return blocks

def analyzeBiomeFoliage():
    flowers = set(flattenTag('minecraft:items/flowers'))
    overworldBiomesList = flattenTag('minecraft:worldgen/biome/is_overworld')
    for biome in overworldBiomesList:
        biomeData = getBiome(biome)
        biomeName = getLang('biome', biome)
        print(f'Biome: {biome} - {biomeName}')

        undergroundOres = biomeData['features'][6]
        vegetalDecoration = biomeData['features'][9]

        # get placed feature json
        for placedFeature in vegetalDecoration:
            featureJson = getFeature(PLACED, placedFeature)
            configuredFeature = featureJson['feature']
        # get configured feature from placed feature
        # get blocks being placed in configured feature
        # if block is in flowers tag, print flower name


def main():
    analyzeBiomeFoliage()


if __name__ == '__main__':
    # clears python output terminal
    os.system('cls')

    main()
