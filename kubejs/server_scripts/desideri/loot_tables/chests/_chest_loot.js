// Generic loot tables
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

// Replacing items in loot tables
onEvent('lootjs', event => {
    // Remove Flax from common/uncommon urn loot tbales
    event
        .addLootTableModifier(/supplementaries:blocks\/urn_loot\/(common|uncommon)/)
        .thenReplace('supplementaries:flax_seeds', 'minecraft:string')
        .thenReplace('supplementaries:rope', '8x farmersdelight:rope')

    // Remove Steel from meteor loot table
    event
        .addLootTableModifier('minecraft:loot')
        .thenReplace('beyond_earth:steel_ingot', 'immersiveengineering:ingot_steel')

    event
        .addLootTableModifier('immersiveengineering:engineers_house')
        .thenReplace('immersiveengineering:nugget_lead', 'immersiveengineering:nugget_copper')
        .thenReplace('immersiveengineering:nugget_nickel', 'minecraft:iron_nugget')
})