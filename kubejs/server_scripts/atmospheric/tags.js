/** @param {$TagKubeEvent} e */
function entityTags_Atmospheric(e) {
    e.add('atmospheric:yucca_immune', [
        // TODO: add mobs that should be immune to yucca
    ])

    e.add('atmospheric:cactus_immune', [
        // TODO: add mobs that should be immune to cactus
    ])
}

/** @param {$TagKubeEvent} e */
function biomeTags_Atmospheric(e) {
    e.removeAll('atmospheric:spawns_yellow_rabbits')
    e.add('c:is_hot/overworld', [
        '#atmospheric:is_dunes',
        '#atmospheric:is_rainforest',
        'atmospheric:spiny_thicket',
        'atmospheric:scrubland',
    ])
    e.add('c:is_wet', [
        '#atmospheric:is_rainforest',
    ])

    e.add('atmospheric:spawns_arid_camels', [
        'natures_spirit:lively_dunes',
        'natures_spirit:blooming_dunes',
        'natures_spirit:stratified_desert',
        'natures_spirit:scorched_dunes',
        'natures_spirit:drylands',
        'natures_spirit:arid_highlands',
    ])

    /*
    e.add('kubejs:has_feature/atmospheric_aspen_parkland_foliage', [
        'natures_spirit:aspen_forest'
    ])

    e.add('kubejs:has_feature/atmospheric_patch_arid_sprouts', [
        'natures_spirit:lively_dunes',
        'natures_spirit:blooming_dunes',
        'natures_spirit:stratified_desert',
        'natures_spirit:scorched_dunes',
        'natures_spirit:drylands',
        'natures_spirit:arid_highlands',
        'natures_spirit:arid_savanna',
    ])

    e.add('kubejs:has_feature/atmospheric_patch_yucca_flower', [
        'natures_spirit:lively_dunes',
        'natures_spirit:blooming_dunes',
        'natures_spirit:drylands',
        'natures_spirit:wooded_drylands',
        'natures_spirit:arid_highlands',
        'natures_spirit:arid_savanna',
    ])

    e.add('kubejs:has_feature/atmospheric_patch_aloe_vera', [
        'natures_spirit:lively_dunes',
        'natures_spirit:blooming_dunes',
        'natures_spirit:stratified_desert',
        'natures_spirit:scorched_dunes',
    ])

    e.add('kubejs:has_feature/atmospheric_patch_barrel_cactus_dunes', [
        'natures_spirit:lively_dunes',
        'natures_spirit:blooming_dunes',
        'natures_spirit:stratified_desert',
        'natures_spirit:scorched_dunes',
    ])

    e.add('kubejs:has_feature/atmospheric_patch_agave_large', [
        'natures_spirit:aspen_forest',
        'natures_spirit:lively_dunes',
        'natures_spirit:blooming_dunes',
    ])

    e.add('kubejs:has_feature/atmospheric_desert_yucca_trees', [
        'natures_spirit:arid_highlands',
        'natures_spirit:arid_savanna',
        'natures_spirit:chaparral',
        'natures_spirit:drylands',
        'natures_spirit:dusty_slopes',
        'natures_spirit:wooded_drylands',
        'natures_spirit:xeric_plains',
        'natures_spirit:scorched_dunes',
        'natures_spirit:stratified_desert',
        'natures_spirit:blooming_dunes',
        'natures_spirit:lively_dunes'
    ])

    e.add('kubejs:has_feature/atmospheric_sparse_kousa', [
        'natures_spirit:wisteria_forest',
        'environmental:blossom_woods',
        'environmental:blossom_valleys',
        'natures_spirit:sugi_forest',
        'natures_spirit:windswept_sugi_forest',
        'natures_spirit:floral_ridges',
    ])

    e.add('kubejs:has_feature/atmospheric_passion_vines', [
        'natures_spirit:tropical_basin',
        'natures_spirit:tropical_woods',
        'natures_spirit:sparse_tropical_woods',
    ])

    e.add('kubejs:has_feature/atmospheric_monkey_brush', [
        'natures_spirit:tropical_basin',
        'natures_spirit:tropical_woods',
        'natures_spirit:sparse_tropical_woods',
    ])

    e.add('kubejs:has_feature/atmospheric_bushes_sparse_rainforest', [
        'natures_spirit:tropical_basin',
        'natures_spirit:tropical_woods',
        'natures_spirit:sparse_tropical_woods',
    ])

    e.add('kubejs:has_feature/atmospheric_patch_water_hyacinth', [
        'natures_spirit:tropical_basin',
        'natures_spirit:bamboo_wetlands',
    ])

    e.add('kubejs:has_feature/atmospheric_trees_sparse_rainforest', [
        'natures_spirit:tropical_basin',
        'natures_spirit:sparse_tropical_woods',
    ])

    e.add('kubejs:has_feature/atmospheric_trees_rainforest', [
        'natures_spirit:tropical_woods',
    ])
    */
}
