// priority: 1500
// this file builds up a list of every id related to every type of wood 
let woodTypesToConstruct = [
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
    'biomesoplenty:mahogany',
    'biomesoplenty:jacaranda',
    'biomesoplenty:dead',
    'biomesoplenty:hellbark',
    'biomesoplenty:willow',
    'ecologics:coconut',
    'ecologics:walnut',
    'ecologics:azalea',
    'ecologics:flowering_azalea',
    'quark:blossom',
    'malum:runewood',
    'malum:soulwood',
    'undergarden:smogstem',
    'undergarden:wigglewood',
    'undergarden:grongle',
    'darkerdepths:petrified',
    'wildbackport:mangrove'
]

// wood that isn't supported by Immersive Weathering for bark
let unsupportedForWoodBark = [
    'minecraft:warped',
    'minecraft:crimson',
]

var constructedWoodTypes = []

woodTypesToConstruct.forEach(variant => {
    let splitVariant = variant.split(':')
    let modId = splitVariant[0]
    let logType = splitVariant[1]
    let logSuffix, woodSuffix, logBlockStripped, woodBlockStripped, logBlock, woodBlock, plankBlock, slabBlock, woodBark

    // suffix exceptions
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
    woodBark = 'immersive_weathering:' + modId + '/' + logType + '_bark'

    // Exceptions
    if (modId == 'malum') {
        woodBlock = modId + ':' + logType
        woodBlockStripped = modId + ':stripped_' + logType
    }

    if (modId == 'minecraft') {
        woodBark = 'immersive_weathering:' + logType + '_bark'
    }

    if (variant == 'ecologics:flowering_azalea') {
        logBlockStripped = modId + ':stripped_azalea' + logSuffix
        woodBlockStripped = modId + ':stripped_azalea' + woodSuffix
    }

    if (unsupportedForWoodBark.includes(variant)) {
        woodBark = undefined
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

    let woodVariant = {
        modId: modId,
        logType: logType,
        logBlock: logBlock,
        woodBlock: woodBlock,
        logBlockStripped: logBlockStripped,
        woodBlockStripped: woodBlockStripped,
        plankBlock: plankBlock,
        slabBlock: slabBlock,
        woodBark: woodBark
    }

    constructedWoodTypes.push(woodVariant)
})

