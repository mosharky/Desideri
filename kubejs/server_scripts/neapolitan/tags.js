/** @param {$TagKubeEvent} e */
function biomeTags_Neapolitan(e) {
    // e.removeAll('neapolitan:has_animal/chimpanzee')
    e.removeAll('neapolitan:spawns_strawberry_rabbits')

    e.add('neapolitan:has_feature/banana_plant/common', [
        'natures_spirit:bamboo_wetlands',
        'natures_spirit:tropical_woods',
    ])
    e.add('neapolitan:has_feature/banana_plant/uncommon', [
        'natures_spirit:tropical_shores',
    ])
    e.add('neapolitan:has_feature/banana_plant/rare', [
        'natures_spirit:sparse_tropical_woods',
    ])
    e.add('neapolitan:has_feature/adzuki_sprouts', [
        'natures_spirit:maple_woodlands',
        'natures_spirit:wisteria_forest',
        'natures_spirit:prairie',
        'natures_spirit:oak_savanna',
        'environmental:blossom_woods',
        'environmental:blossom_valleys',
        'windswept:chestnut_forest',
        'windswept:pine_barrens',
        'atmospheric:aspen_parkland',
        'atmospheric:laurel_forest',
        'nomansland:maple_forest',
        'nomansland:maple_grove',
        'nomansland:old_growth_forest',
        'nomansland:old_growth_forest_clearing',
        'nomansland:old_growth_forest_clearing_edge',
        'nomansland:lavender_field',
        'nomansland:prairie',
    ])
    e.add('neapolitan:has_feature/strawberry_bush', [
        'natures_spirit:marigold_meadows',
        'natures_spirit:carnation_fields',
        'natures_spirit:lavender_fields',
        'natures_spirit:heather_fields',
        'natures_spirit:floral_ridges',
        'natures_spirit:flowering_shrubland',
        'environmental:blossom_woods',
        'environmental:blossom_valleys',
        'windswept:flowering_savanna',
        'natures_spirit:prairie',
        'natures_spirit:oak_savanna',
        'nomansland:maple_forest',
        'nomansland:maple_grove',
        'nomansland:old_growth_forest',
        'nomansland:old_growth_forest_clearing',
        'nomansland:old_growth_forest_clearing_edge',
        'nomansland:lavender_field',
        'nomansland:prairie',
    ])
}

/** @param {$TagKubeEvent} e */
function itemTags_Neapolitan(e) {
    e.add('c:ice_cube', '#c:ice_cubes')
    e.add('neapolitan:chocolate_bar', '#supplementaries:chocolate_bars')
}
