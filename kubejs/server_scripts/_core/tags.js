/** @param {$TagKubeEvent} e */
function itemTags_Core(e) {
    e.removeAllTagsFrom(global.REMOVALS.arr)
    e.add('kubejs:disabled', global.REMOVALS.arr)
}

/** @param {$TagKubeEvent} e */
function blockTags_Core(e) {
    e.add('kubejs:disabled', Array.from(global.REMOVALS.blocks))
}

/** @param {$TagKubeEvent} e */
function entityTags_Core(e) {
    
}


/** @param {$TagKubeEvent} e */
function biomeTags_Core(e) {
    e.add('kubejs:has_feature/stone_cliff', [
        // '#kubejs:classic_soil'
    ])
    e.add('kubejs:has_feature/terracotta_cliff', [
        // 'natures_spirit:bamboo_wetlands',
        // 'minecraft:bamboo_jungle',
        // 'minecraft:jungle',
        // 'minecraft:sparse_jungle',
    ])
    e.add('kubejs:has_feature/andesite_cliff', [
        // '#natures_spirit:is_alpine',
        // 'natures_spirit:heather_fields',
        // 'natures_spirit:prairie',
        // '#windswept:is_pine_barrens',
    ])
    e.add('kubejs:has_feature/granite_cliff', [
        // 'natures_spirit:golden_wilds',
        // 'natures_spirit:maple_woodlands',
        // 'natures_spirit:marigold_meadows',
        // 'minecraft:birch_forest',
        // 'minecraft:old_growth_birch_forest',
        // 'windswept:chestnut_forest',
    ])

    e.add('kubejs:classic_soil', e.get('minecraft:is_overworld').getObjectIds())
    e.remove('kubejs:classic_soil', [
        // from https://github.com/Alchemists-Of-Yore/No-Mans-Land/1.21.1/src/main/resources/data/nomansland/tags/worldgen/biome/classic_soil.json
        'minecraft:mushroom_fields',
        'minecraft:frozen_peaks',
        e.get('minecraft:is_ocean').getObjectIds(),
        e.get('minecraft:is_river').getObjectIds(),
        e.get('c:is_desert').getObjectIds(),
        e.get('c:is_cave').getObjectIds(),
        e.get('c:is_badlands').getObjectIds(),
        e.get('minecraft:is_nether').getObjectIds(),
        e.get('minecraft:is_end').getObjectIds(),
        // my filters
        'atmospheric:rainforest_basin',
        'atmospheric:sparse_rainforest_basin',
        'minecraft:swamp',
        'minecraft:mangrove_swamp',
        e.get('c:is_mountain/peak').getObjectIds(),
        e.get('kubejs:has_feature/andesite_cliff').getObjectIds(),
        e.get('kubejs:has_feature/granite_cliff').getObjectIds(),
        e.get('kubejs:has_feature/terracotta_cliff').getObjectIds(),
        // e.get('kubejs:has_feature/travertine_cliff').getObjectIds(),
        // e.get('kubejs:has_feature/kaolin_cliff').getObjectIds(),
        // e.get('kubejs:has_feature/chert_cliff').getObjectIds(),
    ])
}


/** @param {$TagKubeEvent} e */
function structureTags_Core(e) {
    e.add('kubejs:all_structures', /.*/)

    e.add('kubejs:minecraft/has_oak_chest', '#kubejs:all_structures')
    e.add('kubejs:minecraft/has_spruce_chest', [
        'minecraft:village_snowy',
        'minecraft:village_taiga',
    ])
    e.add('kubejs:minecraft/has_birch_chest', [])
    e.add('kubejs:minecraft/has_jungle_chest', [
        'minecraft:jungle_pyramid'
    ])
    e.add('kubejs:minecraft/has_acacia_chest', [
        'minecraft:village_savanna'
    ])
    e.add('kubejs:minecraft/has_dark_oak_chest', [
        '#minecraft:pillager_outpost',
        'minecraft:mansion'
    ])
    e.add('kubejs:minecraft/has_mangrove_chest', [])
    e.add('kubejs:minecraft/has_cherry_chest', [])
    e.add('kubejs:minecraft/has_crimson_chest', [
        'minecraft:bastion_remnant',
        /minecraft:ruined_portal.*/,
        'betterfortresses:fortress',
        'minecraft:fortress'
    ])
    e.add('kubejs:minecraft/has_warped_chest', [])
}
