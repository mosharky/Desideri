/** @param {$LootTableEvent} e */
function lootTables_Naturalist(e) {
    e.modifyEntityTables('naturalist:clam')
        .createPool(pool => {
            pool.addEntry(LootEntry.of('spawn:shell_fragments').setCount([2, 8]))
        })
        .modifyItemEntry(entry => {
            if (entry.item.id === 'naturalist:clam_meat' || entry.item.id === 'naturalist:cooked_clam_meat') {
                entry.setCount([2, 4])
            }

            return entry
        })
}