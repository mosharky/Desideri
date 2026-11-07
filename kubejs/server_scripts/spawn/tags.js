/** @param {$TagKubeEvent} e  */
function biomeTags_Spawn(e) {
    e.add('minecraft:is_overworld', /spawn:.*/)

    e.add('kubejs:has_feature/fallen_leaves', [
        'minecraft:forest',
        'minecraft:wooded_badlands',
        'nomansland:boreal_forest',
        '#nomansland:old_growth_forest',
    ])

    e.add('kubejs:has_feature/fallen_leaves_common', [
        'minecraft:dark_forest',
        'minecraft:old_growth_pine_taiga',
        'minecraft:old_growth_spruce_taiga',
        'minecraft:old_growth_birch_forest',
        'nomansland:autumnal_forest',
        'nomansland:maple_forest',
        'nomansland:dark_swamp',
    ])
}