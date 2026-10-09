/** @param {$KubeDataGenerator} e  */
function worldgen_NoMansLand(e) {
    /*
    BIOLITH.BIOME_PLACEMENT.sub_biomes.push(
        {
            dimension: 'minecraft:overworld',
            target: 'minecraft:beach',
            biome: 'nomansland:mud_beach',
            criterion: {
                type: 'biolith:neighbor',
                biome: '#c:is_swamp',
            }
        },
    )
    */

    // trees
    removeBiomeModifier(e, 'nomansland:add_biome_trees/trees_old_growth_birch')
    removeBiomeModifier(e, 'nomansland:add_biome_trees/trees_sunflower_plains')
    removeBiomeModifier(e, 'nomansland:add_biome_trees/trees_cherry_grove')
    // tagged features
    removeBiomeModifier(e, 'nomansland:add_feature_addition/has_beachgrass_tag_features')
    removeBiomeModifier(e, 'nomansland:add_feature_addition/has_dried_grass_tag_features')
    removeBiomeModifier(e, 'nomansland:add_feature_addition/has_frosted_grass_forest_tag_features')
    removeBiomeModifier(e, 'nomansland:add_feature_addition/has_frosted_grass_plains_tag_features')
    // removeBiomeModifier(e, 'nomansland:add_feature_addition/has_icicles_tag_features')
    removeBiomeModifier(e, 'nomansland:add_feature_addition/has_oat_grass_tag_features')
    // spawns
    removeBiomeModifier(e, 'nomansland:spawns/deer/spawn_deer_forest')
    removeBiomeModifier(e, 'nomansland:spawns/deer/spawn_deer_taiga')
    // misc
    removeBiomeModifier(e, 'nomansland:add_patch_barrel_cactus_normal')
    removeBiomeModifier(e, 'nomansland:add_patch_grass_snowy')
    removeBiomeModifier(e, 'nomansland:add_has_cactus_tag_features')
    removeBiomeModifier(e, 'nomansland:add_patch_hearty_succulent')
    removeBiomeModifier(e, 'nomansland:add_patch_succulent_normal')
    removeBiomeModifier(e, 'nomansland:add_patch_dried_grass_mycelium')
    // removeBiomeModifier(e, 'nomansland:add_crag_rock')
    // vanilla biome changes
    // removeBiomeModifier(e, 'nomansland:birch_forest/change_color')
    removeBiomeModifier(e, 'nomansland:birch_forest/remove_features')
    // removeBiomeModifier(e, 'nomansland:old_growth_birch_forest/change_color')
    removeBiomeModifier(e, 'nomansland:old_growth_birch_forest/remove_features')
    // removeBiomeModifier(e, 'nomansland:bamboo_jungle/change_color')
    // removeBiomeModifier(e, 'nomansland:jungle/change_color')
    // removeBiomeModifier(e, 'nomansland:sparse_jungle/change_color')
    removeBiomeModifier(e, 'nomansland:savanna/change_color')
    removeBiomeModifier(e, 'nomansland:savanna_plateau/change_color')
    removeBiomeModifier(e, 'nomansland:windswept_savanna/change_color')

    // snowy taiga would have the same effects as grove
    removeBiomeModifier(e, 'nomansland:snowy_taiga/change_color')
    replaceEffects(e, 'minecraft:snowy_taiga', {
        fog_color: 15200511,
        foliage_color: 10205860,
        grass_color: 10205860,
        sky_color: 7715315,
        water_color: 4220592,
        water_fog_color: 2771621
    })



    // keep new flowers
    removeBiomeModifier(e, 'nomansland:sunflower_plains/remove_features')
    removeFeatures(e, 'nomansland:flower_patches/flowers_sunflower_plains', 'minecraft:sunflower_plains', VEGETAL_DECORATION)
    // seperate grass sprouts feature
    removeBiomeModifier(e, 'nomansland:add_feature_addition/has_overworld_foliage_tag_features')
    addFeatures(e, [
        'nomansland:patch_roots',
        'nomansland:patch_cattail',
        'nomansland:patch_reeds',
        'nomansland:patch_waterlily_common'
    ], '#nomansland:feature_addition/has_overworld_foliage', VEGETAL_DECORATION)
    addFeatures(e, 'nomansland:patch_grass_sprouts_normal', '#kubejs:has_feature/grass_sprouts', VEGETAL_DECORATION)


    // Pine replacement
    /*
    const pine = getFeatureJson('environmental', CONFIGURED, 'environmental:pine')
    const tall_pine = getFeatureJson('environmental', CONFIGURED, 'environmental:tall_pine')
    registerFeature(e, CONFIGURED, 'nomansland:baby_pine', pine)
    registerFeature(e, CONFIGURED, 'nomansland:frosted_pine', pine)
    registerFeature(e, CONFIGURED, 'nomansland:large_frosted_pine', tall_pine)
    registerFeature(e, CONFIGURED, 'nomansland:large_pine', tall_pine)
    registerFeature(e, CONFIGURED, 'nomansland:pine', pine)
    */

    // Willow replacement
    const willow = getFeatureJson('nomansland', CONFIGURED, 'nomansland:willow')
    willow.config.decorators.push({ type: 'environmental:hanging_willow_leaves' })
    registerFeature(e, CONFIGURED, 'nomansland:willow', willow)
    registerFeature(e, CONFIGURED, 'minecraft:swamp_oak', willow)

    const small_willow = getFeatureJson('nomansland', CONFIGURED, 'nomansland:small_willow')
    small_willow.config.decorators.push({ type: 'environmental:hanging_willow_leaves' })
    registerFeature(e, CONFIGURED, 'nomansland:small_willow', small_willow)

    // new weeping willow tree from environmental; used in blackwater river
    const weeping_willow = getFeatureJson('environmental', CONFIGURED, 'environmental:weeping_willow')
    weeping_willow.config.foliage_provider.state.Name = 'nomansland:willow_leaves'
    weeping_willow.config.trunk_provider.state.Name = 'nomansland:willow_log'
    registerFeature(e, CONFIGURED, 'kubejs:weeping_willow', weeping_willow)
    registerFeature(e, PLACED, 'kubejs:weeping_willow_checked', {
        feature: 'kubejs:weeping_willow',
        placement: [wouldSurvive('nomansland:willow_sapling')]
    })

    registerFeature(e, CONFIGURED, 'nomansland:biome_trees/trees_blackwater', {
        type: 'minecraft:random_selector',
        config: {
            default: 'nomansland:willow_checked',
            features: [
                { chance: 0.3, feature: 'kubejs:weeping_willow_checked' },
                { chance: 0.2, feature: 'nomansland:small_willow_checked' },
                { chance: 0.3, feature: 'minecraft:mangrove_checked' }
            ]
        }
    })

    registerFeature(e, CONFIGURED, 'nomansland:biome_trees/trees_swamp', {
        type: 'minecraft:random_selector',
        config: {
            default: 'nomansland:willow_checked',
            features: [
                { chance: 0.2, feature: 'kubejs:weeping_willow_checked' },
                { chance: 0.2, feature: 'nomansland:small_willow_checked' },
            ]
        }
    })




    // Bountiful Fares walnuts on NML walnut trees
    const small_walnut_prototype = getFeatureJson('nomansland', CONFIGURED, 'nomansland:small_walnut_prototype')
    small_walnut_prototype.config.decorators.push({ type: 'minecraft:beehive', probability: 0.005 })  // making it match nomansland:small_walnut
    const walnut = getFeatureJson('nomansland', CONFIGURED, 'nomansland:walnut')
    // Adding the walnuts
    const walnutTrees = [small_walnut_prototype, walnut].forEach(tree => {
        tree.config.decorators.push({
            type: 'minecraft:attached_to_leaves',
            block_provider: {
                type: 'minecraft:randomized_int_state_provider',
                property: 'age',
                source: {
                    type: 'minecraft:simple_state_provider',
                    state: {
                        Name: 'bountifulfares:hanging_walnuts',
                        Properties: { age: '0' }
                    }
                },
                values: {
                    type: 'minecraft:uniform',
                    max_inclusive: 1,
                    min_inclusive: 0
                }
            },
            directions: ['down'],
            exclusion_radius_xz: 1,
            exclusion_radius_y: 0,
            probability: 0.075,
            required_empty_blocks: 1
        })
    })
    registerFeature(e, CONFIGURED, 'nomansland:small_walnut_prototype', small_walnut_prototype)
    registerFeature(e, CONFIGURED, 'nomansland:small_walnut', small_walnut_prototype)
    registerFeature(e, CONFIGURED, 'nomansland:walnut', walnut)

    // Integrating features
    // Flora
    // lavender biome features
    // addFeatures(e, [
    // copyPasteFeature(e, 'nomansland', PLACED, 'nomansland:flower_patches/flowers_lavender_field'),
    // copyPasteFeature(e, 'nomansland', PLACED, 'nomansland:patch_lavender_bush'),
    // copyPasteFeature(e, 'nomansland', PLACED, 'nomansland:patch_lavender_bush_sparse'),
    // ], 'natures_spirit:lavender_fields', VEGETAL_DECORATION)


    // replace oak apple trees with NS/vanilla version
    registerFeature(e, PLACED, 'nomansland:fancy_oak_apple_01', { feature: 'minecraft:fancy_oak', placement: [wouldSurvive('minecraft:oak_sapling')] })
    registerFeature(e, PLACED, 'nomansland:fancy_oak_apple_005', { feature: 'minecraft:fancy_oak', placement: [wouldSurvive('minecraft:oak_sapling')] })
    registerFeature(e, PLACED, 'nomansland:oak_apple_01', { feature: 'minecraft:oak', placement: [wouldSurvive('minecraft:oak_sapling')] })
    registerFeature(e, PLACED, 'nomansland:oak_apple_005', { feature: 'minecraft:oak', placement: [wouldSurvive('minecraft:oak_sapling')] })

    // windswept chestnut trees in NML biomes
    registerFeature(e, CONFIGURED, 'nomansland:biome_trees/trees_old_growth_forest', {
        type: 'minecraft:random_selector',
        config: {
            default: 'minecraft:fancy_oak_bees_0002',
            features: [
                { chance: 0.3, feature: 'nomansland:walnut_checked' },
                { chance: 0.3, feature: 'kubejs:chestnut_checked' },
                { chance: 0.1, feature: 'windswept:pine_checked' },
                { chance: 0.05, feature: 'minecraft:birch_checked' },
                { chance: 0.05, feature: 'nomansland:small_walnut_checked' }
            ]
        }
    })

    // environmental duckweed placement for NML
    registerFeature(e, CONFIGURED, 'nomansland:patch_duckweed', {
        type: 'minecraft:random_patch',
        config: {
            feature: {
                feature: {
                    type: 'minecraft:simple_block',
                    config: {
                        to_place: {
                            type: 'minecraft:simple_state_provider',
                            state: { Name: 'nomansland:duckweed' }
                        }
                    }
                },
                placement: [
                    {
                        type: 'minecraft:block_predicate_filter',
                        predicate: {
                            type: 'minecraft:matching_blocks',
                            blocks: 'minecraft:air'
                        }
                    }
                ]
            },
            tries: 1024,
            xz_spread: 8,
            y_spread: 5
        }
    })
    registerFeature(e, PLACED, 'nomansland:patch_duckweed', {
        feature: 'nomansland:patch_duckweed',
        placement: [
            {
                type: 'minecraft:count',
                count: {
                    type: 'minecraft:weighted_list',
                    distribution: [
                        { data: 0, weight: 3 },
                        { data: 1, weight: 1 }
                    ]
                }
            },
            { type: 'minecraft:in_square' },
            { type: 'minecraft:heightmap', heightmap: 'WORLD_SURFACE_WG' },
            { type: 'minecraft:biome' }
        ]
    })

    // remove frosted grass
    registerFeature(e, CONFIGURED, 'nomansland:patch_grass_snowy', {
        type: 'minecraft:random_patch',
        config: {
            feature: {
                feature: {
                    type: 'minecraft:simple_block',
                    config: {
                        to_place: {
                            type: 'minecraft:weighted_state_provider',
                            entries: [
                                { data: { Name: 'minecraft:short_grass' }, weight: 8 },
                                { data: { Name: 'nomansland:grass_sprouts' }, weight: 4 }
                            ]
                        }
                    }
                },
                placement: [
                    {
                        type: 'minecraft:block_predicate_filter',
                        predicate: {
                            type: 'minecraft:matching_blocks',
                            blocks: 'minecraft:air'
                        }
                    }
                ]
            },
            tries: 32,
            xz_spread: 7,
            y_spread: 3
        }
    })
}
