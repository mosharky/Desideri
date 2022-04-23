const glassBlocks = [
    'create:tiled_glass',
    'create:framed_glass',
    'create:horizontal_framed_glass',
    'create:vertical_framed_glass',
    'valhelsia_structures:metal_framed_glass'
]
glassBlocks.forEach(block => {
    removeLootTable(block, 'block')
    onEvent('lootjs', event => {
        event
            .addBlockLootModifier(block)
            .pool((p) => {
                p.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch'))
                p.addLoot(block)
            })
            .pool((p) => {
                p.customCondition({
                    condition: 'quark:flag',
                    flag: 'glass_shard'
                })
                p.not((not) => {
                    not.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch'))
                })
                p.addLoot('quark:clear_shard')
                p.applyBonus('minecraft:fortune', 2) // not respecting limitCount
                p.limitCount([2, 4], 4)
                p.simulateExplosionDecay()
            })
    })
})
