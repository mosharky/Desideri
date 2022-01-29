// Only add "generic" loot tables, like injects, that aren't necessarily data-driven
let removeInjected = [
    'supplementaries:inject/dungeon_flax',
    'supplementaries:inject/end_city_stasis',
    'supplementaries:inject/mineshaft_flax',
    'supplementaries:inject/pillager_flax',
    'supplementaries:inject/shipwreck_storage_flax'
]
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
    // Takes all loot tables in removeInjected array and overrides them with an empty loot table
    // because regex is unsupported :(
    removeInjected.forEach((removal) => {
        event.addGeneric(removal, table => { table.addPool(pool => { }) })
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