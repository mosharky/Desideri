function removals_Galosphere() {
    global.REMOVALS.add([
        'galosphere:chiseled_amethyst',
        'galosphere:amethyst_lamp',
        /galosphere:smooth_amethyst.*/,
        /galosphere:amethyst_brick.*/,
        /galosphere:.*palladium.*/,
        'galosphere:chandelier',
        'galosphere:soul_chandelier',
        'galosphere:combustion_table',
        'galosphere:soul_light_stand',
        'galosphere:tuff_dirt',
        'galosphere:mole_burrow',
    ])

    global.ENTITY_REMOVALS.push(
        'galosphere:mole',
    )

    global.ENTITY_SWAPPER.set('galosphere:mole', 'naturalist:mole')

    global.BLOCK_SWAPPER.set('galosphere:tuff_dirt', 'caverns_and_chasms:rocky_dirt')
    global.BLOCK_SWAPPER.set('galosphere:mole_burrow', 'caverns_and_chasms:rocky_dirt')
}
