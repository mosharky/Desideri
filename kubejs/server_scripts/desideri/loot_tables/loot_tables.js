onEvent('generic.loot_tables', event => {
    // Overrides supplementaries:blocks/urn_loot/epic
    event.addGeneric('supplementaries:blocks/urn_loot/epic', table => {
        table.addPool(pool => {
            pool.rolls = 1
            pool.addItem('minecraft:emerald')
            pool.addItem('minecraft:diamond')
            pool.addItem('minecraft:ender_pearl')
            pool.addItem('supplementaries:bomb_blue')
            pool.addItem('minecraft:slime_ball')
        })
    })
})

onEvent('lootjs', event => {
    event
        .addLootTableModifier(/supplementaries:blocks\/urn_loot\/(common|uncommon)/)
        .thenReplace('supplementaries:flax_seeds', 'minecraft:string')
        .thenReplace('supplementaries:rope', '8x farmersdelight:rope')

    event
        .addLootTableModifier('minecraft:loot')
        .thenReplace('beyond_earth:steel_ingot', 'immersiveengineering:ingot_steel')
})