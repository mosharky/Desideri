// priority: 1500
// Credits to the Enigmatica 6 modpack and its incredible development team for the majority of this file.
// This is an edited version of their script here: https://github.com/EnigmaticaModpacks/Enigmatica6/blob/master/kubejs/server_scripts/enigmatica/kubejs/constants/wood_variants.js

// Used to populate the buildWoodVariants constant - Add variants here to enable compat with various cutting mechanics.
// Be aware that you may need to specify exceptions in the loop below for this to work properly.
var woodVariantsToConstruct = [
    'minecraft:acacia',
    'minecraft:birch',
    'minecraft:dark_oak',
    'minecraft:jungle',
    'minecraft:oak',
    'minecraft:spruce',
    'minecraft:warped',
    'minecraft:crimson',
    'biomesoplenty:fir',
    'biomesoplenty:redwood',
    'biomesoplenty:cherry',
    'biomesoplenty:mahogany',
    'biomesoplenty:jacaranda',
    'biomesoplenty:palm',
    'biomesoplenty:dead',
    'biomesoplenty:hellbark',
    /*
    'betterendforge:mossy_glowshroom',
    'betterendforge:lacugrove',
    'betterendforge:end_lotus',
    'betterendforge:pythadendron',
    'betterendforge:dragon_tree',
    'betterendforge:tenanea',
    'betterendforge:helix_tree',
    'betterendforge:umbrella_tree',
    'betterendforge:jellyshroom',
    'betterendforge:lucernia',
    'atmospheric:rosewood',
    'atmospheric:morado',
    'atmospheric:yucca',
    'atmospheric:kousa',
    'atmospheric:aspen',
    'atmospheric:watchful_aspen',
    'atmospheric:crustose',
    'atmospheric:grimwood',
    'upgrade_aquatic:driftwood',
    'upgrade_aquatic:river',
    'environmental:willow',
    'environmental:cherry',
    'environmental:wisteria',
    */
]

var buildWoodVariants = []

woodVariantsToConstruct.forEach((variant) => {
    var splitVariant = variant.split(':')
    var modId = splitVariant[0]
    var logType = splitVariant[1]
    var logSuffix, woodSuffix, logBlockStripped, woodBlockStripped, logBlock, woodBlock, plankBlock, slabBlock

    //suffix exceptions
    switch (logType) {
        case 'warped':
            logSuffix = '_stem';
            woodSuffix = '_hyphae';
            break;
        case 'crimson':
            logSuffix = '_stem';
            woodSuffix = '_hyphae';
            break;
        default:
            logSuffix = '_log';
            woodSuffix = '_wood';
    }

    logBlock = modId + ':' + logType + logSuffix
    woodBlock = modId + ':' + logType + woodSuffix
    logBlockStripped = modId + ':stripped_' + logType + logSuffix
    woodBlockStripped = modId + ':stripped_' + logType + woodSuffix
    plankBlock = modId + ':' + logType + '_planks'
    slabBlock = modId + ':' + logType + '_slab'

    // Exceptions
    /*
    if (modId == 'betterendforge') {
        logSuffix = '_log'
        woodSuffix = '_bark'

        logBlock = modId + ':' + logType + logSuffix
        woodBlock = modId + ':' + logType + woodSuffix
        logBlockStripped = modId + ':' + logType + '_stripped' + logSuffix
        woodBlockStripped = modId + ':' + logType + '_stripped' + woodSuffix
        plankBlock = modId + ':' + logType + '_planks'
    }
    */

    var woodVariant = {
        modId: modId,
        logType: logType,
        logBlock: logBlock,
        woodBlock: woodBlock,
        logBlockStripped: logBlockStripped,
        woodBlockStripped: woodBlockStripped,
        plankBlock: plankBlock,
        slabBlock: slabBlock
    }

    buildWoodVariants.push(woodVariant)
})