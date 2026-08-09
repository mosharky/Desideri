/** @param {$TagKubeEvent} e */
function entityTags_Environmental(e) {
    /*
    e.add('environmental:scares_deer', [
        // TODO: Add mobs from Alex's Mobs when it's added
    ])

    e.add('environmental:scares_trusting_deer', [
        // TODO: Add mobs from Alex's Mobs when it's added
    ])

    e.add('environmental:zebroids_dont_kick', [
        // TODO: add other horse-like mobs
    ])

    e.add('environmental:deer_food', [])

    e.add('environmental:duck_food', [
        'natures_spirit:azolla'
    ])

    e.removeAll('environmental:spawns_on_muddy_pig')
    e.add('environmental:spawns_on_muddy_pig', [
        'minecraft:blue_orchid',
        'environmental:dianthus',
        'minecraft:poppy',
        'minecraft:dandelion',
        'minecraft:red_mushroom',
        'minecraft:brown_mushroom',
        'minecraft:lily_pad',
        'natures_spirit:cattail'
    ])
    */

    e.add('environmental:yak_food', [
        'supplementaries:flax'
    ])
}

/** @param {$TagKubeEvent} e */
function biomeTags_Environmental(e) {
    e.removeAll('environmental:spawns_muddy_rabbits')
    e.removeAll('environmental:spawns_chestnut_deer')
    e.removeAll('environmental:spawns_gray_deer')

    e.add('environmental:has_structure/log_cabin', '#windswept:is_pine_barrens')

    e.add('kubejs:has_feature/environmental_dwarf_spruce', '#windswept:is_pine_barrens')

    e.add('environmental:has_feature/birds_of_paradise', [
        '#natures_spirit:is_tropical_woods'
    ])

    e.add('environmental:has_feature/cup_lichen', [
        '#windswept:is_pine_barrens',
        '#natures_spirit:is_alpine',
    ])

    e.add('environmental:has_feature/dwarf_spruce_sparse', [
        '#natures_spirit:is_alpine'
    ])

    e.add('environmental:has_feature/hibiscus', [
        '#natures_spirit:is_tropical_woods',
        'natures_spirit:floral_ridges',
        'minecraft:flower_forest'
    ])

    e.add('environmental:has_feature/tasselflower', [
        '#natures_spirit:is_xeric',
        'natures_spirit:oak_savanna'
    ])

    e.add('environmental:has_feature/violet', [
        'minecraft:flower_forest',
        'minecraft:birch_forest',
        'minecraft:meadow',
        'minecraft:cherry_grove',
        '#natures_spirit:is_alpine',
        'natures_spirit:wisteria_forest',
        'natures_spirit:floral_ridges',
        'natures_spirit:heather_fields',
        'natures_spirit:carnation_fields',
        'natures_spirit:lavender_fields',
        'natures_spirit:sugi_forest',
        'natures_spirit:windswept_sugi_forest',
        'environmental:blossom_woods',
        'environmental:blossom_valleys',
        'atmospheric:laurel_forest',
    ])

    e.add('environmental:has_spawn/slabfish', [
        'natures_spirit:bamboo_wetlands',
        'atmospheric:rainforest_basin',
        'atmospheric:sparse_rainforest_basin'
    ])

    e.add('environmental:has_spawn/tapir', [
        '#atmospheric:is_rainforest',
        '#natures_spirit:is_tropical_woods',
        'natures_spirit:bamboo_wetlands',
        'windswept:flowering_savanna'
    ])

    e.add('environmental:has_spawn/yak', [
        'natures_spirit:alpine_highlands',
        'natures_spirit:sleeted_slopes',
        'natures_spirit:tundra',
        'nomansland:lavender_field',
    ])

    e.add('kubejs:has_feature/environmental_delphiniums', [
        'minecraft:flower_forest',
        'natures_spirit:floral_ridges',
        'natures_spirit:wisteria_forest',
    ])

    e.add('kubejs:has_feature/environmental_flower_white_lotus', [
        'natures_spirit:floral_ridges',
        'natures_spirit:wisteria_forest',
        'minecraft:flower_forest'
    ])

    e.add('kubejs:has_feature/environmental_flower_red_lotus', [
        '#atmospheric:is_rainforest',
        '#natures_spirit:is_tropical_woods',
        'natures_spirit:blooming_sugi_forest',
        'natures_spirit:floral_ridges',
        'natures_spirit:wisteria_forest',
    ])

    e.add('kubejs:has_feature/environmental_giant_tall_grass_marsh', [
        'natures_spirit:marsh'
    ])
}
