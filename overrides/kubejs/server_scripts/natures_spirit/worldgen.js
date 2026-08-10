/** @param {$KubeDataGenerator} e  */
function worldgen_NaturesSpirit(e) {
    removeFeatures(e, 'natures_spirit:patch_beach_grass', 'natures_spirit:tropical_shores', VEGETAL_DECORATION)
    removeFeatures(e, 'natures_spirit:cattails_placed', '#minecraft:is_overworld', VEGETAL_DECORATION)

    // replace maple tree features in NS biomes
    removeFeatures(e, 'natures_spirit:maple_placed', ['natures_spirit:golden_wilds', 'natures_spirit:marigold_meadows'], VEGETAL_DECORATION)
    removeFeatures(e, 'natures_spirit:maple2_placed', 'natures_spirit:maple_woodlands', VEGETAL_DECORATION)
    addFeatures(e, registerFeature(e, PLACED, 'kubejs:maple_forest_trees', {
        feature: 'autumnity:maple_forest_trees',
        placement: [
            {
                type: 'minecraft:count',
                count: {
                    type: 'minecraft:weighted_list',
                    distribution: [
                        { data: 12, weight: 9 },
                        { data: 13, weight: 1 }
                    ]
                }
            },
            { type: 'minecraft:in_square' },
            { type: 'minecraft:surface_water_depth_filter', max_water_depth: 0 },
            { type: 'minecraft:heightmap', heightmap: 'OCEAN_FLOOR' },
            { type: 'minecraft:biome' }
        ]
    }), 'natures_spirit:maple_woodlands', VEGETAL_DECORATION)
    addFeatures(e, registerFeature(e, PLACED, 'kubejs:plains_maple_trees', {
        feature: 'autumnity:pumpkin_fields_trees',
        placement: [
            {
                type: 'minecraft:noise_based_count',
                noise_factor: 100,
                noise_offset: 0,
                noise_to_count_ratio: 3
            },
            { type: 'minecraft:in_square' },
            { type: 'minecraft:surface_water_depth_filter', max_water_depth: 0 },
            { type: 'minecraft:heightmap', heightmap: 'OCEAN_FLOOR' },
            { type: 'minecraft:biome' }
        ]
    }), ['natures_spirit:golden_wilds', 'natures_spirit:marigold_meadows'], VEGETAL_DECORATION)

    // Removing/replacing cliff features
    removeFeatures(e, [
        'natures_spirit:stone_cliff',  // re-implemented in worldgen_Core
        'natures_spirit:andesite_cliff',  // re-implemented in worldgen_Core
        'natures_spirit:granite_cliff',  // re-implemented in worldgen_Core
        'natures_spirit:terracotta_cliff',  // re-implemented in worldgen_Core
        'natures_spirit:travertine_cliff',
        'natures_spirit:kaolin_cliff',
        'natures_spirit:chert_cliff',
        'natures_spirit:pink_sandstone_cliff',
        'natures_spirit:white_cliff',
    ], '#minecraft:is_overworld', RAW_GENERATION, 'remove_cliffs')

    addFeatures(e, registerCliff(e, 'natures_spirit:chert',
        80, -2, 2, -5, 0,
        ['minecraft:stone'],
        ['minecraft:grass_block', 'minecraft:dirt', 'minecraft:snow_block', 'minecraft:stone', 'natures_spirit:chert', 'minecraft:red_sand', 'natures_spirit:sandy_soil', 'minecraft:terracotta'],
        true), '#kubejs:has_feature/chert_cliff', RAW_GENERATION)
    addFeatures(e, registerCliff(e, 'natures_spirit:kaolin',
        80, -2, 2, -5, 0,
        ['minecraft:stone'],
        ['minecraft:grass_block', 'minecraft:dirt', 'minecraft:stone', 'natures_spirit:kaolin', 'minecraft:red_sand', 'natures_spirit:sandy_soil', 'minecraft:terracotta'],
        true), '#kubejs:has_feature/kaolin_cliff', RAW_GENERATION)
    addFeatures(e, registerCliff(e, 'natures_spirit:travertine',
        256, -2, 2, -16, 0,
        ['minecraft:grass_block', 'minecraft:dirt', 'minecraft:stone', 'atmospheric:red_arid_sand', 'minecraft:coarse_dirt', 'natures_spirit:sandy_soil'],
        ['minecraft:grass_block', 'minecraft:stone', 'minecraft:dirt', 'atmospheric:red_arid_sand', 'minecraft:coarse_dirt', 'natures_spirit:sandy_soil', 'natures_spirit:travertine'],
        true), '#kubejs:has_feature/travertine_cliff', RAW_GENERATION)
    addFeatures(e, registerCliff(e, 'atmospheric:red_arid_sandstone',
        256, -2, 2, -16, 0,
        ['minecraft:grass_block', 'minecraft:dirt', 'minecraft:stone', 'atmospheric:red_arid_sand', 'natures_spirit:sandy_soil'],
        ['minecraft:grass_block', 'minecraft:stone', 'minecraft:dirt', 'atmospheric:red_arid_sand', 'natures_spirit:sandy_soil', 'atmospheric:red_arid_sandstone'],
        true), '#kubejs:has_feature/red_arid_sandstone_cliff', RAW_GENERATION)
    addFeatures(e, registerCliff(e, 'arts_and_crafts:white_chalk',
        256, -2, 2, -16, 0,
        ['minecraft:grass_block', 'minecraft:dirt', 'minecraft:stone', 'natures_spirit:white_chalk'],
        ['minecraft:grass_block', 'minecraft:dirt', 'minecraft:stone', 'natures_spirit:white_chalk']
    ), 'natures_spirit:white_cliffs', RAW_GENERATION)

    // Chert fixer pink sand to red arid sand
    registerCliff(e, 'natures_spirit:chert',
        80, -2, 2, -5, 0,
        ['atmospheric:red_arid_sand'],
        ['natures_spirit:chert', 'natures_spirit:sandy_soil', 'minecraft:terracotta', 'atmospheric:red_arid_sand'],
        true, 'natures_spirit:chert_fixer')

    // Distributing/integrating NS features
    addFeatures(e, copyPasteFeature(e, 'natures_spirit', PLACED, 'natures_spirit:small_larch_placed'), '#kubejs:has_feature/natures_spirit_small_larch', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'natures_spirit', PLACED, 'natures_spirit:rooted_desert_turnip_placed'), '#kubejs:has_feature/natures_spirit_rooted_desert_turnip', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'natures_spirit', PLACED, 'natures_spirit:noise_fir_placed'), '#kubejs:has_feature/natures_spirit_noise_fir', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'natures_spirit', PLACED, 'natures_spirit:patch_drylands_grass'), '#kubejs:has_feature/natures_spirit_scorched_grass', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'natures_spirit', PLACED, 'natures_spirit:flower_helvola'), '#kubejs:has_feature/natures_spirit_flower_helvola', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'natures_spirit', PLACED, 'natures_spirit:lotus_plant_placed'), '#kubejs:has_feature/natures_spirit_lotus_plant', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'natures_spirit', PLACED, 'natures_spirit:patch_lush_fern'), '#kubejs:has_feature/natures_spirit_lush_fern', VEGETAL_DECORATION)
    addFeatures(e, registerFeature(e, PLACED, 'kubejs:sparse_frosty_fir', {
        feature: 'natures_spirit:frosty_fir_tree_spawn',
        placement: [
            { type: 'minecraft:rarity_filter', chance: 24 },
            { type: 'minecraft:in_square' },
            { type: 'minecraft:surface_water_depth_filter', max_water_depth: 0 },
            { type: 'minecraft:heightmap', heightmap: 'OCEAN_FLOOR' },
            { type: 'minecraft:biome' }
        ]
    }), '#kubejs:has_feature/natures_spirit_sparse_frosty_fir', VEGETAL_DECORATION)

    // Some other mod (prob Environmental) was overwriting the NS change
    registerFeature(e, CONFIGURED, 'minecraft:trees_flower_forest', {
        type: 'minecraft:random_selector',
        config: {
            default: 'minecraft:fancy_oak_bees_002',
            features: [
                { chance: 0.2, feature: 'minecraft:birch_bees_002' },
                { chance: 0.015, feature: 'natures_spirit:blue_wisteria_checked' },
                { chance: 0.015, feature: 'natures_spirit:pink_wisteria_checked' },
                { chance: 0.015, feature: 'natures_spirit:white_wisteria_checked' },
                { chance: 0.005, feature: 'natures_spirit:purple_wisteria_checked' }
            ]
        }
    })

    // Remove bushes and acacia trees (Overlap with Atmospheric)
    removeFeatures(e, [
        'natures_spirit:trees_acacia_dense',
        'natures_spirit:oak_bush_placed_dense',
        'natures_spirit:trees_acacia_sparse'
    ], [
        'natures_spirit:tropical_woods',
        'natures_spirit:tropical_basin',
        'natures_spirit:sparse_tropical_woods'
    ], VEGETAL_DECORATION)

    // Remove Azolla in swamp and marsh (i want them in tropical biomes only)
    removeFeatures(e, 'natures_spirit:patch_azolla', ['natures_spirit:marsh', 'minecraft:swamp'], VEGETAL_DECORATION)
    // addFeatures(e, copyPasteFeature(e, 'natures_spirit', PLACED, 'natures_spirit:patch_azolla'), '#kubejs:has_feature/natures_spirit_azolla', VEGETAL_DECORATION)

    // plains biome tree overhaul
    removeFeatures(e, 'minecraft:trees_plains', ['minecraft:plains', 'minecraft:sunflower_plains'], VEGETAL_DECORATION)
    addFeatures(e, [
        //copyPasteFeature(e, 'natures_spirit', PLACED, 'natures_spirit:trees_oak_savanna'),
        copyPasteFeature(e, 'natures_spirit', PLACED, 'natures_spirit:trees_oak_savanna_2'),
    ], ['minecraft:plains', 'minecraft:sunflower_plains'], VEGETAL_DECORATION)

    // remove lush ferns from snowy redwood bc it looks like ass tbh
    removeFeatures(e, 'natures_spirit:patch_lush_fern', 'natures_spirit:snowy_redwood_forest', VEGETAL_DECORATION)

    /* https://github.com/Team-Hibiscus/NatureSpiritForge/blob/1.20.1/src/main/java/net/hibiscus/naturespirit/world/NSSurfaceRules.java
    Replacing pink sand with 'atmospheric:red_arid_sand' as a surface rule
    Lithostitched surface rules apply before any other surface rule, so this is applied before NS gets to apply its own surface rules
        public static final SurfaceRules.ConditionSource ON_FLOOR = stoneDepthCheck(0, false, CaveSurface.FLOOR);
        public static final SurfaceRules.ConditionSource UNDER_FLOOR = stoneDepthCheck(0, true, CaveSurface.FLOOR);
        public static final SurfaceRules.ConditionSource DEEP_UNDER_FLOOR = stoneDepthCheck(0, true, 6, CaveSurface.FLOOR);
        public static final SurfaceRules.ConditionSource VERY_DEEP_UNDER_FLOOR = stoneDepthCheck(0, true, 30, CaveSurface.FLOOR);
        public static final SurfaceRules.ConditionSource ON_CEILING = stoneDepthCheck(0, false, CaveSurface.CEILING);
        public static final SurfaceRules.ConditionSource UNDER_CEILING = stoneDepthCheck(0, true, CaveSurface.CEILING);
    */
    e.json('kubejs:lithostitched/worldgen_modifier/add_surface_rule/replace_pink_sand', {
        type: 'lithostitched:add_surface_rule',
        levels: ['minecraft:overworld'],
        surface_rule: {
            type: 'minecraft:sequence',
            sequence: [
                {
                    type: 'minecraft:condition',
                    if_true: { type: 'minecraft:above_preliminary_surface' },
                    then_run: {
                        type: 'minecraft:sequence',
                        sequence: [
                            {
                                type: 'minecraft:condition',
                                if_true: {  // ON_FLOOR
                                    type: 'minecraft:stone_depth',
                                    add_surface_depth: false,
                                    offset: 0,
                                    secondary_depth_range: 0,
                                    surface_type: 'floor'
                                },
                                then_run: {
                                    type: 'minecraft:condition',
                                    if_true: {
                                        type: 'minecraft:biome',
                                        biome_is: [
                                            'natures_spirit:arid_highlands',
                                        ]
                                    },
                                    then_run: {
                                        type: 'minecraft:sequence',
                                        sequence: [
                                            {  // This rule is needed to prevent pink sand everywhere
                                                type: 'minecraft:condition',
                                                if_true: {
                                                    type: 'minecraft:y_above',
                                                    add_stone_depth: false,
                                                    anchor: { absolute: 256 },
                                                    surface_depth_multiplier: 0
                                                },
                                                then_run: {
                                                    type: 'minecraft:block',
                                                    result_state: { Name: 'natures_spirit:chert' }
                                                }
                                            },
                                            {
                                                type: 'minecraft:condition',
                                                if_true: {
                                                    type: 'minecraft:y_above',
                                                    add_stone_depth: true,
                                                    anchor: { absolute: 70 },
                                                    surface_depth_multiplier: 1
                                                },
                                                then_run: {
                                                    type: 'minecraft:sequence',
                                                    sequence: [
                                                        {
                                                            type: 'minecraft:condition',
                                                            if_true: {
                                                                type: 'minecraft:noise_threshold',
                                                                min_threshold: 0.5454,
                                                                max_threshold: 0.909,
                                                                noise: 'minecraft:surface'
                                                            },
                                                            then_run: {
                                                                type: 'minecraft:block',
                                                                result_state: { Name: 'natures_spirit:sandy_soil' }
                                                            }
                                                        },
                                                        {
                                                            type: 'minecraft:bandlands'
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                type: 'minecraft:condition',
                                                if_true: {  // materialCondition5
                                                    type: 'minecraft:water',
                                                    add_stone_depth: false,
                                                    offset: -1,
                                                    surface_depth_multiplier: 0
                                                },
                                                then_run: {
                                                    type: 'minecraft:sequence',
                                                    sequence: [
                                                        {  // This rule is needed to prevent pink sand everywhere
                                                            type: 'minecraft:condition',
                                                            if_true: {  // ON_CEILING
                                                                type: 'minecraft:stone_depth',
                                                                add_surface_depth: false,
                                                                offset: 0,
                                                                secondary_depth_range: 0,
                                                                surface_type: 'ceiling'
                                                            },
                                                            then_run: {
                                                                type: 'minecraft:block',
                                                                result_state: { Name: 'natures_spirit:chert' }
                                                            }
                                                        },
                                                        {
                                                            type: 'minecraft:block',
                                                            result_state: { Name: 'atmospheric:red_arid_sand' }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            },
                            {
                                type: 'minecraft:condition',
                                if_true: {  // belowWater
                                    type: 'minecraft:water',
                                    add_stone_depth: true,
                                    offset: -6,
                                    surface_depth_multiplier: -1
                                },
                                then_run: {
                                    type: 'minecraft:sequence',
                                    sequence: [
                                        {
                                            type: 'minecraft:condition',
                                            if_true: {  // UNDER_FLOOR
                                                type: 'minecraft:stone_depth',
                                                add_surface_depth: true,
                                                offset: 0,
                                                secondary_depth_range: 0,
                                                surface_type: 'floor'
                                            },
                                            then_run: {
                                                type: 'minecraft:sequence',
                                                sequence: [
                                                    {
                                                        type: 'minecraft:condition',
                                                        if_true: {
                                                            type: 'minecraft:biome',
                                                            biome_is: [
                                                                'natures_spirit:tropical_shores',
                                                                'natures_spirit:drylands'
                                                            ]
                                                        },
                                                        then_run: {
                                                            type: 'minecraft:sequence',
                                                            sequence: [
                                                                {
                                                                    type: 'minecraft:condition',
                                                                    if_true: {  // ON_CEILING
                                                                        type: 'minecraft:stone_depth',
                                                                        add_surface_depth: false,
                                                                        offset: 0,
                                                                        secondary_depth_range: 0,
                                                                        surface_type: 'ceiling'
                                                                    },
                                                                    then_run: {
                                                                        type: 'minecraft:block',
                                                                        result_state: { Name: 'atmospheric:red_arid_sandstone' }
                                                                    }
                                                                },
                                                                {
                                                                    type: 'minecraft:block',
                                                                    result_state: { Name: 'atmospheric:red_arid_sand' }
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        type: 'minecraft:condition',
                                                        if_true: {
                                                            type: 'minecraft:biome',
                                                            biome_is: [
                                                                'natures_spirit:wooded_drylands'
                                                            ]
                                                        },
                                                        then_run: {
                                                            type: 'minecraft:condition',
                                                            if_true: {
                                                                type: 'minecraft:noise_threshold',
                                                                min_threshold: -0.5454,
                                                                max_threshold: 0.0454,
                                                                noise: 'minecraft:surface'
                                                            },
                                                            then_run: {
                                                                type: 'minecraft:sequence',
                                                                sequence: [
                                                                    {
                                                                        type: 'minecraft:condition',
                                                                        if_true: {  // ON_CEILING
                                                                            type: 'minecraft:stone_depth',
                                                                            add_surface_depth: false,
                                                                            offset: 0,
                                                                            secondary_depth_range: 0,
                                                                            surface_type: 'ceiling'
                                                                        },
                                                                        then_run: {
                                                                            type: 'minecraft:block',
                                                                            result_state: { Name: 'atmospheric:red_arid_sandstone' }
                                                                        }
                                                                    },
                                                                    {
                                                                        type: 'minecraft:block',
                                                                        result_state: { Name: 'natures_spirit:sandy_soil' }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            type: 'minecraft:condition',
                                            if_true: {
                                                type: 'minecraft:biome',
                                                biome_is: [
                                                    'natures_spirit:tropical_shores',
                                                ]
                                            },
                                            then_run: {
                                                type: 'minecraft:condition',
                                                if_true: {  // DEEP_UNDER_FLOOR
                                                    type: 'minecraft:stone_depth',
                                                    add_surface_depth: true,
                                                    offset: 0,
                                                    secondary_depth_range: 6,
                                                    surface_type: 'floor'
                                                },
                                                then_run: {
                                                    type: 'minecraft:block',
                                                    result_state: { Name: 'atmospheric:red_arid_sandstone' }
                                                }
                                            }
                                        },
                                        {
                                            type: 'minecraft:condition',
                                            if_true: {
                                                type: 'minecraft:biome',
                                                biome_is: [
                                                    'natures_spirit:drylands'
                                                ]
                                            },
                                            then_run: {
                                                type: 'minecraft:condition',
                                                if_true: {  // VERY_DEEP_UNDER_FLOOR
                                                    type: 'minecraft:stone_depth',
                                                    add_surface_depth: true,
                                                    offset: 0,
                                                    secondary_depth_range: 30,
                                                    surface_type: 'floor'
                                                },
                                                then_run: {
                                                    type: 'minecraft:block',
                                                    result_state: { Name: 'atmospheric:red_arid_sandstone' }
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ]
        }
    })



    // Replacing chalk
    e.json('kubejs:lithostitched/worldgen_modifier/add_surface_rule/replace_chalk', {
        type: 'lithostitched:add_surface_rule',
        levels: ['minecraft:overworld'],
        surface_rule: {
            type: 'minecraft:sequence',
            sequence: [
                {
                    type: 'minecraft:condition',
                    if_true: {
                        type: 'minecraft:y_above',
                        add_stone_depth: false,
                        anchor: { absolute: 60 },
                        surface_depth_multiplier: -1
                    },
                    then_run: {
                        type: 'minecraft:condition',
                        if_true: {
                            type: 'minecraft:biome',
                            biome_is: ['natures_spirit:white_cliffs']
                        },
                        then_run: {
                            type: 'minecraft:block',
                            result_state: { Name: 'arts_and_crafts:white_chalk' }
                        },
                    }
                },
                {
                    type: 'minecraft:condition',
                    if_true: {
                        type: 'minecraft:y_above',
                        add_stone_depth: false,
                        anchor: { absolute: 45 },
                        surface_depth_multiplier: -1
                    },
                    then_run: {
                        type: 'minecraft:condition',
                        if_true: {
                            type: 'minecraft:biome',
                            biome_is: ['natures_spirit:white_cliffs']
                        },
                        then_run: {
                            type: 'minecraft:block',
                            result_state: { Name: 'minecraft:calcite' }
                        },
                    }
                }
            ]
        }
    })
}
