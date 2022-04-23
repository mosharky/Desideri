// priority: 1
// for removing loot tables so I can use LootJS :)
function removeLootTable(lootTable, lootType) {
    // console.log(`Removed the "${lootTable}" loot-table`)
    if (lootType == 'block') {
        return onEvent(`${lootType}.loot_tables`, event => {
            event.addBlock(lootTable, t => {})
        })
    }
    if (lootType == 'chest') {
        return onEvent(`${lootType}.loot_tables`, event => {
            event.addChest(lootTable, t => {})
        })
    }
    if (lootType == 'generic') {
        return onEvent(`${lootType}.loot_tables`, event => {
            event.addGeneric(lootTable, t => {})
        })
    }
    if (lootType == 'entity') {
        return onEvent(`${lootType}.loot_tables`, event => {
            event.addEntity(lootTable, t => {})
        })
    } 
    if (lootType == 'gift') {
        return onEvent(`${lootType}.loot_tables`, event => {
            event.addGift(lootTable, t => {})
        })
    } 
    if (lootType == 'fishing') {
        return onEvent(`${lootType}.loot_tables`, event => {
            event.addFishing(lootTable, t => {})
        })
    }
}