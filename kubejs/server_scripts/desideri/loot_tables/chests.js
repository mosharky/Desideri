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

    event
        .addLootTableModifier('alexsmobs:gameplay/trader_elephant_chest')
        .replaceLoot('alexsmobs:banana', 'neapolitan:banana')
})