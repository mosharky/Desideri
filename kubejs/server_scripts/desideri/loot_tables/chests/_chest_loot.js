// Generic loot tables
removeLootTable('supplementaries:blocks/urn_loot/epic', 'generic')
onEvent('lootjs', event => {
    event
        .addLootTableModifier('supplementaries:blocks/urn_loot/epic')
        .addWeightedLoot([
            'minecraft:emerald',
            'minecraft:diamond',
            'minecraft:ender_pearl',
            'minecraft:slime_ball',
            'supplementaries:bomb_blue'
        ])
})

// Replacing items in loot tables
onEvent('lootjs', event => {
    // Remove Flax from common/uncommon urn loot tbales
    event
        .addLootTableModifier(/supplementaries:blocks\/urn_loot\/(common|uncommon)/)
        .replaceLoot('supplementaries:flax_seeds', 'minecraft:string')
        .replaceLoot('supplementaries:rope', '8x farmersdelight:rope')
    // Remove Steel from meteor loot table
    /*
    event
        .addLootTableModifier('minecraft:loot')
        .replaceLoot('beyond_earth:steel_ingot', 'immersiveengineering:ingot_steel')
    // Replace Lead & Nickel
    event
        .addLootTableModifier('immersiveengineering:chests/engineers_house')
        .replaceLoot('immersiveengineering:nugget_lead', 'oreganized:lead_nugget')
        .replaceLoot('immersiveengineering:nugget_nickel', 'thermal:nickel_nugget')
        */
})