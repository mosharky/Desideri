// priority: 1500

function multiSmelt(output, input, experience) {
    onEvent('recipes', event => {
        if (experience != undefined) {
            event.smelting(output, input).xp(experience)
            event.blasting(output, input).xp(experience)
        } else {
            event.smelting(output, input)
            event.blasting(output, input)
        }
    })
}

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