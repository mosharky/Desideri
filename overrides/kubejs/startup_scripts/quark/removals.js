function removals_Quark() {
    global.REMOVALS.add([
        /quark:.*(chest|ladder|bookshelf|leaf_carpet|thatch|blossom|stool|corundum|midori|framed_glass|iron_plate).*/,
        /quark:.*(dirt_brick|cobblestone_brick|dripstone_brick|andesite_brick|blackstone_brick|blue_nether_brick|sandstone_brick|netherrack_brick).*/,
        /quark:.*(limestone|jasper|shale|permafrost).*/,
        // /quark:(?!.*soul_sandstone).*sandstone_bricks.*/,
        /quark:.*(vertical_slab|_shard|lamp)/,
        /quark:.*(crab|foxhound|shiba|wraith).*/,
        /quark:.*ancient(?!_tome|_fruit).*/,
        /quark:.*azalea(?!_hedge).*/,
        /quark:vertical.*planks/,
        /quark:.*(andesite|granite|diorite|dripstone|calcite|blackstone).*/,
        /quark:raw_.*_brick.*/,
        'quark:nether_brick_fence_gate',
        'quark:gold_bars',
        'quark:chute',
        // 'quark:golden_apple_crate',
        'quark:apple_crate',
        'quark:potato_crate',
        'quark:carrot_crate',
        // 'quark:golden_carrot_crate',
        'quark:beetroot_crate',
        'quark:charcoal_block',
        'quark:gunpowder_sack',
        'quark:berry_sack',
        'quark:glowberry_sack',
        'quark:pipe',
        'quark:iron_rod',
        'quark:grate',
        'quark:mud_brick_lattice',
        'quark:mud_pillar',
        'quark:carved_mud_bricks',
        'quark:rope',
        'quark:hammer',
        /quark:glow_shroom.*/,
        'quark:glow_lichen_growth',
        'quark:iron_pillar',
        'quark:crate',
        'quark:cut_vine',
        'quark:soul_bead',
        'quark:paper_lantern',
        'quark:bamboo_mat',
        'quark:bamboo_mat_carpet',
        'quark:ancient_fruit',
        'quark:blaze_lantern',
        'quark:encased_pipe',
        'quark:chorus_weeds',
        'quark:chorus_twist',
        'quark:smithing_template_rune',
        'quark:ancient_tome',
        'quark:backpack',
        'quark:iron_button',
        'quark:gold_button',
        'quark:moss_paste',
    ])

    global.ITEM_SWAPPER.set('quark:crab_leg', 'spawn:coastal_crab_claw')
    global.ITEM_SWAPPER.set('quark:crab_shell', 'spawn:coastal_crab_claw')

    /*
    global.COLOURS.forEach(color => {
        global.BLOCK_SWAPPER.set(`quark:${color}_stool`, `create:${color}_seat`)
    })

    // IDAS structures need these swapped out
    global.BLOCK_SWAPPER.set('quark:iron_rod', 'minecraft:lightning_rod')
    global.BLOCK_SWAPPER.set('quark:grate', 'copycats:copycat_board')
    global.BLOCK_SWAPPER.set('quark:thatch', 'nomansland:thatch')
    global.BLOCK_SWAPPER.set('quark:thatch_slab', 'nomansland:thatch_slab')
    global.BLOCK_SWAPPER.set('quark:gold_bars', 'caverns_and_chasms:golden_bars')
    global.BLOCK_SWAPPER.set('quark:iron_ladder', 'createdeco:industrial_iron_ladder')
    // global.BLOCK_SWAPPER.set('quark:permafrost', 'minecraft:packed_ice')
    // global.BLOCK_SWAPPER.set('quark:permafrost_wall', 'windswept:packed_ice_brick_wall')
    // global.BLOCK_SWAPPER.set('quark:permafrost_vertical_slab', 'v_slab_compat:windswept/packed_ice_vertical_slab')
    global.BLOCK_SWAPPER.set('quark:spruce_leaf_carpet', 'woodworks:spruce_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:birch_leaf_carpet', 'woodworks:birch_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:cherry_leaf_carpet', 'woodworks:cherry_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:mangrove_leaf_carpet', 'woodworks:mangrove_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:azalea_leaf_carpet', 'woodworks:azalea_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:jungle_leaf_carpet', 'woodworks:jungle_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:oak_leaf_carpet', 'woodworks:oak_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:flowering_azalea_leaf_carpet', 'woodworks:flowering_azalea_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:dark_oak_leaf_carpet', 'woodworks:dark_oak_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:acacia_leaf_carpet', 'woodworks:acacia_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:chute', 'create:chute')
    global.BLOCK_SWAPPER.set('quark:dirt_bricks', 'environmental:dirt_bricks')
    global.BLOCK_SWAPPER.set('quark:dirt_bricks_stairs', 'environmental:dirt_brick_stairs')
    global.BLOCK_SWAPPER.set('quark:dirt_bricks_slab', 'environmental:dirt_brick_slab')
    global.BLOCK_SWAPPER.set('quark:dirt_bricks_wall', 'environmental:dirt_brick_wall')
    global.BLOCK_SWAPPER.set('quark:dirt_bricks_vertical_slab', 'environmental:dirt_brick_wall')
    global.BLOCK_SWAPPER.set('quark:cobblestone_bricks', 'caverns_and_chasms:cobblestone_bricks')
    global.BLOCK_SWAPPER.set('quark:cobblestone_bricks_stairs', 'caverns_and_chasms:cobblestone_brick_stairs')
    global.BLOCK_SWAPPER.set('quark:cobblestone_bricks_slab', 'caverns_and_chasms:cobblestone_brick_slab')
    global.BLOCK_SWAPPER.set('quark:cobblestone_bricks_wall', 'caverns_and_chasms:cobblestone_brick_wall')
    global.BLOCK_SWAPPER.set('quark:cobblestone_bricks_vertical_slab', 'quark:cobblestone_vertical_slab')
    global.BLOCK_SWAPPER.set('quark:mossy_cobblestone_bricks', 'caverns_and_chasms:mossy_cobblestone_bricks')
    global.BLOCK_SWAPPER.set('quark:mossy_cobblestone_bricks_stairs', 'caverns_and_chasms:mossy_cobblestone_brick_stairs')
    global.BLOCK_SWAPPER.set('quark:mossy_cobblestone_bricks_slab', 'caverns_and_chasms:mossy_cobblestone_brick_slab')
    global.BLOCK_SWAPPER.set('quark:mossy_cobblestone_bricks_wall', 'caverns_and_chasms:mossy_cobblestone_brick_wall')
    global.BLOCK_SWAPPER.set('quark:mossy_cobblestone_bricks_vertical_slab', 'quark:mossy_cobblestone_vertical_slab')
    // Unique Chests
    global.BLOCK_SWAPPER.set('quark:nether_brick_chest', 'woodworks:crimson_chest')
    global.BLOCK_SWAPPER.set('quark:purpur_chest', 'woodworks:crimson_chest')
    global.BLOCK_SWAPPER.set('quark:prismarine_chest', 'woodworks:warped_chest')
    global.BLOCK_SWAPPER.set('quark:trapped_nether_brick_chest', 'woodworks:trapped_crimson_chest')
    global.BLOCK_SWAPPER.set('quark:trapped_purpur_chest', 'woodworks:trapped_crimson_chest')
    global.BLOCK_SWAPPER.set('quark:trapped_prismarine_chest', 'woodworks:trapped_warped_chest')
    */

    // Corundum
    /*
    const switchCorundum = (color, cluster, block, pane, lamp) => {
        global.BLOCK_SWAPPER.set(`quark:${color}_corundum_cluster`, cluster)
        global.BLOCK_SWAPPER.set(`quark:${color}_corundum`, block)
        global.BLOCK_SWAPPER.set(`quark:${color}_pane`, pane)
        global.BLOCK_SWAPPER.set(`quark:${color}_crystal_lamp`, lamp)
    }
    switchCorundum('black', )
    switchCorundum('blue', 'galosphere:glinted_allurite_cluster', 'galosphere:allurite_block', 'pastel:topaz_glass_pane', 'galosphere:allurite_lamp')
    switchCorundum('green', )
    switchCorundum('indigo', )
    switchCorundum('orange', )
    switchCorundum('red', )
    switchCorundum('violet', )
    switchCorundum('white', )
    switchCorundum('yellow', 'galosphere:glinted_lumiere_cluster', 'galosphere:lumiere_block', 'pastel:citrine_glass_pane', 'galosphere:lumiere_lamp')
    */

    /*
    const swapStone = (stone, extras) => {
        global.BLOCK_SWAPPER.set(`quark:${stone}_bricks`, `caverns_and_chasms:${stone}_bricks`)
        global.BLOCK_SWAPPER.set(`quark:${stone}_bricks_stairs`, `caverns_and_chasms:${stone}_brick_stairs`)
        global.BLOCK_SWAPPER.set(`quark:${stone}_bricks_slab`, `caverns_and_chasms:${stone}_brick_slab`)
        global.BLOCK_SWAPPER.set(`quark:${stone}_bricks_wall`, `caverns_and_chasms:${stone}_brick_wall`)
        global.BLOCK_SWAPPER.set(`quark:${stone}_bricks_vertical_slab`, `quark:${stone == 'dripstone' ? stone + '_block' : stone}_vertical_slab`)
        global.BLOCK_SWAPPER.set(`quark:chiseled_${stone}_bricks`, `caverns_and_chasms:chiseled_polished_${stone}`)

        if (stone == 'dripstone') global.BLOCK_SWAPPER.set(`quark:${stone}_pillar`, `create:${stone}_pillar`)
        else global.BLOCK_SWAPPER.set(`quark:${stone}_pillar`, `caverns_and_chasms:${stone}_pillar`)
        if (extras) {
            global.BLOCK_SWAPPER.set(`quark:chiseled_${stone}_bricks`, `caverns_and_chasms:chiseled_${stone}_bricks`)
            global.BLOCK_SWAPPER.set(`quark:${stone == 'dripstone' ? stone + '_block' : stone}_slab`, `caverns_and_chasms:${stone}_slab`)
            global.BLOCK_SWAPPER.set(`quark:${stone == 'dripstone' ? stone + '_block' : stone}_stairs`, `caverns_and_chasms:${stone}_stairs`)
            // global.BLOCK_SWAPPER.set(`quark:${stone == 'dripstone' ? stone + '_block' : stone}_vertical_slab`, `stonezone:caverns_and_chasms/${stone}_vertical_slab`)
            global.BLOCK_SWAPPER.set(`quark:${stone == 'dripstone' ? stone + '_block' : stone}_wall`, `caverns_and_chasms:${stone}_wall`)
            global.BLOCK_SWAPPER.set(`quark:polished_${stone}`, `caverns_and_chasms:polished_${stone}`)
            global.BLOCK_SWAPPER.set(`quark:polished_${stone}_slab`, `caverns_and_chasms:polished_${stone}_slab`)
            global.BLOCK_SWAPPER.set(`quark:polished_${stone}_vertical_slab`, `quark:${stone == 'dripstone' ? stone + '_block' : stone}_vertical_slab`)
            global.BLOCK_SWAPPER.set(`quark:polished_${stone}_stairs`, `caverns_and_chasms:polished_${stone}_stairs`)
        }
    }
    swapStone('granite', false)
    swapStone('diorite', false)
    swapStone('andesite', false)
    swapStone('calcite', true)
    swapStone('dripstone', true)
    // swapStone('tuff', true)

    // Limestone -> No Man's Land siltstone
    global.BLOCK_SWAPPER.set('quark:limestone', 'nomansland:siltstone')
    global.BLOCK_SWAPPER.set('quark:limestone_wall', 'nomansland:siltstone_wall')
    global.BLOCK_SWAPPER.set('quark:limestone_slab', 'nomansland:siltstone_slab')
    global.BLOCK_SWAPPER.set('quark:limestone_vertical_slab', 'stonezone:q/nomansland/siltstone_vertical_slab')
    global.BLOCK_SWAPPER.set('quark:limestone_stairs', 'nomansland:siltstone_stairs')
    global.BLOCK_SWAPPER.set('quark:limestone_pillar', 'stonezone:c/nomansland/siltstone_pillar')
    global.BLOCK_SWAPPER.set('quark:polished_limestone', 'nomansland:polished_siltstone')
    global.BLOCK_SWAPPER.set('quark:polished_limestone_slab', 'nomansland:polished_siltstone_slab')
    global.BLOCK_SWAPPER.set('quark:polished_limestone_vertical_slab', 'stonezone:q/nomansland/polished_siltstone_vertical_slab')
    global.BLOCK_SWAPPER.set('quark:polished_limestone_stairs', 'nomansland:polished_siltstone_stairs')
    global.BLOCK_SWAPPER.set('quark:limestone_bricks', 'nomansland:siltstone_bricks')
    global.BLOCK_SWAPPER.set('quark:limestone_bricks_wall', 'nomansland:siltstone_brick_wall')
    global.BLOCK_SWAPPER.set('quark:limestone_bricks_slab', 'nomansland:siltstone_brick_slab')
    global.BLOCK_SWAPPER.set('quark:limestone_bricks_vertical_slab', 'stonezone:q/nomansland/polished_siltstone_vertical_slab')
    global.BLOCK_SWAPPER.set('quark:limestone_bricks_stairs', 'nomansland:siltstone_brick_stairs')
    global.BLOCK_SWAPPER.set('quark:chiseled_limestone_bricks', 'nomansland:chiseled_siltstone')

    // Jasper -> Caverns & Chasms rhyolite
    global.BLOCK_SWAPPER.set('quark:jasper', 'caverns_and_chasms:rhyolite')
    global.BLOCK_SWAPPER.set('quark:jasper_wall', 'caverns_and_chasms:rhyolite_wall')
    global.BLOCK_SWAPPER.set('quark:jasper_slab', 'caverns_and_chasms:rhyolite_slab')
    global.BLOCK_SWAPPER.set('quark:jasper_vertical_slab', 'stonezone:q/caverns_and_chasms/rhyolite_vertical_slab')
    global.BLOCK_SWAPPER.set('quark:jasper_stairs', 'caverns_and_chasms:rhyolite_stairs')
    global.BLOCK_SWAPPER.set('quark:jasper_pillar', 'caverns_and_chasms:rhyolite')
    global.BLOCK_SWAPPER.set('quark:polished_jasper', 'caverns_and_chasms:polished_rhyolite')
    global.BLOCK_SWAPPER.set('quark:polished_jasper_slab', 'caverns_and_chasms:polished_rhyolite_slab')
    global.BLOCK_SWAPPER.set('quark:polished_jasper_vertical_slab', 'stonezone:q/caverns_and_chasms/polished_rhyolite_vertical_slab')
    global.BLOCK_SWAPPER.set('quark:polished_jasper_stairs', 'caverns_and_chasms:polished_rhyolite_stairs')
    global.BLOCK_SWAPPER.set('quark:jasper_bricks', 'caverns_and_chasms:rhyolite_bricks')
    global.BLOCK_SWAPPER.set('quark:jasper_bricks_wall', 'caverns_and_chasms:rhyolite_brick_wall')
    global.BLOCK_SWAPPER.set('quark:jasper_bricks_slab', 'caverns_and_chasms:rhyolite_brick_slab')
    global.BLOCK_SWAPPER.set('quark:jasper_bricks_vertical_slab', 'stonezone:q/caverns_and_chasms/polished_rhyolite_vertical_slab')
    global.BLOCK_SWAPPER.set('quark:jasper_bricks_stairs', 'caverns_and_chasms:rhyolite_brick_stairs')
    global.BLOCK_SWAPPER.set('quark:chiseled_jasper_bricks', 'caverns_and_chasms:chiseled_rhyolite_bricks')
    */

    // Shale -> Caverns & Chasms schist
    /*
    global.BLOCK_SWAPPER.set('quark:shale', 'caverns_and_chasms:schist')
    global.BLOCK_SWAPPER.set('quark:shale_wall', 'caverns_and_chasms:schist_wall')
    global.BLOCK_SWAPPER.set('quark:shale_slab', 'caverns_and_chasms:schist_slab')
    // global.BLOCK_SWAPPER.set('quark:shale_vertical_slab', 'everycomp:q/caverns_and_chasms/schist_vertical_slab')
    global.BLOCK_SWAPPER.set('quark:shale_stairs', 'caverns_and_chasms:schist_stairs')
    global.BLOCK_SWAPPER.set('quark:shale_pillar', 'caverns_and_chasms:schist_pillar')
    global.BLOCK_SWAPPER.set('quark:polished_shale', 'caverns_and_chasms:smooth_schist')
    global.BLOCK_SWAPPER.set('quark:polished_shale_slab', 'caverns_and_chasms:smooth_schist_slab')
    // global.BLOCK_SWAPPER.set('quark:polished_shale_vertical_slab', 'everycomp:q/caverns_and_chasms:schist_vertical_slab')
    global.BLOCK_SWAPPER.set('quark:polished_shale_stairs', 'caverns_and_chasms:smooth_schist_stairs')
    global.BLOCK_SWAPPER.set('quark:shale_bricks', 'minecraft:tuff_bricks')  // was renamed to schist
    global.BLOCK_SWAPPER.set('quark:shale_bricks_wall', 'minecraft:tuff_brick_wall')  // was renamed to schist
    global.BLOCK_SWAPPER.set('quark:shale_bricks_slab', 'minecraft:tuff_brick_slab')  // was renamed to schist
    global.BLOCK_SWAPPER.set('quark:shale_bricks_vertical_slab', 'quark:tuff_brick_vertical_slab')
    global.BLOCK_SWAPPER.set('quark:shale_bricks_stairs', 'minecraft:tuff_brick_stairs')  // was renamed to schist
    global.BLOCK_SWAPPER.set('quark:chiseled_shale_bricks', 'caverns_and_chasms:schist_pillar')  // was renamed to schist
    */

    // Blue nether brick
    /*
    global.BLOCK_SWAPPER.set('quark:blue_nether_bricks', 'netherdescent:blue_nether_bricks')
    global.BLOCK_SWAPPER.set('quark:blue_nether_bricks_wall', 'netherdescent:blue_nether_brick_wall')
    global.BLOCK_SWAPPER.set('quark:blue_nether_bricks_slab', 'netherdescent:blue_nether_brick_slab')
    // global.BLOCK_SWAPPER.set('quark:blue_nether_bricks_vertical_slab', 'netherdescent:blue_nether_brick_slab')
    global.BLOCK_SWAPPER.set('quark:blue_nether_bricks_stairs', 'netherdescent:blue_nether_brick_stairs')
    */

    /*
    global.BLOCK_SWAPPER.set('quark:blackstone_bricks', 'minecraft:polished_blackstone_bricks')
    global.BLOCK_SWAPPER.set('quark:blackstone_bricks_slab', 'minecraft:polished_blackstone_brick_slab')
    global.BLOCK_SWAPPER.set('quark:blackstone_bricks_stairs', 'minecraft:polished_blackstone_brick_stairs')
    global.BLOCK_SWAPPER.set('quark:blackstone_bricks_vertical_slab', 'minecraft:polished_blackstone_brick_slab')
    global.BLOCK_SWAPPER.set('quark:blackstone_bricks_wall', 'minecraft:polished_blackstone_brick_wall')
    global.BLOCK_SWAPPER.set('quark:netherrack_bricks', 'minecraft:nether_bricks')
    global.BLOCK_SWAPPER.set('quark:netherrack_bricks_slab', 'minecraft:nether_brick_slab')
    global.BLOCK_SWAPPER.set('quark:netherrack_bricks_stairs', 'minecraft:nether_brick_stairs')
    global.BLOCK_SWAPPER.set('quark:netherrack_bricks_vertical_slab', 'minecraft:nether_brick_slab')
    global.BLOCK_SWAPPER.set('quark:netherrack_bricks_wall', 'minecraft:nether_brick_wall')
    */

    /*
    global.BLOCK_SWAPPER.set('quark:sandstone_bricks', 'blockbox:sandstone_bricks')
    global.BLOCK_SWAPPER.set('quark:sandstone_bricks_slab', 'blockbox:sandstone_brick_slab')
    global.BLOCK_SWAPPER.set('quark:sandstone_bricks_stairs', 'blockbox:sandstone_brick_stairs')
    global.BLOCK_SWAPPER.set('quark:sandstone_bricks_vertical_slab', 'quark:sandstone_vertical_slab')
    global.BLOCK_SWAPPER.set('quark:sandstone_bricks_wall', 'minecraft:sandstone_wall')
    global.BLOCK_SWAPPER.set('quark:red_sandstone_bricks', 'blockbox:red_sandstone_bricks')
    global.BLOCK_SWAPPER.set('quark:red_sandstone_bricks_wall', 'minecraft:red_sandstone_wall')
    */

    /*
    global.BLOCK_SWAPPER.set('quark:soul_sandstone', 'minecraft:soul_sand')
    global.BLOCK_SWAPPER.set('quark:soul_sandstone_slab', 'minecraft:nether_brick_slab')
    global.BLOCK_SWAPPER.set('quark:soul_sandstone_stairs', 'minecraft:nether_brick_stairs')
    global.BLOCK_SWAPPER.set('quark:soul_sandstone_bricks', 'minecraft:nether_bricks')
    global.BLOCK_SWAPPER.set('quark:soul_sandstone_bricks_slab', 'minecraft:nether_brick_slab')
    global.BLOCK_SWAPPER.set('quark:soul_sandstone_bricks_stairs', 'minecraft:nether_brick_stairs')
    global.BLOCK_SWAPPER.set('quark:chiseled_soul_sandstone', 'minecraft:chiseled_sandstone')
    */

    /*
    global.BLOCK_SWAPPER.set('quark:myalite', 'minecraft:end_stone')
    global.BLOCK_SWAPPER.set('quark:dusky_myalite', 'minecraft:end_stone')
    global.BLOCK_SWAPPER.set('quark:myalite_slab', 'minecraft:end_stone_brick_slab')
    global.BLOCK_SWAPPER.set('quark:myalite_stairs', 'minecraft:end_stone_brick_stairs')
    global.BLOCK_SWAPPER.set('quark:myalite_wall', 'minecraft:end_stone_brick_wall')
    global.BLOCK_SWAPPER.set('quark:myalite_bricks_stairs', 'minecraft:end_stone_brick_stairs')
    global.BLOCK_SWAPPER.set('quark:myalite_bricks_wall', 'minecraft:end_stone_brick_wall')
    global.BLOCK_SWAPPER.set('quark:myalite_pillar', 'minecraft:purpur_pillar')
    global.BLOCK_SWAPPER.set('quark:myalite_crystal', 'minecraft:amethyst_cluster')
    global.BLOCK_SWAPPER.set('quark:chiseled_myalite_bricks', 'minecraft:amethyst_cluster')
    */

    /*
    global.BLOCK_SWAPPER.set('quark:carved_mud_bricks', 'environmental:chiseled_mud_bricks')
    global.BLOCK_SWAPPER.set('quark:stone_lamp', 'supplementaries:stone_lamp')
    global.BLOCK_SWAPPER.set('quark:stone_brick_lamp', 'supplementaries:stone_lamp')
    // global.BLOCK_SWAPPER.set('quark:deepslate_furnace', 'minecraft:furnace')
    // global.BLOCK_SWAPPER.set('quark:blackstone_furnace', 'minecraft:furnace')

    // Storage blocks
    // global.BLOCK_SWAPPER.set('quark:cocoa_beans_sack', 'packedup:cocoa_bean_bag')
    // global.BLOCK_SWAPPER.set('quark:nether_wart_sack', 'packedup:nether_wart_bag')
    global.BLOCK_SWAPPER.set('quark:gunpowder_sack', 'caverns_and_chasms:gunpowder_block')
    global.BLOCK_SWAPPER.set('quark:berry_sack', 'berry_good:sweet_berry_basket')
    global.BLOCK_SWAPPER.set('quark:glowberry_sack', 'berry_good:glow_berry_basket')
    // global.BLOCK_SWAPPER.set('quark:golden_apple_crate', 'packedup:golden_apple_basket')
    global.BLOCK_SWAPPER.set('quark:apple_crate', 'nomansland:apple_crate')
    global.BLOCK_SWAPPER.set('quark:potato_crate', 'farmersdelight:potato_crate')
    global.BLOCK_SWAPPER.set('quark:carrot_crate', 'farmersdelight:carrot_crate')
    // global.BLOCK_SWAPPER.set('quark:golden_carrot_crate', 'packedup:golden_carrot_crate')
    global.BLOCK_SWAPPER.set('quark:beetroot_crate', 'farmersdelight:beetroot_crate')
    global.BLOCK_SWAPPER.set('quark:charcoal_block', 'caverns_and_chasms:charcoal_block')
    // Quark Oddities
    global.BLOCK_SWAPPER.set('quark:pipe', 'create:fluid_pipe')

    // Entities
    global.ENTITY_SWAPPER.set('quark:wraith', 'caverns_and_chasms:mime')
    // global.ENTITY_SWAPPER.set('quark:foxhound', 'alexsmobs:dropbear')
    global.ENTITY_SWAPPER.set('quark:shiba', 'minecraft:wolf')
    global.ENTITY_SWAPPER.set('quark:crab', 'minecraft:frog')
    global.ENTITY_REMOVALS.push(
        'quark:wraith',
        'quark:foxhound',
        'quark:shiba',
        'quark:crab',
        'quark:toretoise',
    )

    // Carpets
    global.BLOCK_SWAPPER.set('quark:red_blossom_leaf_carpet', 'everycomp:abnww/malum/runewood_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:orange_blossom_leaf_carpet', 'everycomp:abnww/malum/runewood_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:yellow_blossom_leaf_carpet', 'atmospheric:aspen_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:blue_blossom_leaf_carpet', 'everycomp:abnww/cobblemon/saccharine_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:lavender_blossom_leaf_carpet', 'environmental:plum_leaf_pile')
    global.BLOCK_SWAPPER.set('quark:ancient_leaf_carpet', 'atmospheric:kousa_leaf_pile')
    // Hedges
    global.BLOCK_SWAPPER.set('quark:red_blossom_hedge', 'everycomp:q/malum/runewood_hedge')
    global.BLOCK_SWAPPER.set('quark:orange_blossom_hedge', 'everycomp:q/malum/runewood_hedge')
    global.BLOCK_SWAPPER.set('quark:yellow_blossom_hedge', 'everycomp:q/atmospheric/aspen_hedge')
    global.BLOCK_SWAPPER.set('quark:blue_blossom_hedge', 'everycomp:q/cobblemon/saccharine_hedge')
    global.BLOCK_SWAPPER.set('quark:lavender_blossom_hedge', 'everycomp:q/environmental/plum_hedge')
    global.BLOCK_SWAPPER.set('quark:ancient_hedge', 'everycomp:q/atmospheric/kousa_hedge')
    // Saplings
    global.BLOCK_SWAPPER.set('quark:red_blossom_sapling', 'malum:runewood_sapling')
    global.BLOCK_SWAPPER.set('quark:orange_blossom_sapling', 'malum:runewood_sapling')
    global.BLOCK_SWAPPER.set('quark:yellow_blossom_sapling', 'atmospheric:aspen_sapling')
    global.BLOCK_SWAPPER.set('quark:blue_blossom_sapling', 'cobblemon:saccharine_sapling')
    global.BLOCK_SWAPPER.set('quark:lavender_blossom_sapling', 'environmental:plum_sapling')
    global.BLOCK_SWAPPER.set('quark:ancient_sapling', 'atmospheric:kousa_sapling')
    // Potted Saplings
    global.BLOCK_SWAPPER.set('quark:potted_red_blossom_sapling', 'malum:potted_runewood_sapling')
    global.BLOCK_SWAPPER.set('quark:potted_orange_blossom_sapling', 'malum:potted_runewood_sapling')
    global.BLOCK_SWAPPER.set('quark:potted_yellow_blossom_sapling', 'atmospheric:potted_aspen_sapling')
    global.BLOCK_SWAPPER.set('quark:potted_blue_blossom_sapling', 'cobblemon:potted_saccharine_sapling')
    global.BLOCK_SWAPPER.set('quark:potted_lavender_blossom_sapling', 'environmental:potted_plum_sapling')
    global.BLOCK_SWAPPER.set('quark:potted_ancient_sapling', 'atmospheric:potted_kousa_sapling')
    // Leaves
    global.BLOCK_SWAPPER.set('quark:red_blossom_leaves', 'malum:runewood_leaves')
    global.BLOCK_SWAPPER.set('quark:orange_blossom_leaves', 'malum:runewood_leaves')
    global.BLOCK_SWAPPER.set('quark:yellow_blossom_leaves', 'atmospheric:aspen_leaves')
    global.BLOCK_SWAPPER.set('quark:blue_blossom_leaves', 'cobblemon:saccharine_leaves')
    global.BLOCK_SWAPPER.set('quark:lavender_blossom_leaves', 'environmental:plum_leaves')
    global.BLOCK_SWAPPER.set('quark:ancient_leaves', 'atmospheric:kousa_leaves')

    // Swap Quark wooden blocks to woodworks variants
    for (const [woodType, woodTypeObj] of Object.entries(global.WOOD_TYPES.minecraft)) {
        global.BLOCK_SWAPPER.set('quark:' + woodType + '_chest', woodTypeObj.woodworks.chest)
        global.BLOCK_SWAPPER.set('quark:trapped_' + woodType + '_chest', woodTypeObj.woodworks.trapped_chest)
        if (woodType != 'bamboo') {
            global.BLOCK_SWAPPER.set('quark:vertical_' + woodType + '_planks', woodTypeObj.woodworks.boards)
        }
        if (woodType != 'oak') {
            global.BLOCK_SWAPPER.set('quark:' + woodType + '_bookshelf', woodTypeObj.woodworks.bookshelf)
            global.BLOCK_SWAPPER.set('quark:' + woodType + '_ladder', woodTypeObj.woodworks.ladder)
        }
    }
    global.BLOCK_SWAPPER.set('quark:vertical_bamboo_planks', 'minecraft:bamboo_mosaic')

    for (const woodType in woodTypesToConstruct.quark) {
        if (woodTypesToConstruct.quark[woodType]) continue  // Skip enabled wood types
        global.DISABLED_WOOD_TYPES.quark[woodType].woodworks.chest = 'quark:' + woodType + '_chest'
        global.DISABLED_WOOD_TYPES.quark[woodType].woodworks.trapped_chest = 'quark:trapped_' + woodType + '_chest'
        global.DISABLED_WOOD_TYPES.quark[woodType].woodworks.bookshelf = 'quark:' + woodType + '_bookshelf'
        global.DISABLED_WOOD_TYPES.quark[woodType].woodworks.ladder = 'quark:' + woodType + '_ladder'
    }

    swapWoodType(global.DISABLED_WOOD_TYPES.quark.blossom, global.WOOD_TYPES.environmental.plum)
    swapWoodType(global.DISABLED_WOOD_TYPES.quark.azalea, global.WOOD_TYPES.caverns_and_chasms.azalea)
    swapWoodType(global.DISABLED_WOOD_TYPES.quark.ancient, global.WOOD_TYPES.environmental.wisteria)
    global.BLOCK_SWAPPER.set('quark:vertical_blossom_planks', 'environmental:plum_boards')
    global.BLOCK_SWAPPER.set('quark:vertical_azalea_planks', 'caverns_and_chasms:azalea_boards')
    global.BLOCK_SWAPPER.set('quark:vertical_ancient_planks', 'environmental:wisteria_boards')
    */
}
