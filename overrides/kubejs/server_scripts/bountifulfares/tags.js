/** @param {$TagKubeEvent} e */
function blockTags_BountifulFares(e) {
    e.add('bountifulfares:plum_leaves', [
        'environmental:cheerful_plum_leaves',
        'environmental:moody_plum_leaves',
        'environmental:plum_leaves',
    ])
}

/** @param {$TagKubeEvent} e */
function biomeTags_BountifulFares(e) {
    // ⚠️ TREES ⚠️
    e.add('bountifulfares:has_apple_trees', [
        'minecraft:forest',
        'natures_spirit:aspen_forest',
        'natures_spirit:fir_forest',
        'natures_spirit:maple_woodlands',
        'natures_spirit:oak_savanna',
        'natures_spirit:sugi_forest',
        'natures_spirit:wisteria_forest',
        'environmental:blossom_woods',
        'environmental:blossom_valleys',
        'environmental:pine_barrens',
        'environmental:old_growth_pine_barrens',
        'natures_spirit:carnation_fields',
        'natures_spirit:flowering_shrubland',
        'natures_spirit:floral_ridges',
        'natures_spirit:maple_woodlands',
        'natures_spirit:coniferous_covert',
        'natures_spirit:shrubby_highlands',
    ])

    e.removeAll('bountifulfares:has_lemon_trees')
    e.add('bountifulfares:has_lemon_trees', [
        'nomansland:lush_river',
        'natures_spirit:tropical_basin',
        'atmospheric:rainforest_basin',
    ])

    e.add('bountifulfares:has_orange_trees', [
        '#natures_spirit:is_tropical_woods',
        '#atmospheric:is_rainforest',
        'natures_spirit:arid_savanna',
        'natures_spirit:chaparral',
        'natures_spirit:shrubland',
        'natures_spirit:flowering_shrubland',
        'natures_spirit:xeric_plains',
        'natures_spirit:carnation_fields',
        'natures_spirit:cypress_fields',
        'atmospheric:scrubland',
        'atmospheric:spiny_thicket',
        'atmospheric:flourishing_dunes',
        'atmospheric:laurel_forest',
    ])

    // e.add('bountifulfares:has_palm_trees', [])

    e.add('bountifulfares:has_plum_trees', [
        'natures_spirit:wisteria_forest',
        'natures_spirit:floral_ridges',
        'natures_spirit:sugi_forest',
        'natures_spirit:blooming_sugi_forest',
        'natures_spirit:flowering_shrubland',
    ])

    e.add('bountifulfares:has_walnut_trees', [
        'natures_spirit:fir_forest',
        'natures_spirit:maple_woodlands',
        'natures_spirit:coniferous_covert',
        'natures_spirit:woody_highlands',
        'natures_spirit:shrubby_highlands',
        'environmental:pine_barrens',
        'environmental:old_growth_pine_barrens',
        'environmental:blossom_woods',
    ])



    // ⚠️ CROPS ⚠️
    e.add('bountifulfares:has_large_wild_beetroot', [
        'natures_spirit:tropical_basin',
        'natures_spirit:tropical_woods',
        'natures_spirit:sparse_tropical_woods',
        'natures_spirit:marsh',
        'natures_spirit:maple_woodlands',
        'natures_spirit:oak_savanna',
        'environmental:pine_barrens',
        'environmental:old_growth_pine_barrens',
        'atmospheric:rainforest_basin',
        'atmospheric:sparse_rainforest_basin'
    ])

    e.add('bountifulfares:has_large_wild_carrots', [
        'natures_spirit:maple_woodlands',
        'natures_spirit:oak_savanna',
        'natures_spirit:marsh',
        'natures_spirit:alpine_clearings',
        'natures_spirit:alpine_highlands',
        'natures_spirit:woody_highlands',
        'environmental:pine_barrens',
        'environmental:old_growth_pine_barrens'
    ])

    e.add('bountifulfares:has_large_wild_leeks', [
        'natures_spirit:fir_forest',
        'natures_spirit:maple_woodlands',
        'natures_spirit:marsh',
        'natures_spirit:alpine_clearings',
        'natures_spirit:alpine_highlands',
        'natures_spirit:woody_highlands',
        'environmental:pine_barrens',
        'environmental:old_growth_pine_barrens'
    ])

    e.add('bountifulfares:has_large_wild_maize', [
        'natures_spirit:tropical_basin',
        'natures_spirit:tropical_woods',
        'natures_spirit:sparse_tropical_woods',
        'natures_spirit:marsh',
        'natures_spirit:prairie',
        'natures_spirit:golden_wilds',
        'atmospheric:rainforest_basin',
        'atmospheric:sparse_rainforest_basin',
    ])

    e.add('bountifulfares:has_large_wild_potatoes', [
        'natures_spirit:alpine_clearings',
        'natures_spirit:alpine_highlands',
        'natures_spirit:woody_highlands',
        'natures_spirit:sleeted_slopes',
        'natures_spirit:red_peaks',
        'natures_spirit:snowcapped_red_peaks',
        'natures_spirit:fir_forest',
        'natures_spirit:maple_woodlands',
        'environmental:pine_barrens',
        'environmental:old_growth_pine_barrens'

    ])

    e.add('bountifulfares:has_large_wild_wheat', [
        'natures_spirit:oak_savanna',
        'natures_spirit:arid_highlands',
        'natures_spirit:arid_savanna',
        'natures_spirit:chaparral',
        'natures_spirit:drylands',
        'natures_spirit:woody_highlands',
        'natures_spirit:prairie',
        'natures_spirit:marigold_meadows',
        'natures_spirit:maple_woodlands',
    ])

    e.add('bountifulfares:has_wild_beetroot', [
        'natures_spirit:carnation_fields',
        'natures_spirit:flowering_shrubland',
        'natures_spirit:heather_fields',
        'natures_spirit:floral_ridges',
        'natures_spirit:marigold_meadows',
        'natures_spirit:prairie',
        'natures_spirit:shrubland',
        'natures_spirit:coniferous_covert',
        'environmental:blossom_woods',
        'environmental:blossom_valleys',
        'atmospheric:scrubland',
    ])

    e.add('bountifulfares:has_wild_carrots', [
        'natures_spirit:carnation_fields',
        'natures_spirit:flowering_shrubland',
        'natures_spirit:heather_fields',
        'natures_spirit:floral_ridges',
        'natures_spirit:marigold_meadows',
        'natures_spirit:prairie',
        'natures_spirit:shrubland',
        'natures_spirit:coniferous_covert',
        'environmental:blossom_woods',
        'environmental:blossom_valleys',
    ])

    e.add('bountifulfares:has_wild_leeks', [
        'natures_spirit:carnation_fields',
        'natures_spirit:flowering_shrubland',
        'natures_spirit:heather_fields',
        'natures_spirit:floral_ridges',
        'natures_spirit:marigold_meadows',
        'natures_spirit:prairie',
        'natures_spirit:shrubland',
        'natures_spirit:coniferous_covert',
        'environmental:blossom_woods',
        'environmental:blossom_valleys',
    ])

    e.add('bountifulfares:has_wild_maize', [
        'natures_spirit:oak_savanna',
        'natures_spirit:arid_savanna',
        'natures_spirit:chaparral',
        'natures_spirit:shrubland',
        'natures_spirit:flowering_shrubland',
        'natures_spirit:lively_dunes',
        'atmospheric:scrubland',
        'atmospheric:spiny_thicket'
    ])

    e.add('bountifulfares:has_wild_potatoes', [
        'natures_spirit:carnation_fields',
        'natures_spirit:flowering_shrubland',
        'natures_spirit:heather_fields',
        'natures_spirit:floral_ridges',
        'natures_spirit:marigold_meadows',
        'natures_spirit:prairie',
        'natures_spirit:shrubland',
        '#natures_spirit:is_alpine',
        'environmental:blossom_woods',
        'environmental:blossom_valleys',
    ])

    e.removeAll('bountifulfares:has_wild_wheat')
    e.add('bountifulfares:has_wild_wheat', [
        '#minecraft:is_savanna',
        'natures_spirit:carnation_fields',
        'natures_spirit:flowering_shrubland',
        'natures_spirit:heather_fields',
        'natures_spirit:marigold_meadows',
        'natures_spirit:prairie',
        'natures_spirit:shrubland',
        'natures_spirit:coniferous_covert',
        'natures_spirit:xeric_plains',
        '#natures_spirit:is_alpine',
    ])



    // ⚠️ MISC ⚠️
    e.add('bountifulfares:has_wild_elderberries', [
        'natures_spirit:aspen_forest',
        'natures_spirit:fir_forest',
        'natures_spirit:maple_woodlands',
        'natures_spirit:wisteria_forest',
        'natures_spirit:carnation_fields',
        'natures_spirit:flowering_shrubland',
        'natures_spirit:heather_fields',
        'natures_spirit:floral_ridges',
        'natures_spirit:marigold_meadows',
        'natures_spirit:prairie',
        'natures_spirit:coniferous_covert',
        'natures_spirit:woody_highlands',
        'natures_spirit:shrubby_highlands',
        'natures_spirit:alpine_clearings',
        'natures_spirit:alpine_highlands',
        'environmental:blossom_woods',
        'environmental:blossom_valleys',
        'environmental:pine_barrens',
        'environmental:old_growth_pine_barrens',
    ])

    e.add('bountifulfares:has_wild_passion_fruit', [
        '#natures_spirit:is_tropical_woods',
        '#atmospheric:is_rainforest',
    ])

    e.add('bountifulfares:has_tea_shrub', [
        '#natures_spirit:is_tropical_woods',
        '#atmospheric:is_rainforest',
    ])



    // ⚠️ FOLIAGE ⚠️
    e.add('bountifulfares:has_chamomile', [
        'natures_spirit:carnation_fields',
        'natures_spirit:flowering_shrubland',
        'natures_spirit:heather_fields',
        'natures_spirit:floral_ridges',
        'natures_spirit:marigold_meadows',
        'natures_spirit:prairie',
        'natures_spirit:shrubland',
        'natures_spirit:coniferous_covert',
        'natures_spirit:alpine_clearings',
        'natures_spirit:alpine_highlands',
        'natures_spirit:woody_highlands',
        'natures_spirit:shrubby_highlands',
        'environmental:blossom_woods',
        'environmental:blossom_valleys',
    ])

    e.add('bountifulfares:has_honeysuckle', [
        'natures_spirit:aspen_forest',
        'natures_spirit:fir_forest',
        'natures_spirit:maple_woodlands',
        'natures_spirit:wisteria_forest',
        'natures_spirit:carnation_fields',
        'natures_spirit:flowering_shrubland',
        'natures_spirit:heather_fields',
        'natures_spirit:floral_ridges',
        'natures_spirit:marigold_meadows',
        'natures_spirit:prairie',
        'natures_spirit:shrubland',
        'natures_spirit:coniferous_covert',
        'natures_spirit:woody_highlands',
        'natures_spirit:shrubby_highlands',
        'natures_spirit:alpine_clearings',
        'natures_spirit:alpine_highlands',
        'environmental:blossom_woods',
        'environmental:blossom_valleys',
        'environmental:pine_barrens',
        'environmental:old_growth_pine_barrens',
    ])

    e.add('bountifulfares:has_violet_bellflower', [
        'natures_spirit:aspen_forest',
        'natures_spirit:fir_forest',
        'natures_spirit:maple_woodlands',
        'natures_spirit:wisteria_forest',
        'natures_spirit:coniferous_covert',
        'natures_spirit:woody_highlands',
        'natures_spirit:shrubby_highlands',
        'natures_spirit:alpine_clearings',
        'natures_spirit:alpine_highlands',
        'environmental:blossom_woods',
        'environmental:blossom_valleys',
    ])

    e.removeAll('bountifulfares:has_grassy_dirt_patches')
    e.add('bountifulfares:has_grassy_dirt_patches', [
        '#minecraft:is_taiga',
        '#natures_spirit:is_alpine',
        '#environmental:is_pine_barrens',
        'atmospheric:laurel_forest',
        'atmospheric:spiny_thicket',
        'natures_spirit:maple_woodlands',
        'natures_spirit:fir_forest',
        'nomansland:old_growth_forest',
    ])
}
