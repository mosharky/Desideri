function removals_NoMansLand() {
    global.REMOVALS.add([
        'nomansland:short_beachgrass',
        'nomansland:tall_beachgrass',
        // 'nomansland:sconce_torch',
        // 'nomansland:sconce_soul_torch',
        'nomansland:frosted_grass',
        // 'nomansland:icicles',
        'nomansland:barrel_cactus',
        'nomansland:succulent',
        'nomansland:dried_grass',
        // 'nomansland:walnuts',
        // 'nomansland:raw_venison',
        // 'nomansland:cooked_venison',
        // 'nomansland:oat_grass',
        // 'nomansdelight:venison_chop',
        // 'nomansdelight:cooked_venison_chop',
        // 'nomansland:seared_venison',
        'nomansland:cobblestone_bricks',
        'nomansland:cobblestone_brick_slab',
        'nomansland:cobblestone_brick_stairs',
        'nomansland:cobblestone_brick_wall',
        'nomansland:cracked_cobblestone_bricks',
        'nomansland:mossy_cobblestone_bricks',
        'nomansland:mossy_cobblestone_brick_slab',
        'nomansland:mossy_cobblestone_brick_stairs',
        'nomansland:mossy_cobblestone_brick_wall',
        'nomansland:deer_spawn_egg',
    ])

    // global.ITEM_SWAPPER.set('nomansland:walnuts', 'bountifulfares:walnut')

    // global.BLOCK_SWAPPER.set('nomansland:extinguished_sconce_torch', 'supplementaries:sconce')  // if only i could do state swapping..
    // global.BLOCK_SWAPPER.set('nomansland:sconce_torch', 'supplementaries:sconce')
    // global.BLOCK_SWAPPER.set('nomansland:sconce_soul_torch', 'supplementaries:sconce_soul')
    // Cobblestone bricks
    global.BLOCK_SWAPPER.set('nomansland:cobblestone_bricks', 'caverns_and_chasms:cobblestone_bricks')
    global.BLOCK_SWAPPER.set('nomansland:cobblestone_brick_slab', 'caverns_and_chasms:cobblestone_brick_slab')
    global.BLOCK_SWAPPER.set('nomansland:cobblestone_brick_stairs', 'caverns_and_chasms:cobblestone_brick_stairs')
    global.BLOCK_SWAPPER.set('nomansland:cobblestone_brick_wall', 'caverns_and_chasms:cobblestone_brick_wall')
    global.BLOCK_SWAPPER.set('nomansland:cracked_cobblestone_bricks', 'caverns_and_chasms:cobblestone_bricks')
    global.BLOCK_SWAPPER.set('nomansland:mossy_cobblestone_bricks', 'caverns_and_chasms:mossy_cobblestone_bricks')
    global.BLOCK_SWAPPER.set('nomansland:mossy_cobblestone_brick_slab', 'caverns_and_chasms:mossy_cobblestone_brick_slab')
    global.BLOCK_SWAPPER.set('nomansland:mossy_cobblestone_brick_stairs', 'caverns_and_chasms:mossy_cobblestone_brick_stairs')
    global.BLOCK_SWAPPER.set('nomansland:mossy_cobblestone_brick_wall', 'caverns_and_chasms:mossy_cobblestone_brick_wall')
    // Bookshelves
    for (const [woodType, woodTypeObj] of Object.entries(global.WOOD_TYPES.minecraft)) {
        if (woodType != 'oak' && woodType != 'pale_oak') {
            global.BLOCK_SWAPPER.set('nomansland:' + woodType + '_bookshelf', woodTypeObj.woodworks.bookshelf)
        }
    }
}
