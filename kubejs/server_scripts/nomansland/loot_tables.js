/** @param {$LootTableEvent} e */
function lootTables_NoMansLand(e) {
    e.modifyBlockTables('nomansland:pine_leaves').removeItem('nomansland:pine_nuts')
}


/** @param {$LootTableList} all */
function lootRemovals_NoMansLand(all) {
    all.removeItem('nomansland:walnuts')
}
