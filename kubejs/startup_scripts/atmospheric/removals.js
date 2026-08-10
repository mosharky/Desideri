function removals_Atmospheric() {
    global.REMOVALS.add([
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
        /atmospheric:.*laurel.*/,
    ])

    structureSwapChest('atmospheric:arid_garden', 'atmospheric:yucca')
    structureSwapChest('atmospheric:kousa_sanctum', 'atmospheric:kousa')
}
