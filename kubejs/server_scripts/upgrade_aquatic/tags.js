/** @param {$TagKubeEvent} e */
function biomeTags_UpgradeAquatic(e) {
    e.add('upgrade_aquatic:has_feature/beachgrass', 'natures_spirit:tropical_shores')
    e.remove('upgrade_aquatic:has_feature/beachgrass', '#minecraft:is_river')

    e.remove('upgrade_aquatic:has_feature/diftwood_river', '#minecraft:is_river')
    e.add('upgrade_aquatic:has_feature/diftwood_river', [
        'minecraft:river',
        'minecraft:frozen_river',
        'nomansland:lush_river',
    ])

    e.remove('upgrade_aquatic:has_feature/flowering_rish', 'minecraft:river')
    e.add('upgrade_aquatic:has_feature/flowering_rish', [
        'minecraft:river',
        'nomansland:lush_river',
    ])

    e.remove('upgrade_aquatic:has_feature/river_tree', '#minecraft:is_river')
    e.add('upgrade_aquatic:has_feature/river_tree', [
        'minecraft:river',
    ])

    e.add('upgrade_aquatic:has_feature/searocket', 'natures_spirit:tropical_shores')
}
