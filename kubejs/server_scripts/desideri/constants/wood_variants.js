// priority: 1500
// this file builds up a list of every id related to every type of wood 
/*
ALLOWED ENTRIES:
type: modId:logType
leaves: leavesBlock
extraLeaves: [list of leaf blocks]
fluid: Fluid.of('fluid', amount)

*/
let woodTypesToConstruct = [
    {
        type: 'minecraft:acacia',
        fluid: false
    },
    {
        type: 'minecraft:birch',
    },
    {
        type: 'minecraft:oak',
        extraLeaves: [
            'biomesoplenty:flowering_oak_leaves'
        ]
    },
    {
        type: 'minecraft:dark_oak',
    },
    {
        type: 'minecraft:jungle',
        fluid: Fluid.of('thermal:latex', 25)
    },
    {
        type: 'minecraft:spruce',
    },
    {
        type: 'minecraft:warped',
        bark: false,
        leaves: false,
        fluid: false,
    },
    {
        type: 'minecraft:crimson',
        bark: false,
        leaves: false,
        fluid: false,
    },
    {
        type: 'biomesoplenty:fir',
        fluid: Fluid.of('thermal:resin', 25)
    },
    {
        type: 'biomesoplenty:redwood',
        fluid: false
    },
    {
        type: 'biomesoplenty:mahogany',
        fluid: Fluid.of('thermal:resin', 50)
    },
    {
        type: 'biomesoplenty:jacaranda',
        fluid: false
    },
    {
        type: 'biomesoplenty:dead',
        fluid: false,
    },
    {
        type: 'biomesoplenty:hellbark',
        fluid: false,
    },
    {
        type: 'biomesoplenty:willow',
    },
    {
        type: 'ecologics:coconut',
        fluid: false
    },
    {
        type: 'ecologics:walnut',
    },
    {
        type: 'ecologics:azalea',
        leaves: 'minecraft:azalea_leaves',
    },
    {
        type: 'ecologics:flowering_azalea',
        leaves: 'minecraft:flowering_azalea_leaves',
    },
    {
        type: 'quark:blossom',
        leaves: 'quark:lavender_blossom_leaves',
        extraLeaves: [
            'quark:blue_blossom_leaves',
            'quark:orange_blossom_leaves',
            'quark:pink_blossom_leaves',
            'quark:yellow_blossom_leaves',
            'quark:red_blossom_leaves',
        ]
    },
    {
        type: 'malum:runewood',
        fluid: false,
    },
    {
        type: 'malum:soulwood',
        fluid: false
    },
    {
        type: 'undergarden:smogstem',
        fluid: false,
    },
    {
        type: 'undergarden:wigglewood',
        fluid: false,
    },
    {
        type: 'undergarden:grongle',
        fluid: false,
    },
    {
        type: 'wildbackport:mangrove',
        fluid: false
    },
    {
        type: 'darkerdepths:petrified',
        fluid: false,
        leaves: false
    },
    {
        type: 'autumnity:maple',
        extraLeaves: [
            'autumnity:yellow_maple_leaves',
            'autumnity:orange_maple_leaves',
            'autumnity:red_maple_leaves'
        ],
        fluid: Fluid.of('thermal:sap', 75)
    },
    {
        type: 'windswept:holly',
        fluid: false
    },
    {
        type: 'windswept:chestnut'
    }
]

var constructedWoodTypes = []

woodTypesToConstruct.forEach(entry => {
    let splitVariant = entry.type.split(':')
    let modId = splitVariant[0]
    let logType = splitVariant[1]
    // TODO: implement variable declaration like this in thingsToCrush
    let logSuffix, woodSuffix, logBlockStripped, woodBlockStripped, logBlock, 
        woodBlock, plankBlock, slabBlock, woodBark, leavesBlock, fluid,
        chest, trappedChest 

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
    leavesBlock = modId + ':' + logType + '_leaves'
    chest = modId + ':' + logType + '_chest'
    trappedChest = modId + ':' + logType + '_trapped_chest'
    fluid = entry?.fluid

    // Exceptions
    if (modId == 'malum') {
        woodBlock = modId + ':' + logType
        woodBlockStripped = modId + ':stripped_' + logType
    }

    if (entry.type == 'ecologics:flowering_azalea') {
        logBlockStripped = modId + ':stripped_azalea' + logSuffix
        woodBlockStripped = modId + ':stripped_azalea' + woodSuffix
    }

    if (entry.bark) {
        woodBark = 'immersive_weathering:' + modId + '/' + logType + '_bark'
        if (modId == 'minecraft') {
            woodBark = 'immersive_weathering:' + logType + '_bark'
        }
    } else { 
        woodBark = undefined
    }

    if (entry.leaves == false) {
        leavesBlock = undefined
    } else if (typeof entry.leaves == 'string') {
        leavesBlock = entry.leaves
    }

    if (fluid == undefined) {
        fluid = Fluid.of('thermal:sap', 25)
    }

    // if mod doesnt have its own wooden chests
    if (!modsWithOwnWoodChests.includes(modId)) {
        if (modId == 'minecraft') {
            chest = 'woodworks:' + logType + '_chest'
            trappedChest = 'woodworks:' + logType + '_trapped_chest'
        } else if (logType == 'azalea') { // a bug in everycompat, maybe it'll be fixed in the future?
            chest = undefined
            trappedChest = undefined
        } else {
            chest = `everycomp:q/${modId}/${logType}_chest`
            trappedChest = `everycomp:q/${modId}/${logType}_trapped_chest`
        }
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

    let woodType = {
        modId: modId,
        logType: logType,
        logSuffix: logSuffix,
        woodSuffix: woodSuffix,
        logBlock: logBlock,
        woodBlock: woodBlock,
        logBlockStripped: logBlockStripped,
        woodBlockStripped: woodBlockStripped,
        plankBlock: plankBlock,
        slabBlock: slabBlock,
        woodBark: woodBark,
        leavesBlock: leavesBlock,
        extraLeaves: entry?.extraLeaves,
        chest: chest,
        trappedChest: trappedChest,
        fluid: fluid
    }

    constructedWoodTypes.push(woodType)
})

