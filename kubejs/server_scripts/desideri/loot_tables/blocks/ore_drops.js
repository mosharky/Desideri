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
            'beyond_earth:glacio',
            'undergarden:depthrock',
            'undergarden:shiverstone',
            'darkerdepths:aridrock',
            'darkerdepths:limestone'
        ]
    },
    {
        material: 'minecraft:gold',
        strata: [
            'minecraft:stone',
            'minecraft:deepslate',
            'beyond_earth:venus',
            'undergarden:depthrock',
            'darkerdepths:aridrock',
            'darkerdepths:limestone'
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
        material: 'create:zinc',
        strata: [
            'minecraft:stone',
            'minecraft:deepslate'
        ]
    },
    {
        material: 'malum:soulstone',
        strata: [
            'minecraft:stone',
            'minecraft:deepslate'
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
    {
        material: 'oreganized:silver',
        strata: [
            'minecraft:stone',
            'minecraft:deepslate',
            'darkerdepths:limestone',
            'darkerdepths:aridrock'
        ]
    },
    {
        material: 'oreganized:lead',
        strata: [
            'minecraft:stone',
            'minecraft:deepslate'
        ]
    },
]
rawOreTypeBlocks.forEach(oreData => {
    let irregular = oreData.irregular
    let oreBlocks = []
    let rawOre = ''

    if (!irregular) {
        let materialSplit = oreData.material.split(':')
        let materialModId = materialSplit[0]
        let materialPrefix = materialSplit[1]
        rawOre = `${materialModId}:raw_${materialPrefix}`

        oreData.strata.forEach(strata => {
            let strataOre = strata.split(':')
            let strataModId = strataOre[0]
            let strataPrefix = strataOre[1] + '_'

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
            oreBlocks.push(oreBlock)
        })
    } 

    if (irregular) {
        rawOre = oreData.rawOre
        oreData.oreBlocks.forEach(block => {
            oreBlocks.push(block)
        })
    }
    
    // loot table
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
