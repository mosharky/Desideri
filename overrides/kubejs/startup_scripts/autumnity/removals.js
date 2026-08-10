function removals_Autumnity() {
    global.REMOVALS.add([
        // /autumnity:.*leaf_pile.*/,
        'autumnity:syrup_bottle',
        'autumnity:sap_bottle',
        'autumnity:pancake',
    ])

    global.ITEM_SWAPPER.set('autumnity:syrup_bottle', 'nomansland:maple_syrup_bottle')
    global.ITEM_SWAPPER.set('autumnity:sap_bottle','nomansland:maple_syrup_bottle')
}
