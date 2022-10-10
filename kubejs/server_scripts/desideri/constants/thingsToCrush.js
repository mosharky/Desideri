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
    /*
    'beyond_earth:mars': {
        crushedStrata: 'beyond_earth:mars_sand',
        extraStrataOutput: {
            item: 'immersiveengineering:dust_saltpeter',
            chance: 0.50
        }
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
    */
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
        /*
        extraStrataOutput: {
            item: 'beyond_earth:ice_shard',
            chance: 0.06
        }
        */
    }
}

const oreDataToConstruct = [
    {
        material: 'minecraft:iron',
        crushedOre: {
            item: 'create:crushed_iron_ore',
            count: 1
        },
        stratas: [
            'minecraft:stone',
            'minecraft:deepslate',
            /*
            'beyond_earth:moon',
            'beyond_earth:mars',
            'beyond_earth:mercury',
            'beyond_earth:glacio',
            */
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
        rawOre: 'minecraft:raw_iron',
        smelted: 'minecraft:iron_ingot'
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
            //'beyond_earth:venus',
            'undergarden:depthrock',
            'darkerdepths:aridrock',
            'darkerdepths:limestone'
        ],
        extraOutput1: {
            item: 'create:crushed_gold_ore',
            count: 2,
            chance: 0.3,
        },
        rawOre: true,
        smelted: 'minecraft:gold_ingot'
    },
    {
        custom: true,
        material: 'minecraft:gold',
        crushedOre: {
            item: 'minecraft:gold_nugget',
            count: 18
        },
        stratas: [
            {
                oreBlock: 'minecraft:nether_gold_ore',
                strata: 'minecraft:netherrack'
            }
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
            //'beyond_earth:glacio'
        ],
        extraOutput1: {
            item: 'create:crushed_copper_ore',
            count: 2,
            chance: 0.3,
        },
        rawOre: true,
        smelted: 'minecraft:copper_ingot',
        nugget: 'create:copper_nugget'
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
            //'beyond_earth:venus',
            //'beyond_earth:glacio',
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
        smelted: 'minecraft:coal'
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
            //'beyond_earth:mars',
            //'beyond_earth:venus',
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
        smelted: 'minecraft:diamond'
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
            //'beyond_earth:glacio',
            'darkerdepths:aridrock',
            'darkerdepths:limestone'
        ],
        extraOutput1: {
            item: 'minecraft:lapis_lazuli',
            count: 2,
            chance: 0.50
        },
        smelted: 'minecraft:lapis_lazuli'
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
        smelted: 'minecraft:emerald'
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
        rawOre: true,
        smelted: 'create:zinc_ingot'
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
        rawOre: true,
        smelted: 'oreganized:silver_ingot'
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
        rawOre: true,
        smelted: 'oreganized:lead_ingot'
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
        rawOre: true,
        smelted: 'undergarden:cloggrum_ingot'
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
        rawOre: true,
        smelted: 'undergarden:froststeel_ingot'
    },
    /*
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
        rawOre: true,
        smelted: 'beyond_earth:desh_ingot'
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
        rawOre: true,
        smelted: 'beyond_earth:ostrum_ingot'
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
        rawOre: true,
        smelted: 'beyond_earth:calorite_ingot'
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
    */
    {
        material: 'malum:soulstone',
        crushedOre: {
            item: 'malum:crushed_soulstone',
            count: 1
        },
        extraOutput1: {
            item: 'malum:crushed_soulstone',
            count: 2,
            chance: 0.3
        },
        stratas: [
            'minecraft:deepslate',
            'minecraft:stone'
        ],
        rawOre: true,
        smelted: 'malum:processed_soulstone',
        nugget: 'malum:processed_soulstone'
    },
    {
        material: 'thermal:tin',
        crushedOre: {
            item: 'create:crushed_tin_ore',
            count: 1
        },
        extraOutput1: {
            item: 'create:crushed_tin_ore',
            count: 2,
            chance: 0.3
        },
        stratas: [
            'minecraft:stone',
            'minecraft:deepslate'
        ],
        rawOre: true,
        smelted: 'thermal:tin_ingot',
        xp: 0.6
    },
    {
        custom: true,
        material: 'malum:natural_quartz',
        crushedOre: {
            item: 'malum:natural_quartz',
            count: 2
        },
        extraOutput1: {
            item: 'malum:natural_quartz',
            count: 1,
            chance: 0.25
        },
        stratas: [
            {
                oreBlock: 'malum:natural_quartz_ore',
                strata: 'minecraft:stone'
            },
            {
                oreBlock: 'malum:deepslate_quartz_ore',
                strata: 'minecraft:deepslate'
            }
        ],
        smelted: 'malum:natural_quartz',
        xp: 0.25
    }
]

var constructedOreData = [] // use this to access ore recipes!
//var constructedOreInfo = [] // use this to access ores/ingots/dust/crushed_ore and a list of ore blocks

/* example of iron entry/object (not fully):
{
    material: 'iron',
    oreBlocks: [
        {
            oreBlock: 'minecraft:iron_ore',
            strata: 'minecraft:stone'
            crushedStrata: 'minecraft:cobblestone',
        },
        {
            oreBlock: 'minecraft:deepslate_iron_ore',
            strata: 'minecraft:deepslate',
            crushedStrata: 'minecraft:cobbled_deepslate',
        },
        {
            oreBlock: 'beyond_earth:glacio_iron_ore',
            strata: 'beyond_earth:glacio',
            crushedStrata: 'beyond_earth:glacio_stone',
            extraStrataOutput: {
                item: 'beyond_earth:ice_shard',
                chance: 0.06
            }
        }
        etc..
    ],
    crushedOre: {
        item: 'create:crushed_iron_ore',
        count: 1
    },
    extraOutput1: {
        item: 'create:crushed_iron_ore',
        count: 2,
        chance: 0.3,
    },
    rawOre: 'minecraft:raw_iron',
    smelted: 'minecraft:iron_ingot'
    oreTag: '#forge:ores/iron',
    dust: 'thermal:iron_dust'
}
*/


oreDataToConstruct.forEach(oreData => {
    let materialSplit, materialModId, material, rawOre
    let oreBlocks = []
    if (!oreData.custom) {
        materialSplit = oreData.material.split(':')
        materialModId = materialSplit[0]
        material = materialSplit[1]
        if (oreData?.rawOre) {
            rawOre = `${materialModId}:raw_${material}`
        } else {
            rawOre = oreData?.rawOre
        }
    } else {
        material = oreData.material.split(':')[1]
        rawOre = oreData?.rawOre
    }

    oreData.stratas.forEach(stratum => {
        let fullStrata, strataSplit, strataModId, strata, oreBlock
        if (!oreData.custom) {
            fullStrata = stratum
            strataSplit = fullStrata.split(':')
            strataModId = strataSplit[0]
            strata = strataSplit[1] + '_'
            oreBlock = `${strataModId}:${strata}${material}_ore`

            if (fullStrata == 'minecraft:stone' || fullStrata == 'minecraft:netherrack') strata = ''
            if (fullStrata == 'minecraft:deepslate' || fullStrata == 'minecraft:stone' || fullStrata == 'minecraft:netherrack') {
                oreBlock = `${materialModId}:${strata}${material}_ore`
            }
        } else {
            fullStrata = stratum.strata
            oreBlock = stratum.oreBlock
        }
        oreBlocks.push({
            oreBlock: oreBlock,
            strata: fullStrata,
            crushedStrata: strataData[fullStrata].crushedStrata,
            extraStrataOutput: strataData[fullStrata]?.extraStrataOutput
        })
    })

    let oreDataToPush = {
        material: oreData.material,
        oreBlocks: oreBlocks,
        crushedOre: oreData.crushedOre,
        extraOutput1: oreData?.extraOutput1,
        extraOutput2: oreData?.extraOutput2,
        oreTag: `#forge:ores/${material}`,
        smelted: oreData?.smelted,
        rawOre: rawOre,
        xp: oreData?.xp,
        nugget: oreData?.nugget
    }
    if (thermalSupportedOres.includes(material)) oreDataToPush.dust = `thermal:${material}_dust`

    constructedOreData.push(oreDataToPush)

})
