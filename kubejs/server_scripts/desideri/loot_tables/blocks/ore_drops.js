// this script makes raw ores only drop once, regardless of the fortune level too
const rawOreTypeBlocks = [
    {
        material: 'minecraft:iron',
        strata: [
            'minecraft:stone',
            'minecraft:deepslate',
            'beyond_earth:moon',
            'beyond_earth:mars',
            'beyond_earth:mercury',
            'beyond_earth:glacio'
        ]
    },
    {
        material: 'minecraft:gold',
        strata: [
            'minecraft:stone',
            'minecraft:deepslate',
            'beyond_earth:venus'
        ]
    },
    {
        material: 'minecraft:copper',
        strata: [
            'minecraft:stone',
            'minecraft:deepslate',
            'beyond_earth:glacio'
        ]
    },
    {
        material: 'immersiveengineering:silver',
        strata: [
            'immersiveengineering:stone',
            'immersiveengineering:deepslate',
        ]
    },
    {
        material: 'immersiveengineering:aluminum',
        strata: [
            'immersiveengineering:stone',
            'immersiveengineering:deepslate',
        ]
    },
    {
        material: 'create:zinc',
        strata: [
            'create:stone',
            'create:deepslate',
        ]
    },
    {
        material: 'malum:soulstone',
        strata: [
            'malum:stone',
            'malum:deepslate'
        ]
    },
    {
        material: 'beyond_earth:desh',
        strata: ['beyond_earth:moon']
    },
    {
        material: 'beyond_earth:ostrum',
        strata: ['beyond_earth:mars']
    },
    {
        material: 'beyond_earth:calorite',
        strata: ['beyond_earth:venus']
    },
]
rawOreTypeBlocks.forEach(ore => {
    let irregular = ore.irregular
    let oreBlocks = []
    let rawOre = ''
    if (!irregular) {
        let material = ore.material.split(':')
        let materialModId = material[0]
        let materialElement = material[1]
        rawOre = `${materialModId}:raw_${materialElement}`
        ore.strata.forEach(strata => {
            let strataOre = strata.split(':')
            let strataModId = strataOre[0]
            let strataType = `${strataOre[1]}_`
            if (strataType == 'stone_') {
                strataType = ''
            }
            let oreBlock = `${strataModId}:${strataType}${materialElement}_ore`
            if (strataModId == 'immersiveengineering') {
                oreBlock = `${strataModId}:${strataType}ore_${materialElement}`
            }
            oreBlocks.push(oreBlock)
        })
    } 
    if (irregular) {
        rawOre = ore.rawOre
        ore.oreBlocks.forEach(block => {
            oreBlocks.push(block)
        })
    }
    oreBlocks.forEach(block => {
        removeLootTable(block, 'block')
        onEvent('lootjs', event => {
            event
                .addBlockLootModifier(block)
                .not((not) => {
                    not.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch'))
                })
                .addLoot(rawOre)
                .survivesExplosion()

            event
                .addBlockLootModifier(block)
                .matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch'))
                .addLoot(block)
        })
    })
})
