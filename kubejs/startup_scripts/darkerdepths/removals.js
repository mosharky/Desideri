function removals_Darkerdepths() {
    global.REMOVALS.add([
        'darkerdepths:rope',
        /darkerdepths:.*_vertical_slab/,
        /darkerdepths:vertical.*planks/,
    ])

    global.BLOCK_SWAPPER.set('darkerdepths:rope', 'supplementaries:rope')
}
