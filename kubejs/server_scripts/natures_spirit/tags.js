/** @param {$TagKubeEvent} e */
function biomeTags_NaturesSpirit(e) {
    // Cliffs
    e.add('kubejs:has_feature/travertine_cliff', [
        'natures_spirit:floral_ridges',
        'natures_spirit:flowering_shrubland',
        'natures_spirit:shrubland',
        'natures_spirit:wisteria_forest',
        'natures_spirit:xeric_plains',
        'natures_spirit:oak_savanna',
        'minecraft:savanna_plateau',
        'minecraft:savanna',
        'minecraft:windswept_savanna',
        'windswept:flowering_savanna'
    ])
    e.add('kubejs:has_feature/kaolin_cliff', [
        'natures_spirit:carnation_fields',
        'natures_spirit:cypress_fields',
        'natures_spirit:lavender_fields',
        '#natures_spirit:is_tropical_woods',
        '#atmospheric:is_rainforest'
    ])
    e.add('kubejs:has_feature/chert_cliff', [
        'natures_spirit:arid_savanna',
        'natures_spirit:dusty_slopes',
        'natures_spirit:scorched_dunes',
        'natures_spirit:sleeted_slopes',
        'natures_spirit:woody_highlands',
        'natures_spirit:chaparral',
    ])

    // NS Features
    e.add('kubejs:has_feature/natures_spirit_small_larch', [
        'windswept:pine_barrens',
        'environmental:pine_barrens',
        'environmental:old_growth_pine_barrens',
    ])
    e.add('kubejs:has_feature/natures_spirit_rooted_desert_turnip', [
        '#atmospheric:is_dunes',
        'atmospheric:spiny_thicket',
        'atmospheric:scrubland',
    ])
    e.add('kubejs:has_feature/natures_spirit_noise_fir', [
        'windswept:pine_barrens',
        'environmental:pine_barrens',
    ])
    e.add('kubejs:has_feature/natures_spirit_sparse_frosty_fir', [
        'windswept:snowy_pine_barrens',
        'windswept:snowy_chestnut_forest',
        'environmental:snowy_pine_barrens',
        'minecraft:grove'
    ])
    e.add('kubejs:has_feature/natures_spirit_succulent', [
        'atmospheric:flourishing_dunes',
        'atmospheric:spiny_thicket',
        'atmospheric:scrubland',
    ])
    e.add('kubejs:has_feature/natures_spirit_scorched_grass', [
        'atmospheric:flourishing_dunes',
        'atmospheric:spiny_thicket',
        'atmospheric:scrubland',
    ])
    e.add('kubejs:has_feature/natures_spirit_flower_helvola', [
        '#atmospheric:is_rainforest'
    ])
    e.add('kubejs:has_feature/natures_spirit_lotus_plant', [
        '#atmospheric:is_rainforest'
    ])
    e.add('kubejs:has_feature/natures_spirit_lush_fern', [
        '#atmospheric:is_rainforest'
    ])

    e.add('kubejs:has_feature/natures_spirit_azolla', [
        'atmospheric:rainforest_basin',
        'atmospheric:sparse_rainforest_basin',
        'natures_spirit:tropical_basin',
        'natures_spirit:bamboo_wetlands'
    ])
}
