/*
ServerEvents.registry('neoforge:biome_modifier', e => {
    const blacklist = new Set([
        'almostunified',
        'balm',
        'fabric_biome_api_v1',
        'zeta',
        'snowundertrees',
        'platform',
    ])
    e.getRegistries().access().lookupOrThrow('neoforge:biome_modifier').listElementIds().toArray().forEach(element => {
        const modifier = element.location().toString()
        console.log(modifier)
        const [mod, id] = modifier.split(':')
        if (!blacklist.has(mod)) {
            e.create(modifier, 'none')
        }
    })
})
*/

/** @param {$KubeDataGenerator} e  */
function worldgen_Core(e) {

    const biomeModifiersToRemove = []
    const blacklist = new Set([
        'almostunified',
        'balm',
        'fabric_biome_api_v1',
        'zeta',
        'snowundertrees',
        'platform',
    ])
    const loaded = new Set()
    biomeModifiersToRemove.forEach(modifier => {
        const [mod, id] = modifier.split(':')
        if (!loaded.has(mod) && Platform.isLoaded(mod)) {
            loaded.add(mod)
        }
        if (loaded.has(mod) && !blacklist.has(mod)) {
            removeBiomeModifier(e, modifier)
        }
    })

    // removeFeatures(e, ['minecraft:spring_lava', 'minecraft:spring_lava_frozen'], '#minecraft:is_overworld', FLUID_SPRINGS)

    addFeatures(e, registerCliff(e, 'minecraft:andesite',
        256, -2, 2, -8, 0,
        ['minecraft:grass_block', 'minecraft:dirt', 'minecraft:snow_block', 'minecraft:stone', 'minecraft:coarse_dirt', 'minecraft:andesite'],
        ['minecraft:grass_block', 'minecraft:dirt', 'minecraft:snow_block', 'minecraft:stone', 'minecraft:coarse_dirt', 'minecraft:andesite']
    ), '#kubejs:has_feature/andesite_cliff', RAW_GENERATION)
    addFeatures(e, registerCliff(e, 'minecraft:granite',
        256, -2, 2, -16, 0,
        ['minecraft:grass_block', 'minecraft:stone', 'minecraft:dirt', 'minecraft:rooted_dirt', 'minecraft:granite'],
        ['minecraft:grass_block', 'minecraft:stone', 'minecraft:dirt', 'minecraft:rooted_dirt', 'minecraft:granite']
    ), '#kubejs:has_feature/granite_cliff', RAW_GENERATION)
    addFeatures(e, registerCliff(e, 'minecraft:stone',
        256, -2, 2, -8, 0,
        ['minecraft:grass_block', 'minecraft:dirt', 'minecraft:snow_block', 'minecraft:stone'],
        ['minecraft:grass_block', 'minecraft:snow_block', 'minecraft:stone', 'minecraft:gravel', 'minecraft:dirt']
    ), '#kubejs:has_feature/stone_cliff', RAW_GENERATION)
    addFeatures(e, registerCliff(e, 'minecraft:terracotta',
        96, -2, 2, -6, 0,
        ['minecraft:grass_block', 'minecraft:dirt', 'minecraft:stone', 'minecraft:terracotta'],
        ['minecraft:grass_block', 'minecraft:dirt', 'minecraft:stone', 'minecraft:terracotta']
    ), '#kubejs:has_feature/terracotta_cliff', RAW_GENERATION)

    /* NML Removes these already
    removeFeatures(e, [
        'minecraft:ore_granite_lower',
        'minecraft:ore_granite_upper',
        'minecraft:ore_andesite_lower',
        'minecraft:ore_andesite_upper',
        // hoping to get a different way to get diorite aside from underground idk
        // 'minecraft:ore_diorite_lower',
        'minecraft:ore_diorite_upper',
        'minecraft:ore_dirt',
    ], '#minecraft:is_overworld', UNDERGROUND_ORES)
    */

    registerFeature(e, PLACED, 'minecraft:ore_gravel', {
        feature: 'minecraft:ore_gravel',
        placement: [
            { type: 'minecraft:count', count: 2 },
            { type: 'minecraft:in_square' },
            {
                type: 'minecraft:height_range',
                height: {
                    type: 'minecraft:uniform',
                    max_inclusive: { absolute: 60 },
                    min_inclusive: { absolute: 0 }
                }
            },
            { type: 'minecraft:biome' }
        ]
    })

    /*
    // ⚠️⚠️⚠️⚠️⚠️ Vanilla feature overrides ⚠️⚠️⚠️⚠️⚠️
    // remove maple from NML & replace pine with fir
    registerFeature(e, CONFIGURED, 'minecraft:trees_taiga', {
        type: 'minecraft:random_selector',
        config: {
            default: 'minecraft:spruce_checked',
            features: [
                { chance: 0.33333334, feature: 'minecraft:pine_checked' },
                { chance: 0.1, feature: 'natures_spirit:fir_checked' }
            ]
        }
    })

    // add frosty fir trees to groves
    registerFeature(e, CONFIGURED, 'minecraft:trees_grove', {
        type: 'minecraft:random_selector',
        config: {
            default: 'nomansland:frosted_spruce_checked',
            features: [
                { chance: 0.33, feature: 'nomansland:frosted_spruce_alt_checked' },
                { chance: 0.1, feature: 'natures_spirit:frosty_fir_checked' }
            ]
        }
    })

    // redwood trees in mega taigas
    registerFeature(e, CONFIGURED, 'minecraft:trees_old_growth_pine_taiga', {
        type: 'minecraft:random_selector',
        config: {
            default: 'minecraft:spruce_checked',
            features: [
                { chance: 0.025, feature: 'minecraft:mega_spruce_checked' },
                { chance: 0.4, feature: 'minecraft:mega_pine_checked' },
                { chance: 0.05, feature: 'minecraft:pine_checked' },
                { chance: 0.1, feature: 'natures_spirit:large_redwood_checked' },
                { chance: 0.1, feature: 'natures_spirit:redwood_checked' },
            ]
        }
    })
    registerFeature(e, CONFIGURED, 'minecraft:trees_old_growth_spruce_taiga', {
        type: 'minecraft:random_selector',
        config: {
            default: 'minecraft:spruce_checked',
            features: [
                { chance: 0.5, feature: 'minecraft:mega_spruce_checked' },
                { chance: 0.1, feature: 'minecraft:pine_checked' },
                { chance: 0.2, feature: 'natures_spirit:large_redwood_checked' },
                { chance: 0.05, feature: 'natures_spirit:redwood_checked' },
            ]
        }
    })

    // ⚠️ REVERTING NML CHANGES TO VANILLA FEATURES ⚠️
    const thisFunctionExistsSoYouCanCollapseIt = () => {
        // revert cherry trees to vanilla shape
        registerFeature(e, CONFIGURED, 'minecraft:cherry_bees_005', {
            type: 'minecraft:tree',
            config: {
                decorators: [
                    { type: 'minecraft:beehive', probability: 0.05 }
                ],
                dirt_provider: {
                    type: 'minecraft:simple_state_provider',
                    state: { Name: 'minecraft:dirt' }
                },
                foliage_placer: {
                    type: 'minecraft:cherry_foliage_placer',
                    corner_hole_chance: 0.25,
                    hanging_leaves_chance: 0.16666667,
                    hanging_leaves_extension_chance: 0.33333334,
                    height: 5,
                    offset: 0,
                    radius: 4,
                    wide_bottom_layer_hole_chance: 0.25
                },
                foliage_provider: {
                    type: 'minecraft:simple_state_provider',
                    state: {
                        Name: 'minecraft:cherry_leaves',
                        Properties: {
                            distance: '7',
                            persistent: 'false',
                            waterlogged: 'false'
                        }
                    }
                },
                force_dirt: false,
                ignore_vines: true,
                minimum_size: {
                    type: 'minecraft:two_layers_feature_size',
                    limit: 1,
                    lower_size: 0,
                    upper_size: 2
                },
                trunk_placer: {
                    type: 'minecraft:cherry_trunk_placer',
                    base_height: 7,
                    branch_count: {
                        type: 'minecraft:weighted_list',
                        distribution: [
                            { data: 1, weight: 1 },
                            { data: 2, weight: 1 },
                            { data: 3, weight: 1 }
                        ]
                    },
                    branch_end_offset_from_top: { type: 'minecraft:uniform', max_inclusive: 0, min_inclusive: -1 },
                    branch_horizontal_length: { type: 'minecraft:uniform', max_inclusive: 4, min_inclusive: 2 },
                    branch_start_offset_from_top: { max_inclusive: -3, min_inclusive: -4 },
                    height_rand_a: 1,
                    height_rand_b: 0
                },
                trunk_provider: {
                    type: 'minecraft:simple_state_provider',
                    state: {
                        Name: 'minecraft:cherry_log',
                        Properties: { axis: 'y' }
                    }
                }
            }
        })
        registerFeature(e, CONFIGURED, 'minecraft:cherry', {
            type: 'minecraft:tree',
            config: {
                decorators: [],
                dirt_provider: {
                    type: 'minecraft:simple_state_provider',
                    state: { Name: 'minecraft:dirt' }
                },
                foliage_placer: {
                    type: 'minecraft:cherry_foliage_placer',
                    corner_hole_chance: 0.25,
                    hanging_leaves_chance: 0.16666667,
                    hanging_leaves_extension_chance: 0.33333334,
                    height: 5,
                    offset: 0,
                    radius: 4,
                    wide_bottom_layer_hole_chance: 0.25
                },
                foliage_provider: {
                    type: 'minecraft:simple_state_provider',
                    state: {
                        Name: 'minecraft:cherry_leaves',
                        Properties: {
                            distance: '7',
                            persistent: 'false',
                            waterlogged: 'false'
                        }
                    }
                },
                force_dirt: false,
                ignore_vines: true,
                minimum_size: {
                    type: 'minecraft:two_layers_feature_size',
                    limit: 1,
                    lower_size: 0,
                    upper_size: 2
                },
                trunk_placer: {
                    type: 'minecraft:cherry_trunk_placer',
                    base_height: 7,
                    branch_count: {
                        type: 'minecraft:weighted_list',
                        distribution: [
                            { data: 1, weight: 1 },
                            { data: 2, weight: 1 },
                            { data: 3, weight: 1 }
                        ]
                    },
                    branch_end_offset_from_top: { type: 'minecraft:uniform', max_inclusive: 0, min_inclusive: -1 },
                    branch_horizontal_length: { type: 'minecraft:uniform', max_inclusive: 4, min_inclusive: 2 },
                    branch_start_offset_from_top: { max_inclusive: -3, min_inclusive: -4 },
                    height_rand_a: 1,
                    height_rand_b: 0
                },
                trunk_provider: {
                    type: 'minecraft:simple_state_provider',
                    state: {
                        Name: 'minecraft:cherry_log',
                        Properties: { axis: 'y' }
                    }
                }
            }
        })

        // remove fruit leaves decorator from oak trees
        registerFeature(e, CONFIGURED, 'minecraft:oak_bees_002', {
            type: 'minecraft:tree',
            config: {
                decorators: [
                    { type: 'minecraft:beehive', probability: 0.02 },
                ],
                dirt_provider: {
                    type: 'minecraft:simple_state_provider',
                    state: { Name: 'minecraft:dirt' }
                },
                foliage_placer: {
                    type: 'minecraft:blob_foliage_placer',
                    height: 3,
                    offset: 0,
                    radius: 2
                },
                foliage_provider: {
                    type: 'minecraft:simple_state_provider',
                    state: {
                        Name: 'minecraft:oak_leaves',
                        Properties: {
                            distance: '7',
                            persistent: 'false',
                            waterlogged: 'false'
                        }
                    }
                },
                force_dirt: false,
                ignore_vines: true,
                minimum_size: {
                    type: 'minecraft:two_layers_feature_size',
                    limit: 1,
                    lower_size: 0,
                    upper_size: 1
                },
                trunk_placer: {
                    type: 'minecraft:straight_trunk_placer',
                    base_height: 5,
                    height_rand_a: 2,
                    height_rand_b: 0
                },
                trunk_provider: {
                    type: 'minecraft:simple_state_provider',
                    state: {
                        Name: 'minecraft:oak_log',
                        Properties: { axis: 'y' }
                    }
                }
            }
        })
        registerFeature(e, CONFIGURED, 'minecraft:oak_bees_0002', {
            type: 'minecraft:tree',
            config: {
                decorators: [
                    { type: 'minecraft:beehive', probability: 0.002 },
                ],
                dirt_provider: {
                    type: 'minecraft:simple_state_provider',
                    state: { Name: 'minecraft:dirt' }
                },
                foliage_placer: {
                    type: 'minecraft:blob_foliage_placer',
                    height: 3,
                    offset: 0,
                    radius: 2
                },
                foliage_provider: {
                    type: 'minecraft:simple_state_provider',
                    state: {
                        Name: 'minecraft:oak_leaves',
                        Properties: {
                            distance: '7',
                            persistent: 'false',
                            waterlogged: 'false'
                        }
                    }
                },
                force_dirt: false,
                ignore_vines: true,
                minimum_size: {
                    type: 'minecraft:two_layers_feature_size',
                    limit: 1,
                    lower_size: 0,
                    upper_size: 1
                },
                trunk_placer: {
                    type: 'minecraft:straight_trunk_placer',
                    base_height: 5,
                    height_rand_a: 2,
                    height_rand_b: 0
                },
                trunk_provider: {
                    type: 'minecraft:simple_state_provider',
                    state: {
                        Name: 'minecraft:oak_log',
                        Properties: { axis: 'y' }
                    }
                }
            }
        })
        registerFeature(e, CONFIGURED, 'minecraft:oak_bees_005', {
            type: 'minecraft:tree',
            config: {
                decorators: [
                    { type: 'minecraft:beehive', probability: 0.05 },
                ],
                dirt_provider: {
                    type: 'minecraft:simple_state_provider',
                    state: { Name: 'minecraft:dirt' }
                },
                foliage_placer: {
                    type: 'minecraft:blob_foliage_placer',
                    height: 3,
                    offset: 0,
                    radius: 2
                },
                foliage_provider: {
                    type: 'minecraft:simple_state_provider',
                    state: {
                        Name: 'minecraft:oak_leaves',
                        Properties: {
                            distance: '7',
                            persistent: 'false',
                            waterlogged: 'false'
                        }
                    }
                },
                force_dirt: false,
                ignore_vines: true,
                minimum_size: {
                    type: 'minecraft:two_layers_feature_size',
                    limit: 1,
                    lower_size: 0,
                    upper_size: 1
                },
                trunk_placer: {
                    type: 'minecraft:straight_trunk_placer',
                    base_height: 5,
                    height_rand_a: 2,
                    height_rand_b: 0
                },
                trunk_provider: {
                    type: 'minecraft:simple_state_provider',
                    state: {
                        Name: 'minecraft:oak_log',
                        Properties: { axis: 'y' }
                    }
                }
            }
        })
        registerFeature(e, CONFIGURED, 'minecraft:oak', {
            type: 'minecraft:tree',
            config: {
                decorators: [],
                dirt_provider: {
                    type: 'minecraft:simple_state_provider',
                    state: { Name: 'minecraft:dirt' }
                },
                foliage_placer: {
                    type: 'minecraft:blob_foliage_placer',
                    height: 3,
                    offset: 0,
                    radius: 2
                },
                foliage_provider: {
                    type: 'minecraft:simple_state_provider',
                    state: {
                        Name: 'minecraft:oak_leaves',
                        Properties: {
                            distance: '7',
                            persistent: 'false',
                            waterlogged: 'false'
                        }
                    }
                },
                force_dirt: false,
                ignore_vines: true,
                minimum_size: {
                    type: 'minecraft:two_layers_feature_size',
                    limit: 1,
                    lower_size: 0,
                    upper_size: 1
                },
                trunk_placer: {
                    type: 'minecraft:straight_trunk_placer',
                    base_height: 5,
                    height_rand_a: 2,
                    height_rand_b: 0
                },
                trunk_provider: {
                    type: 'minecraft:simple_state_provider',
                    state: {
                        Name: 'minecraft:oak_log',
                        Properties: { axis: 'y' }
                    }
                }
            }
        })
    }
    thisFunctionExistsSoYouCanCollapseIt()
    */
}


/** @param {$KubeDataGenerator} e  */
function structures_Core(e) {
    // https://teamabnormals.wiki.gg/wiki/Structure_Repaletters
    // Swapping all blocks with Blueprint
    const repaletterJson = {
        structures: '#kubejs:all_structures',
        repaletter: [],
    }

    global.BLOCK_SWAPPER.forEach((replacesWith, replacesBlock) => {
        if (Block.getBlock(replacesWith) == null || !Block.getBlock(replacesBlock) == null) {
            console.error(`BLOCKSWAP ERROR - One of these blocks don't exist: ${replacesWith} : ${replacesBlock}`)
            return
        }
        repaletterJson.repaletter.push({
            type: 'blueprint:simple',
            replaces_block: replacesBlock,
            replaces_with: replacesWith
        })
    })

    // e.json('kubejs:blueprint/structure_repaletters/block_swapper', repaletterJson)


    global.STRUCTURE_BLOCK_SWAPPER.forEach((swapMap, structure) => {
        const json = {
            priority: 1,  // Lower priority value = loads later
            structures: structure,
            repaletter: [],
        }
        swapMap.forEach((replacesWith, replacesBlock) => {
            if (Block.getBlock(replacesWith) == null || !Block.getBlock(replacesBlock) == null) {
                console.error(`BLOCKSWAP ERROR - One of these blocks don't exist: ${replacesWith} : ${replacesBlock} for structure ${structure}`)
                return
            }
            json.repaletter.push({
                type: 'blueprint:simple',
                replaces_block: replacesBlock,
                replaces_with: replacesWith
            })
        })

        e.json(`kubejs:blueprint/structure_repaletters/${nameProcess(structure)}`, json)
    })

    // Replacing minecraft:chest with oak chest by default
    e.json('kubejs:blueprint/structure_repaletters/default_oak_chest', {
        priority: 2,  // Higher priority value = loads earlier
        structures: '#kubejs:minecraft/has_oak_chest',
        repaletter: [
            {
                type: 'blueprint:simple',
                replaces_block: 'minecraft:chest',
                replaces_with: 'woodworks:oak_chest'
            },
            {
                type: 'blueprint:simple',
                replaces_block: 'minecraft:trapped_chest',
                replaces_with: 'woodworks:trapped_oak_chest'
            },
        ],
    })
}
