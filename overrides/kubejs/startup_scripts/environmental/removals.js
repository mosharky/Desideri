function removals_Environmental() {
    global.REMOVALS.add([
        // /environmental:.*pine.*/,
        /environmental:.*willow.*/,
        // /environmental:.*wisteria.*/,
        /environmental:.*pine.*/,
        'environmental:cattail',
        'environmental:cattail_fluff',
        'environmental:cattail_fluff_block',
        // /environmental:.*leaf_pile.*/,
        'environmental:bluebell',
        // /environmental:grass_thatch.*/,
        'environmental:plum',
        // 'environmental:duck',
        // 'environmental:cooked_duck',
        'environmental:duck_egg',
        // 'environmental:duck_egg_crate',
        'environmental:duckweed',
        'environmental:venison',
        'environmental:cooked_venison',
    ])

    global.ENTITY_REMOVALS.push(
        'environmental:duck',
        'environmental:reindeer',
        'environmental:deer',
        'environmental:pinecone_golem',
    )

    // structureSwapChest('environmental:log_cabin', 'windswept:pine')

    // global.BLOCKSWAP_CONFIG.swapper.set('environmental:cheerful_plum_leaf_pile', 'immersive_weathering:environmental/cheerful_plum_leaf_pile')
    // global.BLOCKSWAP_CONFIG.swapper.set('environmental:moody_plum_leaf_pile', 'immersive_weathering:environmental/moody_plum_leaf_pile')
    // global.BLOCKSWAP_CONFIG.swapper.set('environmental:plum_leaf_pile', 'immersive_weathering:environmental/plum_leaf_pile')

    // global.BLOCK_SWAPPER.set('environmental:pine_leaves', 'windswept:pine_leaves')
    // global.BLOCK_SWAPPER.set('environmental:pinecone', 'windswept:pinecone_block')
    // global.BLOCK_SWAPPER.set('environmental:grass_thatch', 'packedup:grass_thatch')
    // global.BLOCK_SWAPPER.set('environmental:grass_thatch_stairs', 'packedup:grass_thatch_stairs')
    // global.BLOCK_SWAPPER.set('environmental:grass_thatch_slab', 'packedup:grass_thatch_slab')

    // global.ITEM_SWAPPER.set('environmental:pine_sapling', 'windswept:pine_sapling')

    // swapWoodType(global.DISABLED_WOOD_TYPES.environmental.pine, global.WOOD_TYPES.windswept.pine)
}
