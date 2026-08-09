/** @param {$KubeDataGenerator} e  */
function worldgen_CavernsAndChasms(e) {
    // Making rocky dirt generate lower
    registerFeature(e, PLACED, 'caverns_and_chasms:ore_rocky_dirt', {
        feature: 'caverns_and_chasms:ore_rocky_dirt',
        placement: [
            { type: 'minecraft:count', count: 7 },
            { type: 'minecraft:in_square' },
            {
                type: 'minecraft:height_range',
                height: {
                    type: 'minecraft:uniform',
                    max_inclusive: { absolute: 56 },
                    min_inclusive: { absolute: 0 }
                }
            },
            { type: 'minecraft:biome' }
        ]
    })
}
