function removals_BlockBox() {
    global.REMOVALS.add([
        'blockbox:brazier',
        'blockbox:soul_brazier',
        /blockbox:.*(seat|copper_bars)/,
        /blockbox:(granite_brick|andesite_brick|diorite_brick|cut_amethyst|amethyst_mosaic|lapis_lazuli_bricks|lapis_lazuli_mosaic).*/,
        'blockbox:golden_bars',
        'blockbox:polished_amethyst',
    ])
}