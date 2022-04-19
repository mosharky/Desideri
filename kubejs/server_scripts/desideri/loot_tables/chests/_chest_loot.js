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
        .replaceLoot('supplementaries:flax_seeds', 'minecraft:string')
        .replaceLoot('supplementaries:rope', '8x farmersdelight:rope')
    // Remove Steel from meteor loot table
    event
        .addLootTableModifier('minecraft:loot')
        .replaceLoot('beyond_earth:steel_ingot', 'immersiveengineering:ingot_steel')
    // Replace Lead & Nickel
    event
        .addLootTableModifier('immersiveengineering:engineers_house')
        .replaceLoot('immersiveengineering:nugget_lead', 'immersiveengineering:nugget_copper')
        .replaceLoot('immersiveengineering:nugget_nickel', 'minecraft:iron_nugget')
})