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
        overlap: [
            'create:crushing/iron_ore',
            'create:crushing/deepslate_iron_ore',
        ]
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
        overlap: [
            'create:crushing/gold_ore',
            'create:crushing/deepslate_gold_ore',
        ]
    },
    {
        custom: true,
        oreBlock: 'minecraft:nether_gold_ore',
        crushedOre: {
            item: 'minecraft:gold_nugget',
            count: 18
        },
        stratas: 'minecraft:netherrack',
        overlap: [
            'create:crushing/nether_gold_ore',
        ]
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
        overlap: [
            'create:crushing/copper_ore',
            'create:crushing/deepslate_copper_ore',
        ]
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
        extraOutput2: {
            item: 'thermal:sulfur_dust',
            count: 1,
            chance: 0.15
        },
        overlap: [
            'create:crushing/coal_ore',
            'create:crushing/deepslate_coal_ore',
        ]
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
        overlap: [
            'create:crushing/diamond_ore',
            'create:crushing/deepslate_diamond_ore',
        ]
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
        overlap: [
            'create:crushing/lapis_ore',
            'create:crushing/deepslate_lapis_ore',
        ]
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
        overlap: [
            'create:crushing/emerald_ore',
            'create:crushing/deepslate_emerald_ore',
        ]
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
        overlap: [
            'create:crushing/zinc_ore',
            'create:crushing/deepslate_zinc_ore',
        ]
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
        overlap: [
            'create:crushing/silver_ore'
        ]
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
        overlap: [
            'create:crushing/lead_ore'
        ]
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
        overlap: [
            'malum:create/crushing/crush_soulstone',
            'malum:create/crushing/crush_deepslate_soulstone'
        ]
    }
]

var constructedOreRecipes = [] // use this to access ore recipes!

oreRecipesToConstruct.forEach(oreData => {
    // if custom is false, then build:
    if (!oreData.custom) {
        let materialSplit = oreData.material.split(':')
        let materialModId = materialSplit[0]
        let materialPrefix = materialSplit[1]

        oreData.stratas.forEach(strata => {
            let strataSplit = strata.split(':')
            let strataModId = strataSplit[0]
            let strataPrefix = strataSplit[1] + '_'
            if (strata == 'minecraft:stone' || strata == 'minecraft:netherrack') {
                strataPrefix = ''
            }

            let oreBlock = `${strataModId}:${strataPrefix}${materialPrefix}_ore`
            if (strata == 'minecraft:deepslate' || strata == 'minecraft:stone' || strata == 'minecraft:netherrack') {
                oreBlock = `${materialModId}:${strataPrefix}${materialPrefix}_ore`
                if (materialModId == 'immersiveengineering') {
                    oreBlock = `${materialModId}:ore_${strataPrefix}${materialPrefix}`
                }
            }


            let oreRecipeData = {
                oreBlock: oreBlock,
                crushedOre: oreData.crushedOre,
                crushedStrata: strataData[strata].crushedStrata,
            }

            if (oreData.extraOutput1 != undefined) {
                oreRecipeData['extraOutput1'] = oreData.extraOutput1
            }
            if (oreData.extraOutput2 != undefined) {
                oreRecipeData['extraOutput2'] = oreData.extraOutput2
            }
            if (strataData[strata]?.extraStrataOutput != undefined) {
                oreRecipeData['extraStrataOutput'] = strataData[strata].extraStrataOutput
            }

            constructedOreRecipes.push(oreRecipeData)
        })
    }

    // if custom is true, then take manual inputs:
    if (oreData.custom) {
        let oreRecipeData = {
            oreBlock: oreData.oreBlock,
            crushedOre: oreData.crushedOre,
            crushedStrata: strataData[oreData.stratas].crushedStrata,
        }

        if (oreData.extraOutput1 != undefined) {
            oreRecipeData['extraOutput1'] = oreData.extraOutput1
        }
        if (oreData.extraOutput2 != undefined) {
            oreRecipeData['extraOutput2'] = oreData.extraOutput2
        }
        if (strataData[oreData.strata]?.extraStrataOutput != undefined) {
            oreRecipeData['extraStrataOutput'] = strataData[oreData.strata].extraStrataOutput
        }
        if (oreData.dust) {
            //
            if (oreData.dust.customId != undefined) {
                //
            }
        }

        constructedOreRecipes.push(oreRecipeData)
    }

    // delete overlapping recipes
    if (oreData.overlap != undefined) {
        oreData.overlap.forEach(overlappingRecipe => idRemovals.push(overlappingRecipe))
    }
})

//console.log(constructedOreRecipes)