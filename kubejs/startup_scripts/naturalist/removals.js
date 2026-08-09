function removals_Naturalist() {
    global.REMOVALS.add([
        /naturalist:snail.*/,
        /naturalist:tortoise.*/,
        'naturalist:venison',
        'naturalist:cooked_venison',
        'naturalist:duck',
        'naturalist:cooked_duck',
        'naturalist:cooked_egg',
        'naturalist:drumstick',
        'naturalist:cooked_drumstick',
        'naturalist:bass_bucket',
        'naturalist:bass',
        'naturalist:cooked_bass',
        'naturalist:rat',
        'naturalist:cooked_clam_meat',
        'naturalist:anglerfish',
        'naturalist:cooked_anglerfish',
        'naturalist:anglerfish_bucket',
        'naturalist:ant',
        'naturalist:queen_ant',
        'naturalist:ant_hill',
    ])

    global.ITEM_SWAPPER.set('naturalist:snail_shell', 'spawn:snail_shell')
    global.ITEM_SWAPPER.set('naturalist:venison', 'nomansland:raw_venison')
    global.ITEM_SWAPPER.set('naturalist:cooked_venison', 'nomansland:cooked_venison')
    global.ITEM_SWAPPER.set('naturalist:duck', 'environmental:duck')
    global.ITEM_SWAPPER.set('naturalist:cooked_duck', 'environmental:cooked_duck')
    global.ITEM_SWAPPER.set('naturalist:cooked_egg', 'farmersdelight:fried_egg')
    global.ITEM_SWAPPER.set('naturalist:cooked_clam_meat', 'spawn:cooked_clam')

    global.ENTITY_REMOVALS.push(
        // aquatic mobs
        'naturalist:anglerfish',
        'naturalist:bass',
        // land mobs
        'naturalist:zebra',
        'naturalist:tortoise',
        'naturalist:turkey',
        'naturalist:rat',
        // bugs
        'naturalist:snail',
        'naturalist:ant',
    )
}