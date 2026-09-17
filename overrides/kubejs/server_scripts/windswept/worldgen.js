/** @param {$KubeDataGenerator} e  */
function worldgen_Windswept(e) {
    // Disable Lavendar and Tundra biomes
    disableBlueprintBiome(e, 'windswept:chestnut')
    disableBlueprintBiome(e, 'windswept:lavender')
    disableBlueprintBiome(e, 'windswept:pine')
    disableBlueprintBiome(e, 'windswept:savanna')
    disableBlueprintBiome(e, 'windswept:tundra')

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

    removeFeatures(e, 'windswept:ginger_patch', '#windswept:is_pine_barrens', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'windswept', PLACED, 'windswept:dry_moss_patch_large'), '#kubejs:has_feature/windswept_tundra_moss', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'windswept', PLACED, 'windswept:lupine'), '#kubejs:has_feature/windswept_lupine', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'windswept', PLACED, 'windswept:dry_moss_rock'), '#kubejs:has_feature/windswept_dry_moss_rock', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'windswept', PLACED, 'windswept:ginger_patch'), '#kubejs:has_feature/windswept_ginger', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'windswept', PLACED, 'windswept:dry_moss_patch_small'), '#kubejs:has_feature/windswept_dry_moss', VEGETAL_DECORATION)
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
    }), '#kubejs:has_feature/windswept_sparse_pine_tree',
        VEGETAL_DECORATION)
    */
}
