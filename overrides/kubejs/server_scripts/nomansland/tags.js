/** @param {$TagKubeEvent} e  */
function biomeTags_NoMansLand(e) {
    // e.remove('nomansland:feature_addition/has_cave_weeds', /pastel:.*/)
    // e.remove('nomansland:is_cragland', 'minecraft:sparse_jungle')

    /*
    e.add('nomansland:feature_addition/has_swamp_foliage', [
        'atmospheric:rainforest_basin',
    ])
    e.add('nomansland:feature_addition/has_rafflesia', [
        '#natures_spirit:is_tropical',
        '#atmospheric:is_rainforest',
    ])
    */
   
    e.add('kubejs:has_feature/grass_sprouts', [
        '#kubejs:classic_soil'
    ])

    e.removeAll('nomansland:classic_soil')
    e.add('nomansland:classic_soil', '#kubejs:classic_soil')

    e.removeAll('nomansland:has_gravel_shore')
    e.add('nomansland:has_gravel_shore', [
        e.get('c:is_icy').getObjectIds(),
        e.get('c:is_cold').getObjectIds(),
        e.get('c:is_temperate').getObjectIds(),
    ])
    e.remove('nomansland:has_gravel_shore', [
        e.get('minecraft:is_ocean').getObjectIds(),
        e.get('minecraft:is_beach').getObjectIds(),
        e.get('minecraft:is_river').getObjectIds(),
        e.get('minecraft:is_mountain').getObjectIds(),
        e.get('c:is_hill').getObjectIds(),
        e.get('c:is_plateau').getObjectIds(),
        e.get('c:is_sandy').getObjectIds(),
        e.get('c:is_cave').getObjectIds(),
        e.get('c:is_swamp').getObjectIds(),
        e.get('minecraft:is_nether').getObjectIds(),
        e.get('minecraft:is_end').getObjectIds(),
        // my filters
        'natures_spirit:woody_highlands',
        'natures_spirit:arid_highlands',
    ])
}
