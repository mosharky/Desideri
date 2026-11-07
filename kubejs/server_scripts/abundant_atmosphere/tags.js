/** @param {$TagKubeEvent} e */
function biomeTags_AbundantAtmosphere(e) {
    e.removeAll('abundant_atmosphere:has_cherry_bushbuds')
    e.add('abundant_atmosphere:has_cherry_bushbuds', [
        'minecraft:cherry_grove',  // default
        'environmental:blossom_valleys',
        'environmental:blossom_woods',
    ])

    e.removeAll('abundant_atmosphere:has_saffron_bushbuds')
    e.add('abundant_atmosphere:has_saffron_bushbuds', [
        'minecraft:sunflower_plains',  // default
        'nomansland:autumnal_forest',  // default
        'minecraft:old_growth_birch_forest',
        'nomansland:maple_forest',
    ])

    e.add('abundant_atmosphere:has_puffball_mushrooms', [

    ])

    e.add('abundant_atmosphere:caves_without_rust_moss', [
        'darkerdepths:sandy_catacombs',
        'darkerdepths:molten_cavern',
    ])
}