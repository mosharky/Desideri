function removals_Supplementaries() {
    global.REMOVALS.add([
        'supplementaries:sconce',
        'supplementaries:sconce_soul',
        'supplementaries:gold_bars',
        'supplementaries:gravel_bricks',
        'supplementaries:suspicious_gravel_bricks',
        'supplementaries:rope',
    ])

    global.BLOCK_SWAPPER.set('supplementaries:sconce', 'nomansland:sconce_torch')
    global.BLOCK_SWAPPER.set('supplementaries:sconce_soul', 'nomansland:sconce_soul_torch')
    global.BLOCK_SWAPPER.set('supplementaries:sconce_wall', 'nomansland:sconce_wall_torch')
    global.BLOCK_SWAPPER.set('supplementaries:sconce_wall_soul', 'nomansland:sconce_soul_wall_torch')
}
