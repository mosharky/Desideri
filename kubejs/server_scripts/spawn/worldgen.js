/** @param {$KubeDataGenerator} e  */
function worldgen_Spawn(e) {
    // abundant atmosphere leaf pile using spawn's fallen leaves
    // because AA's leaf pile is a bit buggy and less functional
    registerFeature(e, CONFIGURED, 'kubejs:patch_fallen_leaves', {
        type: 'minecraft:random_patch',
        config: {
            feature: {
                feature: {
                    type: 'minecraft:simple_block',
                    config: {
                        to_place: {
                            type: 'minecraft:weighted_state_provider',
                            entries: [
                                { data: { Name: 'spawn:fallen_leaves', Properties: { leaves: '1' } }, weight: 4 },
                                { data: { Name: 'spawn:fallen_leaves', Properties: { leaves: '2' } }, weight: 2 },
                                { data: { Name: 'spawn:fallen_leaves', Properties: { leaves: '3' } }, weight: 2 }
                            ]
                        }
                    }
                },
                placement: [
                    {
                        type: 'minecraft:block_predicate_filter',
                        predicate: { type: 'minecraft:matching_blocks', blocks: 'minecraft:air' }
                    },
                    {
                        type: 'minecraft:block_predicate_filter',
                        predicate: {
                            type: 'minecraft:matching_block_tag',
                            offset: [0, -1, 0],
                            tag: 'minecraft:dirt'
                        }
                    }
                ]
            },
            tries: 100,
            xz_spread: 4,
            y_spread: 2
        }
    })

    registerFeature(e, PLACED, 'kubejs:patch_fallen_leaves', {
        feature: 'kubejs:patch_fallen_leaves',
        placement: [
            { type: 'minecraft:rarity_filter', chance: 5 },
            { type: 'minecraft:in_square' },
            { type: 'minecraft:heightmap', heightmap: 'WORLD_SURFACE_WG' },
            { type: 'minecraft:biome' }
        ]
    })
    addFeatures(e, 'kubejs:patch_fallen_leaves', '#kubejs:has_feature/fallen_leaves', VEGETAL_DECORATION)

    registerFeature(e, PLACED, 'kubejs:patch_fallen_leaves_common', {
        feature: 'kubejs:patch_fallen_leaves',
        placement: [
            { type: 'minecraft:count', count: 2 },
            { type: 'minecraft:in_square' },
            { type: 'minecraft:heightmap', heightmap: 'WORLD_SURFACE_WG' },
            { type: 'minecraft:biome' }
        ]
    })
    addFeatures(e, 'kubejs:patch_fallen_leaves_common', '#kubejs:has_feature/fallen_leaves_common', VEGETAL_DECORATION)
}