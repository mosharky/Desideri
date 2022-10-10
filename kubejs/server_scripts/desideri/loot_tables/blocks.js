onEvent('block.loot_tables', event => {
    event.addSimpleBlock('valhelsia_structures:metal_framed_glass')
    event.addSimpleBlock('valhelsia_structures:metal_framed_glass_pane')
})


removeLootTable('darkerdepths:porous_petrified_log', 'block')
onEvent('lootjs', event => {
    event
        .addBlockLootModifier('darkerdepths:porous_petrified_log')
        .addLoot('thermal:rosin')
        .addLoot('darkerdepths:petrified_log')
})


// GLASS SHARD DROPS
const glassShardBlocks = [
    'create:tiled_glass',
    'create:framed_glass',
    'create:horizontal_framed_glass',
    'create:vertical_framed_glass',
    'valhelsia_structures:metal_framed_glass'
].forEach(block => {
    removeLootTable(block, 'block')
    onEvent('lootjs', event => {
        event
            .addBlockLootModifier(block)
            .pool((p) => {
                p.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch'))
                p.addLoot(block)
            })
            .pool((p) => {
                p.customCondition({ // idk if this is important at all
                    condition: 'quark:flag',
                    flag: 'glass_shard'
                })
                p.not((not) => {
                    not.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch'))
                })
                p.addLoot('quark:clear_shard')
                p.applyBonus('minecraft:fortune', 2) // TODO: i dont think the fortune works
                p.limitCount([2, 4])
                p.simulateExplosionDecay()
            })
    })
})


// RAW METAL ORE DROPS
// makes raw ores only drop once, regardless of the fortune level too
constructedOreData.forEach(oreData => {
    if (oreData?.rawOre != undefined) {
        oreData.oreBlocks.forEach(entry => {
            let oreBlock = entry.oreBlock
            let rawOre = oreData.rawOre
            removeLootTable(oreBlock, 'block')
            onEvent('lootjs', event => {
                event
                    .addBlockLootModifier(oreBlock)
                    .not((not) => {
                        not.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch'))
                    })
                    .addLoot(rawOre)
                    .survivesExplosion()
    
                event
                    .addBlockLootModifier(oreBlock)
                    .matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch'))
                    .addLoot(oreBlock)
            })
        })
    }
})
