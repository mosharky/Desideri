// priority: 1500
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
    },
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
            'undergarden:shiverstone'
        ],
        extraOutput1: {
            item: 'create:crushed_iron_ore',
            count: 2,
            chance: 0.3,
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
            'undergarden:depthrock'
        ],
        extraOutput1: {
            item: 'create:crushed_gold_ore',
            count: 2,
            chance: 0.3,
        }
    },
    {
        custom: true,
        oreBlock: 'minecraft:nether_gold_ore',
        crushedOre: {
            item: 'minecraft:gold_nugget',
            count: 7
        },
        strata: 'minecraft:netherrack',
        extraOutput1: {
            item: 'minecraft:gold_nugget',
            count: 1,
            chance: 0.5
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
            'undergarden:shiverstone'
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
            'undergarden:shiverstone'
        ],
        extraOutput1: {
            item: 'minecraft:diamond',
            count: 1,
            chance: 0.25
        }
    }
]

var constructedOreRecipes = [] // use this to access ore recipes!

oreRecipesToConstruct.forEach(oreData => {
    // if custom is false, then automate:
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
            crushedStrata: strataData[oreData.strata].crushedStrata,
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

        constructedOreRecipes.push(oreRecipeData)
    }
})

//console.log(constructedOreRecipes)