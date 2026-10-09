function removals_Windswept() {
    global.REMOVALS.add([
        /windswept:.*icicle.*/,
        /windswept:packed_ice_brick.*/,
        'windswept:chiseled_packed_ice_bricks',
        'windswept:lavender_tea',
        'windswept:lavender',
        'windswept:lavender_thatch',
        'windswept:lavender_thatch_slab',
        'windswept:lavender_thatch_stairs',
        'windswept:lupine',
        'windswept:snowy_sprouts',
        // /windswept:.*leaf_pile/,
        // 'windswept:gingerbread_block',
        // 'windswept:glazed_gingerbread_block',
        // 'windswept:gingerbread_cookie_block',
        // /windswept:.*gingerbread_brick.*/,
    ])

    global.ITEM_SWAPPER.set('windswept:lavender', 'nomansland:lavender_bush')
    // global.ITEM_SWAPPER.set('windswept:icicles', 'immersive_weathering:icicle')

    /*
    global.STATE_SWAPPER.push(
        {
            new: {
                Name: 'immersive_weathering:icicle',
                Properties: {
                    thickness: 'tip',
                    vertical_direction: 'down',
                    waterlogged: 'false'
                }
            },
            old: {
                Name: 'windswept:icicles',
                Properties: {
                    state: 'normal',
                    waterlogged: 'false'
                }
            }
        },
        {
            new: {
                Name: 'immersive_weathering:icicle',
                Properties: {
                    thickness: 'frustum',
                    vertical_direction: 'down',
                    waterlogged: 'false'
                }
            },
            old: {
                Name: 'windswept:icicles',
                Properties: {
                    state: 'top',
                    waterlogged: 'false'
                }
            }
        },
        {
            new: {
                Name: 'immersive_weathering:icicle',
                Properties: {
                    thickness: 'tip',
                    vertical_direction: 'down',
                    waterlogged: 'false'
                }
            },
            old: {
                Name: 'windswept:icicles',
                Properties: {
                    state: 'bottom',
                    waterlogged: 'false'
                }
            }
        },
        {
            new: {
                Name: 'immersive_weathering:icicle',
                Properties: {
                    thickness: 'tip',
                    vertical_direction: 'up',
                    waterlogged: 'false'
                }
            },
            old: {
                Name: 'windswept:icicles',
                Properties: {
                    state: 'floor',
                    waterlogged: 'false'
                }
            }
        }
    )
    */
}
