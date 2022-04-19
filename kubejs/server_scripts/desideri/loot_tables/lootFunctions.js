// priority: 1
// for removing loot tables so I can use LootJS :)
function removeLootTable(lootTable, lootType) {
    return onEvent(`${lootType}.loot_tables`, event => {
        event.addBlock(lootTable, t => { t.addPool(pool => {})})
    })
}