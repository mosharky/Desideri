function removals_ArchitectsPalette() {
    global.REMOVALS.add([
        /architects_palette:.*(board|flint).*/,
        /architects_palette:.*(andesite|granite|diorite|dripstone|calcite|basalt).*/,
        /architects_palette:.*(vertical_slab|ore_brick|scales|railing)/,
        /architects_palette:(?!.*copper).*_nub/,
        'architects_palette:salmon_log',
        'architects_palette:cod_log',
        'architects_palette:charcoal_block',
    ])
}