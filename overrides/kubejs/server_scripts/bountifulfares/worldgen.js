/** @param {$KubeDataGenerator} e  */
function worldgen_BountifulFares(e) {
    removeBiomeModifier(e, 'bountifulfares:palm_placed')
    removeBiomeModifier(e, 'bountifulfares:plum_placed')
    removeBiomeModifier(e, 'bountifulfares:walnut_placed')

    /*
    // reduce chances
    registerFeature(e, PLACED, 'bountifulfares:patch_grassy_dirt', {
        feature: 'bountifulfares:patch_grassy_dirt',
        placement: [
            { type: 'minecraft:rarity_filter', chance: 3 },
            { type: 'minecraft:in_square' },
            { type: 'minecraft:heightmap', heightmap: 'MOTION_BLOCKING' },
            { type: 'minecraft:biome' }
        ]
    })
    registerFeature(e, PLACED, 'bountifulfares:apple_placed', {
        feature: 'bountifulfares:apple',
        placement: [
            { type: 'minecraft:rarity_filter', chance: 8 },
            { type: 'minecraft:in_square' },
            { type: 'minecraft:surface_water_depth_filter', max_water_depth: 0 },
            { type: 'minecraft:heightmap', heightmap: 'OCEAN_FLOOR' },
            { type: 'minecraft:biome' },
            wouldSurvive('bountifulfares:apple_sapling')
        ]
    })
    registerFeature(e, PLACED, 'bountifulfares:lemon_placed', {
        feature: 'bountifulfares:lemon',
        placement: [
            { type: 'minecraft:rarity_filter', chance: 8 },
            { type: 'minecraft:in_square' },
            { type: 'minecraft:surface_water_depth_filter', max_water_depth: 0 },
            { type: 'minecraft:heightmap', heightmap: 'OCEAN_FLOOR' },
            { type: 'minecraft:biome' },
            wouldSurvive('bountifulfares:lemon_sapling')
        ]
    })
    registerFeature(e, PLACED, 'bountifulfares:orange_placed', {
        feature: 'bountifulfares:orange',
        placement: [
            { type: 'minecraft:rarity_filter', chance: 8 },
            { type: 'minecraft:in_square' },
            { type: 'minecraft:surface_water_depth_filter', max_water_depth: 0 },
            { type: 'minecraft:heightmap', heightmap: 'OCEAN_FLOOR' },
            { type: 'minecraft:biome' },
            wouldSurvive('bountifulfares:orange_sapling')
        ]
    })
    */
}
