// priority: 1500
const strataData = {
    'minecraft:stone': {
        crushedStrata: 'minecraft:cobblestone'
    },
    'beyond_earth:mars': {
        crushedStrata: 'beyond_earth:mars_sand',
        extraStrataOutput: {
            item: 'immersiveengineering:dust_saltpeter',
            chance: 0.50
        }
    },
}

const oreRecipesToConstruct = [
    {
        material: 'minecraft:iron',
        crushedOre: {
            item: 'create:crushed_iron_ore',
            count: 2
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
]

/*
need to construct dict with:

- ore block id
- crushed ore w/ count
- extraOutput 1 & 2 (should be optional)
- crushed strata id from strataData
- crushed strata extra output
*/

var constructedOreRecipes = []
var oreBlocks = []


oreRecipesToConstruct.forEach(oreData => {
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
        }

        if (oreData.extraOutput1 != undefined) {
            oreRecipeData['extraOutput1'] = oreData.extraOutput1
        }
        if (oreData.extraOutput2 != undefined) {
            oreRecipeData['extraOutput2'] = oreData.extraOutput2
        }
        if (strataData[strata] != undefined) { // remove this condition when im done being lazy and have filled strataData up
            oreRecipeData['crushedStrata'] = strataData[strata].crushedStrata
        }
        if (strataData[strata]?.extraStrataOutput != undefined) {
            oreRecipeData['extraStrataOutput'] =  strataData[strata].extraStrataOutput
        }

        constructedOreRecipes.push(oreRecipeData)
        oreBlocks.push(oreBlock)
    })
})

//console.log(constructedOreRecipes)