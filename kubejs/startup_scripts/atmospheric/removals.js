function removals_Atmospheric() {
    global.REMOVALS.add([
        // TODO: Remove woods from compat stuff (Supplementaries, everycomp, etc)
        // /atmospheric:.*aspen.*/,
        // /atmospheric:.*leaf_pile.*/,
        // /atmospheric:.*travertine.*/,
        'atmospheric:orange',
        'atmospheric:blood_orange',
        'atmospheric:passion_fruit_tart',
        'atmospheric:passion_fruit',
        'atmospheric:passion_vine',
        'atmospheric:passion_vine_bundle',
        'atmospheric:passion_vine_coil',
        // 'atmospheric:shimmering_passion_fruit',
    ])

    structureSwapChest('atmospheric:arid_garden', 'atmospheric:laurel')
    structureSwapChest('atmospheric:kousa_sanctum', 'atmospheric:kousa')
}
