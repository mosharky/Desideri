/** @param {$KubeDataGenerator} e  */
function worldgen_Windswept(e) {
    // Disable Lavendar and Tundra biomes
    disableBlueprintBiome(e, 'windswept:chestnut')
    disableBlueprintBiome(e, 'windswept:lavender')
    disableBlueprintBiome(e, 'windswept:pine')
    disableBlueprintBiome(e, 'windswept:savanna')
    disableBlueprintBiome(e, 'windswept:tundra')

    removeBiomeModifier(e, 'windswept:add_feature/snowy_sprouts')
    removeBiomeModifier(e, 'windswept:add_feature/icicles')
    removeBiomeModifier(e, 'windswept:add_feature/grove_holly_trees')
    removeBiomeModifier(e, 'windswept:add_feature/grove_spruce_trees')

    // replace
    removeBiomeModifier(e, 'windswept:add_feature/rare_yellow_petals')
    addFeatures(e, 'windswept:rare_yellow_petals', '#kubejs:has_feature/rare_yellow_petals', VEGETAL_DECORATION)

    // tundra
    BIOLITH.BIOME_PLACEMENT.replacements.push(
        {
            dimension: 'minecraft:overworld',
            target: 'minecraft:snowy_plains',
            biome: 'windswept:tundra',
            proportion: 0.3
        }
    )

    // pine barrens
    BIOLITH.BIOME_PLACEMENT.replacements.push(
        {
            dimension: 'minecraft:overworld',
            target: 'minecraft:taiga',
            biome: 'windswept:pine_barrens',
            proportion: 0.3
        }
    )
    // TODO: test
    BIOLITH.BIOME_PLACEMENT.sub_biomes.push(
        {
            dimension: 'minecraft:overworld',
            target: 'minecraft:snowy_taiga',
            biome: 'windswept:snowy_pine_barrens',
            criterion: {
                type: 'biolith:alternate',
                biome: 'windswept:pine_barrens',
                alternate: 'minecraft:taiga'
            }
        }
    )

    // same as NML old_growth_pine_taiga
    replaceEffects(e, ['windswept:pine_barrens', 'windswept:tundra'], {
        fog_color: 12639487,
        foliage_color: 8292172,
        grass_color: 9149532,
        sky_color: 8431871,
        water_color: 3899064,
        water_fog_color: 2386591
    })
    // same as NML grove
    replaceEffects(e, 'windswept:snowy_pine_barrens', {
        fog_color: 15200511,
        foliage_color: 10205860,
        grass_color: 10205860,
        sky_color: 7715315,
        water_color: 4220592,
        water_fog_color: 2771621
    })



    removeBiomeModifier(e, 'windswept:add_feature/icicles')
    // re-implemented in core/worldgen
    removeBiomeModifier(e, 'windswept:add_feature/rare_flowering_acacia_trees')
    // TODO: find a home for this
    removeBiomeModifier(e, 'windswept:add_feature/sandy_sprouts')

    /*
    addFeatures(e, [
        copyPasteFeature(e, 'windswept', PLACED, 'windswept:large_white_rose'),
        copyPasteFeature(e, 'windswept', PLACED, 'windswept:lavender')
    ], '#kubejs:has_feature/windswept_lavender',
        VEGETAL_DECORATION,
        'add_feature/windswept_lavender'
    )
    */

    // removeFeatures(e, 'windswept:ginger_patch', '#windswept:is_pine_barrens', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'windswept', PLACED, 'windswept:dry_moss_rock'), '#kubejs:has_feature/windswept_dry_moss_rock', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'windswept', PLACED, 'windswept:dry_moss_patch_small'), '#kubejs:has_feature/windswept_dry_moss', VEGETAL_DECORATION)
    // remove from old growth pine
    removeFeatures(e, 'minecraft:forest_rock', ['minecraft:old_growth_pine_taiga', 'minecraft:old_growth_spruce_taiga'], LOCAL_MODIFICATIONS)
    addFeatures(e, copyPasteFeature(e, 'windswept', PLACED, 'windswept:ginger_patch'), '#kubejs:has_feature/windswept_ginger', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'windswept', PLACED, 'windswept:holly_bush'), '#kubejs:has_feature/windswept_holly_bush', VEGETAL_DECORATION)

    addFeatures(e, registerFeature(e, PLACED, 'kubejs:sparse_pine_tree', {
        feature: 'windswept:pine_bees',
        placement: [
            { type: 'minecraft:count', count: 1 },
            { type: 'minecraft:in_square' },
            { type: 'minecraft:surface_water_depth_filter', max_water_depth: 0 },
            { type: 'minecraft:heightmap', heightmap: 'OCEAN_FLOOR' },
            { type: 'minecraft:biome' },
            {
                type: 'minecraft:block_predicate_filter',
                predicate: {
                    type: 'minecraft:would_survive',
                    state: {
                        Name: 'minecraft:oak_sapling',
                        Properties: { stage: '0' }
                    }
                }
            }
        ]
    }), '#kubejs:has_feature/windswept_sparse_pine_tree', VEGETAL_DECORATION)


    // remove lupines
    removeFeatures(e, 'windswept:lupine', '#minecraft:is_overworld', VEGETAL_DECORATION)

    // TODO: windswept fallen logs instead of NML fallen logs in old growth taigas


    // checked chestnut tree
    registerFeature(e, PLACED, 'kubejs:chestnut_checked', {
        feature: 'windswept:chestnut_bees',
        placement: [wouldSurvive('windswept:chestnut_sapling')]
    })
}
