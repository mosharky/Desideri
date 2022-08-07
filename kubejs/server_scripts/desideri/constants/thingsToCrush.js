// priority: 1400
// this file builds a comprehensive list of recipes for ore crushing processing and maybe other things in the future. god please help me
const strataData = {
    'minecraft:stone': {
        crushedStrata: 'minecraft:cobblestone'
    },
    'minecraft:deepslate': {
        crushedStrata: 'minecraft:cobbled_deepslate'
    },
    'minecraft:netherrack': {
        crushedStrata: 'minecraft:netherrack'
    },
    'beyond_earth:mars': {
        crushedStrata: 'beyond_earth:mars_sand',
        /*
        extraStrataOutput: {
            item: 'immersiveengineering:dust_saltpeter',
            chance: 0.50
        }
        */
    },
    'beyond_earth:moon': {
        crushedStrata: 'beyond_earth:moon_sand'
    },
    'beyond_earth:glacio': {
        crushedStrata: 'beyond_earth:glacio_stone',
        extraStrataOutput: {
            item: 'beyond_earth:ice_shard',
            chance: 0.06
        }
    },
    'beyond_earth:mercury': {
        crushedStrata: 'beyond_earth:mercury_stone'
    },
    'beyond_earth:venus': {
        crushedStrata: 'beyond_earth:venus_sand'
    },
    'darkerdepths:aridrock': {
        crushedStrata: 'minecraft:sand'
    },
    'darkerdepths:limestone': {
        crushedStrata: 'verdure:rock'
    },
    'undergarden:depthrock': {
        crushedStrata: 'undergarden:depthrock',
        extraStrataOutput: {
            item: 'undergarden:depthrock_pebble',
            chance: 0.06,
            count: 6
        }
    },
    'undergarden:shiverstone': {
        crushedStrata: 'undergarden:shiverstone',
        extraStrataOutput: {
            item: 'beyond_earth:ice_shard',
            chance: 0.06
        }
    }
}

const oreRecipesToConstruct = [
    {
        material: 'minecraft:iron',
        crushedOre: {
            item: 'create:crushed_iron_ore',
            count: 1
        },
        stratas: [
            'minecraft:stone',
            'minecraft:deepslate',
            'beyond_earth:moon',
            'beyond_earth:mars',
            'beyond_earth:mercury',
            'beyond_earth:glacio',
            'undergarden:depthrock',
            'undergarden:shiverstone',
            'darkerdepths:aridrock',
            'darkerdepths:limestone'
        ],
        extraOutput1: {
            item: 'create:crushed_iron_ore',
            count: 2,
            chance: 0.3,
        },
        extraInfo: {
            rawOre: 'minecraft:raw_iron',
            smelted: 'minecraft:iron_ingot'
        }
    },
    {
        material: 'minecraft:gold',
        crushedOre: {
            item: 'create:crushed_gold_ore',
            count: 1
        },
        stratas: [
            'minecraft:stone',
            'minecraft:deepslate',
            'beyond_earth:venus',
            'undergarden:depthrock',
            'darkerdepths:aridrock',
            'darkerdepths:limestone'
        ],
        extraOutput1: {
            item: 'create:crushed_gold_ore',
            count: 2,
            chance: 0.3,
        },
        extraInfo: {
            rawOre: true,
            smelted: 'minecraft:gold_ingot'
        }
    },
    {
        custom: true,
        crushedOre: {
            item: 'minecraft:gold_nugget',
            count: 18
        },
        stratas: {
            oreBlock: 'minecraft:nether_gold_ore',
            strata: 'minecraft:netherrack'
        }
    },
    {
        material: 'minecraft:copper',
        crushedOre: {
            item: 'create:crushed_copper_ore',
            count: 1
        },
        stratas: [
            'minecraft:stone',
            'minecraft:deepslate',
            'beyond_earth:glacio'
        ],
        extraOutput1: {
            item: 'create:crushed_copper_ore',
            count: 2,
            chance: 0.3,
        },
        extraInfo: {
            rawOre: true,
            smelted: 'minecraft:copper_ingot'
        }
    },
    {
        material: 'minecraft:coal',
        crushedOre: {
            item: 'minecraft:coal',
            count: 2,
        },
        stratas: [
            'minecraft:stone',
            'minecraft:deepslate',
            'beyond_earth:venus',
            'beyond_earth:glacio',
            'undergarden:depthrock',
            'undergarden:shiverstone',
            'darkerdepths:aridrock',
            'darkerdepths:limestone'
        ],
        extraOutput1: {
            item: 'minecraft:coal',
            count: 1,
            chance: 0.75
        },
        /*
        extraOutput2: {
            item: 'thermal:sulfur_dust',
            count: 1,
            chance: 0.15
        },
        */
        extraInfo: {
            smelted: 'minecraft:coal'
        }
    },
    {
        material: 'minecraft:diamond',
        crushedOre: {
            item: 'minecraft:diamond',
            count: 2
        },
        stratas: [
            'minecraft:stone',
            'minecraft:deepslate',
            'beyond_earth:mars',
            'beyond_earth:venus',
            'undergarden:depthrock',
            'undergarden:shiverstone',
            'darkerdepths:aridrock',
            'darkerdepths:limestone'
        ],
        extraOutput1: {
            item: 'minecraft:diamond',
            count: 1,
            chance: 0.25
        },
        extraInfo: {
            smelted: 'minecraft:diamond'
        }
    },
    {
        material: 'minecraft:lapis',
        crushedOre: {
            item: 'minecraft:lapis_lazuli',
            count: 10
        },
        stratas: [
            'minecraft:stone',
            'minecraft:deepslate',
            'beyond_earth:glacio',
            'darkerdepths:aridrock',
            'darkerdepths:limestone'
        ],
        extraOutput1: {
            item: 'minecraft:lapis_lazuli',
            count: 2,
            chance: 0.50
        },
        extraInfo: {
            smelted: 'minecraft:lapis_lazuli'
        }
    },
    {
        material: 'minecraft:emerald',
        crushedOre: {
            item: 'minecraft:emerald',
            count: 2
        },
        stratas: [
            'minecraft:stone',
            'minecraft:deepslate'
        ],
        extraOutput1: {
            item: 'minecraft:emerald',
            count: 1,
            chance: 0.25
        },
        extraInfo: {
            smelted: 'minecraft:emerald'
        }
    },
    {
        material: 'create:zinc',
        crushedOre: {
            item: 'create:crushed_zinc_ore',
            count: 1
        },
        stratas: [
            'minecraft:stone',
            'minecraft:deepslate'
        ],
        extraOutput1: {
            item: 'create:crushed_zinc_ore',
            count: 2,
            chance: 0.3
        },
        extraInfo: {
            rawOre: true,
            smelted: 'create:zinc_ingot'
        }
    },
    {
        material: 'oreganized:silver',
        crushedOre: {
            item: 'create:crushed_silver_ore',
            count: 1
        },
        stratas: [
            'minecraft:stone',
            'minecraft:deepslate',
            'darkerdepths:aridrock',
            'darkerdepths:limestone'
        ],
        extraOutput1: {
            item: 'create:crushed_silver_ore',
            count: 2,
            chance: 0.3
        },
        extraInfo: {
            rawOre: true,
            smelted: 'oreganized:silver_ingot'
        }
    },
    {
        material: 'oreganized:lead',
        crushedOre: {
            item: 'create:crushed_lead_ore',
            count: 1
        },
        stratas: [
            'minecraft:stone',
            'minecraft:deepslate'
        ],
        extraOutput1: {
            item: 'create:crushed_lead_ore',
            count: 2,
            chance: 0.3
        },
        extraInfo: {
            rawOre: true,
            smelted: 'oreganized:lead_ingot'
        }
    },
    {
        material: 'undergarden:cloggrum',
        crushedOre: {
            item: 'kubejs:crushed_cloggrum_ore',
            count: 1
        },
        stratas: [
            'undergarden:depthrock',
            'undergarden:shiverstone'
        ],
        extraOutput1: {
            item: 'kubejs:crushed_cloggrum_ore',
            count: 2,
            chance: 0.3
        },
        extraInfo: {
            rawOre: true,
            smelted: 'undergarden:cloggrum_ingot'
        }
    },
    {
        material: 'undergarden:froststeel',
        crushedOre: {
            item: 'kubejs:crushed_froststeel_ore',
            count: 1
        },
        stratas: [
            'undergarden:shiverstone'
        ],
        extraOutput1: {
            item: 'kubejs:crushed_froststeel_ore',
            count: 2,
            chance: 0.3
        },
        extraInfo: {
            rawOre: true,
            smelted: 'undergarden:froststeel_ingot'
        }
    },
    {
        material: 'beyond_earth:desh',
        crushedOre: {
            item: 'kubejs:crushed_desh_ore',
            count: 1
        },
        stratas: [
            'beyond_earth:moon'
        ],
        extraOutput1: {
            item: 'kubejs:crushed_desh_ore',
            count: 2,
            chance: 0.3
        },
        extraInfo: {
            rawOre: true,
            smelted: 'beyond_earth:desh_ingot'
        }
    },
    {
        material: 'beyond_earth:ostrum',
        crushedOre: {
            item: 'kubejs:crushed_ostrum_ore',
            count: 1
        },
        stratas: [
            'beyond_earth:mars'
        ],
        extraOutput1: {
            item: 'kubejs:crushed_ostrum_ore',
            count: 2,
            chance: 0.3
        },
        extraInfo: {
            rawOre: true,
            smelted: 'beyond_earth:ostrum_ingot'
        }
    },
    {
        material: 'beyond_earth:calorite',
        crushedOre: {
            item: 'kubejs:crushed_calorite_ore',
            count: 1
        },
        stratas: [
            'beyond_earth:venus'
        ],
        extraOutput1: {
            item: 'kubejs:crushed_calorite_ore',
            count: 2,
            chance: 0.3
        },
        extraInfo: {
            rawOre: true,
            smelted: 'beyond_earth:calorite_ingot'
        }
    },
    {
        material: 'beyond_earth:ice_shard',
        crushedOre: {
            item: 'beyond_earth:ice_shard',
            count: 6
        },
        stratas: [
            'beyond_earth:moon',
            'beyond_earth:mars',
            'beyond_earth:glacio'
        ],
        extraOutput1: {
            item: 'beyond_earth:ice_shard',
            count: 2,
            chance: 0.50
        }
    },
    {
        material: 'malum:soulstone',
        crushedOre: {
            item: 'malum:crushed_soulstone',
            count: 2
        },
        stratas: [
            'minecraft:deepslate',
            'minecraft:stone'
        ],
        extraInfo: {
            rawOre: true,
            smelted: 'malum:processed_soulstone'
        }
    },
    {
        custom: true,
        crushedOre: {
            item: 'malum:chunk_of_brilliance',
            count: 6
        },
        stratas: [
            {
                oreBlock: 'malum:brilliant_stone',
                strata: 'minecraft:stone',
            },
            {
                oreBlock: 'malum:brilliant_deepslate',
                strata: 'minecraft:deepslate',
            }
        ],
        extraOutput1: {
            item: 'create:experience_nugget',
            count: 3
        },
        extraInfo: {
            rawOre: 'malum:cluster_of_brilliance',
            smelted: 'malum:chunk_of_brilliance',
            oreTag: '#forge:ores/brilliant'
        }
    },
]

var constructedOreRecipes = [] // use this to access ore recipes!
var constructedOreInfo = [] // use this to access ores/ingots/dust/crushed_ore and a list of ore blocks

oreRecipesToConstruct.forEach(oreData => {
    // if custom is false, then build:
    if (!oreData.custom) {
        let materialSplit = oreData.material.split(':')
        let materialModId = materialSplit[0]
        let materialPrefix = materialSplit[1]

        let oreBlocks = []

        oreData.stratas.forEach(strata => {
            let strataSplit = strata.split(':')
            let strataModId = strataSplit[0]
            let strataPrefix = strataSplit[1] + '_'
            let oreBlock = strataModId + ':' + strataPrefix + materialPrefix + '_ore'

            if (strata == 'minecraft:stone' || strata == 'minecraft:netherrack') {
                strataPrefix = ''
            }

            if (strata == 'minecraft:deepslate' || strata == 'minecraft:stone' || strata == 'minecraft:netherrack') {
                oreBlock = materialModId + ':' + strataPrefix + materialPrefix + '_ore'
            }
            if (oreData.extraInfo != undefined) { oreBlocks.push(oreBlock) }

            let oreRecipeData = {
                oreBlock: oreBlock,
                crushedOre: oreData.crushedOre,
                crushedStrata: strataData[strata].crushedStrata,
                oreTag: `#forge:ores/${materialPrefix}`
            }

            if (oreData.extraOutput1 != undefined) {
                oreRecipeData['extraOutput1'] = oreData.extraOutput1
            }
            if (oreData.extraOutput2 != undefined) {
                oreRecipeData['extraOutput2'] = oreData.extraOutput2
            }
            if (oreData.extraInfo != undefined) {
                if (oreData.extraInfo.rawOre != undefined) {
                    oreRecipeData['rawOre'] = materialModId + ':' + 'raw_' + materialPrefix
                }
                if (oreData.extraInfo.smelted != undefined) {
                    oreRecipeData['smelted'] = oreData.extraInfo.smelted
                }
            }
            if (strataData[strata]?.extraStrataOutput != undefined) {
                oreRecipeData['extraStrataOutput'] = strataData[strata].extraStrataOutput
            }
            if (thermalSupportedOres.includes(materialPrefix)) {
                oreRecipeData['dust'] = `thermal:${materialPrefix}_dust`
            }

            constructedOreRecipes.push(oreRecipeData)
        })

        // for other stuff that isnt crushing
        let oreInfoData = {
            oreBlocks: oreBlocks,
            crushedOre: oreData.crushedOre,
            oreTag: `#forge:ores/${materialPrefix}`
        }

        if (oreData.extraInfo != undefined) {
            if (oreData.extraInfo.rawOre != undefined) {
                oreInfoData['rawOre'] = materialModId + ':' + 'raw_' + materialPrefix
            }
            if (oreData.extraInfo.smelted != undefined) {
                oreInfoData['smelted'] = oreData.extraInfo.smelted
            }
        }

        if (thermalSupportedOres.includes(materialPrefix)) {
            oreInfoData['dust'] = `thermal:${materialPrefix}_dust`
        }

        constructedOreInfo.push(oreInfoData)

    }
    // if custom is true, then take manual inputs:
    if (oreData.custom) {
        let oreBlocks = []
        let stratas = oreData.stratas
        stratas.forEach(ore => {
            let oreRecipeData = {
                oreBlock: ore.oreBlock,
                crushedOre: oreData.crushedOre,
                crushedStrata: strataData[ore.strata].crushedStrata,
                oreTag: `#forge:ores/${materialPrefix}`
            }

            if (oreData.extraOutput1 != undefined) {
                oreRecipeData['extraOutput1'] = oreData.extraOutput1
            }
            if (oreData.extraOutput2 != undefined) {
                oreRecipeData['extraOutput2'] = oreData.extraOutput2
            }
            if (strataData[oreData.stratas]?.extraStrataOutput != undefined) {
                oreRecipeData['extraStrataOutput'] = strataData[oreData.stratas].extraStrataOutput
            }
            if (oreData.extraInfo != undefined) {
                if (oreData.extraInfo.rawOre != undefined) {
                    oreRecipeData['rawOre'] = oreData.extraInfo.rawOre
                }
                if (oreData.extraInfo.smelted != undefined) {
                    oreRecipeData['smelted'] = oreData.extraInfo.smelted
                }
                if (oreData.extraInfo.oreTag != undefined) {
                    oreInfoData['oreTag'] = oreData.extraInfo.oreTag
                }
            }

            oreBlocks.push(ore.oreBlock)
            constructedOreRecipes.push(oreRecipeData)
        })

        // for other stuff that isnt crushing
        let oreInfoData = {
            oreBlocks: oreBlocks,
            crushedOre: oreData.crushedOre,
        }

        if (oreData.extraInfo != undefined) {
            if (oreData.extraInfo.rawOre != undefined) {
                oreInfoData['rawOre'] = materialModId + ':' + 'raw_' + materialPrefix
            }
            if (oreData.extraInfo.smelted != undefined) {
                oreInfoData['smelted'] = oreData.extraInfo.smelted
            }
            if (oreData.extraInfo.oreTag != undefined) {
                oreInfoData['oreTag'] = oreData.extraInfo.oreTag
            }
        }

        constructedOreInfo.push(oreInfoData)
    }
})

//console.log(constructedOreRecipes)