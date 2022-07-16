onEvent('block.loot_tables', event => {
    event.addSimpleBlock('valhelsia_structures:metal_framed_glass')
    event.addSimpleBlock('valhelsia_structures:metal_framed_glass_pane')
})

onEvent('lootjs', event => {
    event
        .addBlockLootModifier('biomesoplenty:barley')
        .replaceLoot('minecraft:wheat_seeds', 'thermal:barley_seeds')
})