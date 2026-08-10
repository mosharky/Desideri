/** @param {$LootTableList} all */
function lootRemovals_Core(all) {
    
}

/** @param {$LootTableList} noBlocks */
function lootRemovals_Core_NoBlocks(noBlocks) {
    global.COMMON_SWAPPER.forEach((value, key) => {
        if (value == 'minecraft:air') {
            noBlocks.removeItem(key)
        } else {
            noBlocks.replaceItem(key, value, true)
        }
    })

    global.REMOVALS.set.forEach(removal => {
        if (!global.COMMON_SWAPPER.has(removal)) {
            noBlocks.removeItem(removal)
        }
    })
}

/** @param {$LootTableEvent} e */
function lootTables_Core(e) {
    // e.addEntityModifier('minecraft:ravager').addLoot('kubejs:ravager_hide')
    // e.addEntityModifier('goety:ravager').addLoot('kubejs:ravager_hide')
    // e.addEntityModifier('goety:trampler').addLoot('kubejs:ravager_hide')
}
