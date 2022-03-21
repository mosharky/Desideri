// priority: 500

// Removes inputs and outputs from global list fullRemoval
// me when regex isnt supported by removeAllTagsFrom
global.fullRemovals.push(
    'quark:rope',
    'supplementaries:flax_seeds',
    'supplementaries:flax_block',
    'supplementaries:flax',
    'supplementaries:wild_flax',
    'supplementaries:rope',
    /quark:.*_rune/,
    'farmersdelight:wheat_dough',
    'biomesoplenty:spanish_moss',
    /aquaculture:.*_fillet_knife/,
    /quark:(backpack|potato_crate|carrot_crate|beetroot_crate|chute|gravisand|abacus|dragon_scale|.*limestone.*|.*blossom.*)/,
    /quark:(granite|andesite|diorite|calcite|dripstone|tuff)_pillar/,
    /biomesoplenty:(.*black_sand.*|.*autumn.*)/,
    'createaddition:electric_motor',
    'aquaculture:turtle_soup',
    /refinedstorage:(1k.*|4k.*|16k.*|64k.*|256.*|1024k.*|4096k.*)/,
    /refinedstorage:(fortune.*|silk_touch_upgrade|.*disk_manipulator|.*disk_drive)/,
    /enigmaticlegacy:(enigmatic_item|ocean_stone|magma_heart|eye_of_nebula|enigmatic_amulet|forbidden_axe|etherium.*|astral_breaker|enchantment_transposer|fabulous_scroll|)/,
)
// Removes by recipe ID
idRemovals.push(
    'supplementaries:strings',
    'farmersdelight:raw_pasta_from_eggs',
    'corn_delight:integration/create/mixing/raw_tortilla_from_mixing',
    'corn_delight:integration/create/mixing/raw_tortilla_wheat_from_mixing',
    'comforts:rope_and_nail',
)
// Removes by recipe type
typeRemovals.push(
    '',
)

onEvent('recipes', (event) => {
    // Removes inputs and outputs from global array fullRemoval
    global.fullRemovals.forEach((removal) => {
        event.remove({ input: removal })
        event.remove({ output: removal })
    })
    // Removes by recipe ID
    idRemovals.forEach((removal) => {
        event.remove({ id: removal })
    })
    // Removes by recipe type
    typeRemovals.forEach((removal) => {
        event.remove({ type: removal })
    })
})