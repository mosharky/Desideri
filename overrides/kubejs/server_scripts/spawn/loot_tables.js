/** @param {$LootTableEvent} e */
function lootTables_Spawn(e) {
    e.create('spawn:entities/coastal_crab').createPool(p => {
        p.addEntry(LootEntry.of('naturalist:crab_meat')
            .setCount([2, 3])
            .addFunction(LootFunction.smelt().when(c => c.matchEntity({ flags: { isOnFire: true } })))
        )
    })

    e.getEntityTable('spawn:spider_crab').createPool(p => {
        p.addEntry(LootEntry.of('naturalist:crab_meat')
            .setCount([2, 6])
            .addFunction(LootFunction.smelt().when(c => c.matchEntity({ flags: { isOnFire: true } })))
        )
    })
}