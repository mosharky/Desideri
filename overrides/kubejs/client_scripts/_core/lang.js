ClientEvents.lang('en_us', e => {
    function rename(id, name) {
        if (Item.of(id).getBlock() != null) e.renameBlock(id, name)
        else e.renameItem(id, name)
    }

    // Minecraft
    rename('minecraft:cookie', 'Chocolate Chip Cookie')

    // Quark
    // rename('quark:rope', 'Rigid Rope')

    // Farmer's Delight
    // rename('farmersdelight:rope', 'Netting')
    rename('farmersdelight:wheat_dough', 'Dough')
    e.add('farmersdelight', 'farmersdelight.jei.cooking', 'Cooking (Copper Pot)')  // needed for miner's delight copper pot

    // Supplementaries
    rename('supplementaries:candy', 'Wrapped Candy')

    // More Minecarts missing lang
    // rename('moreminecarts:maglev_hologram_rail', 'Maglev Holograph Rail')
    // rename('moreminecarts:wooden_hologram_rail', 'Wooden Holograph Rail')
    // rename('moreminecarts:hologram_rail', 'Holograph Rail')


    /*
    // No Man's Land
    for (const blockSet of Object.values(global.WOOD_TYPES.nomansland.pine)) {
        for (const block of Object.values(blockSet)) {
            let name = Item.of(block).displayName.string.replace('[', '').replace(']', '')
            if (block != undefined) rename(block, name.replace('Pine', 'Larch'))
        }
    }
    */


    // rename('nomansland:stripped_pine_palisade', 'Stripped Larch Palisade')
    // rename('nomansland:pine_palisade', 'Larch Palisade')
    // rename('nomansland:stripped_spiked_pine_palisade', 'Stripped Larch Palisade')
    // rename('nomansland:spiked_pine_palisade', 'Larch Palisade')
    // rename('nomansland:pine_seat', 'Larch Seat')

    rename('nomansland:pancake', 'Maple-Glazed Pancake')


    // Naturalist
    rename('naturalist:clam_spawn_egg', 'Treasure Clam Spawn Egg')
    e.renameEntity('naturalist:clam', 'Treasure Clam')
    rename('naturalist:crab_spawn_egg', 'Hermit Crab Spawn Egg')
    rename('naturalist:crab', 'Hermit Crab')
    e.renameEntity('naturalist:crab', 'Hermit Crab')
})
