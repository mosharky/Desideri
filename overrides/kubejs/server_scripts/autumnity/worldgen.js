/** @param {$KubeDataGenerator} e  */
function worldgen_Autumnity(e) {
    // Disable all Autumnity biomes
    disableBlueprintBiome(e, 'autumnity:autumn')

    /*
    addFeatures(e,
        copyPasteFeature(e, 'autumnity', PLACED, 'autumnity:patch_foul_berry_bush'),
        '#kubejs:has_feature/autumnity_foul_berry_bush',
        VEGETAL_DECORATION,
    )

    addFeatures(e,
        copyPasteFeature(e, 'autumnity', PLACED, 'autumnity:patch_pumpkin_pumpkin_fields'),
        '#kubejs:has_feature/autumnity_pumpkins',
        VEGETAL_DECORATION,
    )

    addFeatures(e,
        configuredFoliagePatch(e, 'autumnity:autumn_crocus', 96, 7, 3, 32),
        '#kubejs:has_feature/autumnity_autumn_crocus',
        VEGETAL_DECORATION
    )

    // Maple tree amalgamations
    // Nature's Spirit maple tree with NML maple log and Autumnity leaves
    const mapleTreeJson = {
        type: 'minecraft:tree',
        config: {
            decorators: [],
            dirt_provider: {
                type: 'minecraft:simple_state_provider',
                state: { Name: 'minecraft:dirt' }
            },
            foliage_placer: {
                type: 'natures_spirit:maple_foliage_placer',
                hanging_leaves_chance: 0.26666668,
                hanging_leaves_extension_chance: 0.53333336,
                height: 5,
                offset: 0,
                radius: 4
            },
            foliage_provider: {
                type: 'minecraft:simple_state_provider',
                state: {
                    Name: '',
                    Properties: { distance: '7', persistent: 'false', waterlogged: 'false' }
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
                type: 'natures_spirit:maple_trunk_placer',
                base_height: 9,
                height_rand_a: 2,
                height_rand_b: 0,
                branch_count: {
                    type: 'minecraft:weighted_list',
                    distribution: [
                        { data: 5, weight: 1 },
                        { data: 2, weight: 1 },
                        { data: 3, weight: 1 },
                        { data: 4, weight: 1 }
                    ]
                },
                branch_end_offset_from_top: {
                    type: 'minecraft:uniform',
                    max_inclusive: -1,
                    min_inclusive: -4
                },
                branch_horizontal_length: {
                    type: 'minecraft:uniform',
                    max_inclusive: 3,
                    min_inclusive: 1
                },
                branch_start_offset_from_top: {
                    max_inclusive: -4,
                    min_inclusive: -5
                }
            },
            trunk_provider: {
                type: 'minecraft:simple_state_provider',
                state: {
                    Name: 'nomansland:maple_log',
                    Properties: { axis: 'y' }
                }
            }
        }
    }

    const mapleColors = ['', 'orange', 'yellow', 'red']
    mapleColors.forEach(color => {
        const prefix = color != '' ? `${color}_` : ''
        mapleTreeJson.config.decorators = []
        mapleTreeJson.config.foliage_provider.state.Name = `autumnity:${prefix}maple_leaves`
        registerFeature(e, CONFIGURED, `autumnity:${prefix}maple_tree`, mapleTreeJson)
        mapleTreeJson.config.decorators = [{ type: 'minecraft:beehive', probability: 0.002 }]
        registerFeature(e, CONFIGURED, `autumnity:${prefix}maple_tree_bees_0002`, mapleTreeJson)
        mapleTreeJson.config.decorators = [{ type: 'minecraft:beehive', probability: 0.02 }]
        registerFeature(e, CONFIGURED, `autumnity:${prefix}maple_tree_bees_002`, mapleTreeJson)
        mapleTreeJson.config.decorators = [{ type: 'minecraft:beehive', probability: 0.05 }]
        registerFeature(e, CONFIGURED, `autumnity:${prefix}maple_tree_bees_005`, mapleTreeJson)
        if (color != '') {
            mapleTreeJson.config.decorators = [
                {
                    type: 'autumnity:fallen_leaves',
                    radius: 3,
                    y_spread: 3,
                    provider: {
                        type: 'minecraft:simple_state_provider',
                        state: {
                            Name: `autumnity:${prefix}maple_leaf_pile`,
                            Properties: {
                                down: 'true',
                                east: 'false',
                                north: 'false',
                                south: 'false',
                                up: 'false',
                                waterlogged: 'false',
                                west: 'false'
                            }
                        }
                    }
                },
                { type: 'minecraft:beehive', probability: 0.002 }
            ]
            registerFeature(e, CONFIGURED, `autumnity:${prefix}maple_tree_fallen_leaves_bees_0002`, mapleTreeJson)
            mapleTreeJson.config.decorators[1] = { type: 'minecraft:beehive', probability: 0.02 }
            registerFeature(e, CONFIGURED, `autumnity:${prefix}maple_tree_fallen_leaves_bees_002`, mapleTreeJson)
        }
    })

    registerFeature(e, PLACED, 'autumnity:spotted_maples_red', {
        feature: 'autumnity:red_maple_tree_fallen_leaves_bees_0002',
        placement: [
            {
                type: 'blueprint:better_noise_based_count',
                noise: 'autumnity:spotted_maples',
                noise_offset: -0.4000000059604645,
                noise_to_count_ratio: 1
            },
            { type: 'minecraft:in_square' },
            { type: 'minecraft:surface_water_depth_filter', max_water_depth: 0 },
            { type: 'minecraft:heightmap', heightmap: 'OCEAN_FLOOR' },
            { type: 'minecraft:biome' },
            wouldSurvive('natures_spirit:red_maple_sapling')
        ]
    })
    registerFeature(e, PLACED, 'autumnity:spotted_maples_orange', {
        feature: 'autumnity:orange_maple_tree_fallen_leaves_bees_0002',
        placement: [
            {
                type: 'blueprint:better_noise_based_count',
                noise: 'autumnity:spotted_maples',
                noise_offset: -0.4000000059604645,
                noise_to_count_ratio: 1
            },
            { type: 'minecraft:in_square' },
            { type: 'minecraft:surface_water_depth_filter', max_water_depth: 0 },
            { type: 'minecraft:heightmap', heightmap: 'OCEAN_FLOOR' },
            { type: 'minecraft:biome' },
            wouldSurvive('natures_spirit:orange_maple_sapling')
        ]
    })
    */
}
