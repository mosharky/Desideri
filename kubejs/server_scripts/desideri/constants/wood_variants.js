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
    'biomesoplenty:dead',
    'biomesoplenty:hellbark',
    'biomesoplenty:willow',
    'hexerei:willow',
    'hexerei:mahogany',
    'ecologics:coconut',
    'quark:azalea',
    'malum:runewood',
    'malum:soulwood'
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
            logSuffix = '_stem'
            woodSuffix = '_hyphae'
            break
        case 'crimson':
            logSuffix = '_stem'
            woodSuffix = '_hyphae'
            break
        default:
            logSuffix = '_log'
            woodSuffix = '_wood'
    }

    logBlock = modId + ':' + logType + logSuffix
    woodBlock = modId + ':' + logType + woodSuffix
    logBlockStripped = modId + ':stripped_' + logType + logSuffix
    woodBlockStripped = modId + ':stripped_' + logType + woodSuffix
    plankBlock = modId + ':' + logType + '_planks'
    slabBlock = modId + ':' + logType + '_slab'

    // Exceptions
    if (modId == 'malum') {
        woodBlock = modId + ':' + logType
        woodBlockStripped = modId + ':stripped_' + logType
    }

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