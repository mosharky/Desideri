function removals_CreateDeco() {
    global.REMOVALS.add([
        'createdeco:gold_coin',
        'createdeco:netherite_nugget',
    ])

    global.ITEM_SWAPPER.set('createdeco:gold_coin', 'numismaticoverhaul:gold_coin')
}