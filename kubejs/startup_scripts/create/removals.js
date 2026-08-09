function removals_Create() {
    global.REMOVALS.add([
        /create:.*(pillar|layered)/,
        /create:.*(cut|chocolate).*/,
        /create:small_.*_brick.*/,
        'create:dough',
        'create:wheat_flour',
        'create:limestone',
        'create:asurine',
        'create:crimsite',
        'create:ochrum',
        'create:veridium',
        'create:scoria',
        'create:scorchia',
        'create:copper_bars',
        'create:millstone',
    ])

    global.FLUID_REMOVALS.push(
        'create:chocolate'
    )

    global.ITEM_SWAPPER.set('create:dough', 'farmersdelight:wheat_dough')
    global.ITEM_SWAPPER.set('create:wheat_flour', 'bountifulfares:flour')
}
