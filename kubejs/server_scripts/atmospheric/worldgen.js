/** @param {$KubeDataGenerator} e  */
function worldgen_Atmospheric(e) {

    // Disable all biomes
    disableBlueprintBiome(e, 'atmospheric:aspen')
    disableBlueprintBiome(e, 'atmospheric:dunes_and_scrubland')
    disableBlueprintBiome(e, 'atmospheric:kousa')
    disableBlueprintBiome(e, 'atmospheric:laurel')
    disableBlueprintBiome(e, 'atmospheric:rainforest')
    disableBlueprintBiome(e, 'atmospheric:spiny_thicket')

    /*
    removeFeatures(e, [
        'atmospheric:patch_waterlily_rainforest_basin',
        'atmospheric:patch_waterlily_rainforest'
    ], '#kubejs:has_feature/natures_spirit_flower_helvola', VEGETAL_DECORATION)

    addFeatures(e, [
        copyPasteFeature(e, 'atmospheric', PLACED, 'atmospheric:crustose'),
        copyPasteFeature(e, 'atmospheric', PLACED, 'atmospheric:fallen_crustose_log'),
        copyPasteFeature(e, 'atmospheric', PLACED, 'atmospheric:single_agave'),
        copyPasteFeature(e, 'atmospheric', PLACED, 'atmospheric:patch_golden_growths'),
    ], '#kubejs:has_feature/atmospheric_aspen_parkland_foliage', VEGETAL_DECORATION)

    addFeatures(e, copyPasteFeature(e, 'atmospheric', PLACED, 'atmospheric:patch_arid_sprouts'), '#kubejs:has_feature/atmospheric_patch_arid_sprouts', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'atmospheric', PLACED, 'atmospheric:patch_yucca_flower'), '#kubejs:has_feature/atmospheric_patch_yucca_flower', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'atmospheric', PLACED, 'atmospheric:patch_aloe_vera'), '#kubejs:has_feature/atmospheric_patch_aloe_vera', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'atmospheric', PLACED, 'atmospheric:patch_barrel_cactus_dunes'), '#kubejs:has_feature/atmospheric_patch_barrel_cactus_dunes', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'atmospheric', PLACED, 'atmospheric:patch_agave_large'), '#kubejs:has_feature/atmospheric_patch_agave_large', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'atmospheric', PLACED, 'atmospheric:desert_yucca_trees'), '#kubejs:has_feature/atmospheric_desert_yucca_trees', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'atmospheric', PLACED, 'atmospheric:bushes_sparse_rainforest'), '#kubejs:has_feature/atmospheric_bushes_sparse_rainforest', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'atmospheric', PLACED, 'atmospheric:patch_water_hyacinth'), '#kubejs:has_feature/atmospheric_patch_water_hyacinth', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'atmospheric', PLACED, 'atmospheric:trees_sparse_rainforest'), '#kubejs:has_feature/atmospheric_trees_sparse_rainforest', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'atmospheric', PLACED, 'atmospheric:trees_rainforest'), '#kubejs:has_feature/atmospheric_trees_rainforest', VEGETAL_DECORATION)

    removeFeatures(e, 'atmospheric:passion_vines', '#atmospheric:is_rainforest', VEGETAL_DECORATION)
    // addFeatures(e, copyPasteFeature(e, 'atmospheric', PLACED, 'atmospheric:passion_vines'), '#kubejs:has_feature/atmospheric_passion_vines', VEGETAL_DECORATION)

    addFeatures(e, registerFeature(e, PLACED, 'kubejs:atmospheric_sparse_kousa', {
        feature: 'atmospheric:kousa',
        placement: [
            { type: 'minecraft:rarity_filter', chance: 20 },  // might be too rare 
            { type: 'minecraft:in_square' },
            { type: 'minecraft:surface_water_depth_filter', max_water_depth: 0 },
            { type: 'minecraft:heightmap', heightmap: 'OCEAN_FLOOR' },
            { type: 'minecraft:biome' }
        ]
    }), '#kubejs:has_feature/atmospheric_sparse_kousa', VEGETAL_DECORATION)


    // remove atmospheric oranges
    const laurelTrees = [
        'atmospheric:dry_laurel_blood_oranges_08',
        'atmospheric:dry_laurel_oranges_0005',
        'atmospheric:dry_laurel_oranges_08',
        'atmospheric:giant_dry_laurel_blood_oranges_08',
        'atmospheric:giant_dry_laurel_oranges_0005',
        'atmospheric:giant_dry_laurel_oranges_08',
        'atmospheric:large_dry_laurel_blood_oranges_08',
        'atmospheric:large_dry_laurel_oranges_0005',
        'atmospheric:large_dry_laurel_oranges_08',
        'atmospheric:laurel_blood_oranges_08',
        'atmospheric:laurel_oranges_0005',
        'atmospheric:laurel_oranges_08',
        'atmospheric:giant_laurel_blood_oranges_08',
        'atmospheric:giant_laurel_oranges_0005',
        'atmospheric:giant_laurel_oranges_08',
        'atmospheric:large_laurel_blood_oranges_08',
        'atmospheric:large_laurel_oranges_0005',
        'atmospheric:large_laurel_oranges_08',
    ].forEach(tree => {
        const feature = getFeatureJson('atmospheric', CONFIGURED, tree)
        feature.config.decorators = []
        registerFeature(e, CONFIGURED, tree, feature)
    })

    if (Platform.isLoaded('bountifulfares')) {
        // Replaced with Bountiful Fares grassy dirt
        removeFeatures(e, 'atmospheric:coarse_dirt', 'atmospheric:spiny_thicket', VEGETAL_DECORATION)
        removeFeatures(e, 'atmospheric:coarse_dirt_laurel_forest', 'atmospheric:laurel_forest', VEGETAL_DECORATION)
    }
    */
}
