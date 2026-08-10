function removals_MowziesMobs() {
    global.REMOVALS.add([
        'mowziesmobs:thatch_block'
    ])

    global.BLOCK_SWAPPER.set('mowziesmobs:thatch_block', 'packedup:grass_thatch')
}
