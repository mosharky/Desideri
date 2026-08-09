function constructWoodTypes() {
    if (global.DEBUG_MODE) console.log('Constructing wood types..')
    Object.keys(woodTypesToConstruct).forEach(mod => {
        global.WOOD_TYPES[mod] = {}
        global.DISABLED_WOOD_TYPES[mod] = {}

        Object.keys(woodTypesToConstruct[mod]).forEach(woodType => {
            if (global.DEBUG_MODE) console.log(`Constructing "${mod}:${woodType}"`)
            if (woodTypesToConstruct[mod][woodType]) {
                global.WOOD_TYPES[mod][woodType] = {}
            } else {
                global.DISABLED_WOOD_TYPES[mod][woodType] = {}
            }

            let logSuffix = '_log', woodSuffix = '_wood', barkSuffix = '_bark', plankSuffix = ''
            let logPrefix = '', woodPrefix = ''
            switch (woodType) {
                case 'warped': case 'crimson': case 'soulblight': {
                    logSuffix = '_stem'
                    woodSuffix = '_hyphae'
                    barkSuffix = '_scales'
                    break
                }
                case 'poise': logSuffix = '_stem'; break
                case 'driftwood': woodSuffix = ''; break
                case 'grimwood': woodSuffix = ''; break
                case 'rosewood': woodSuffix = ''; break
                case 'claret': {
                    logSuffix = '_stem'
                    woodSuffix = '_hyphae'
                    barkSuffix = '_scales'
                    logPrefix = 'cerebrage_'
                    woodPrefix = 'cerebrage_'
                    break
                }
                case 'petrified': case 'powdery': barkSuffix = '_scales'; break
                case 'runewood': case 'soulwood': {
                    woodSuffix = ''
                    plankSuffix = '_planks'
                    break
                }
            }

            let woodworksCompatId               = `everycomp:abnww/${mod}/`
            let quarkCompatId                   = `everycomp:q/${mod}/`
            let verticalSlabCompatId            = `everycomp:q/${mod}/`
            let createCompatId                  = `everycomp:c/${mod}/`
            let farmersDelightCompatId          = `everycomp:fd/${mod}/`
            let suppSquaredCompatId             = `suppsquared:${mod}/`
            let supplementariesCompatId         = `supplementaries:${mod}/`
            let immersiveWeatheringCompatId     = `immersive_weathering:${mod}/`
            let snowySpiritCompatId             = `snowyspirit:${mod}/`
            let anotherFurnitureCompatId        = `everycomp:af/${mod}/`
            let backpackedCompatId              = `everycomp:bp/${mod}/`
            let decorativeBlocksCompatId        = `everycomp:db/${mod}/`
            let noMansLandCompatId              = `everycomp:nml/${mod}/`
            let bountifulFaresCompatId          = `everycomp:bf/${mod}/`

            switch (mod) {
                case 'minecraft': {
                    // Vanilla backport case
                    suppSquaredCompatId         = 'suppsquared:'
                    supplementariesCompatId     = 'supplementaries:'
                    snowySpiritCompatId         = 'snowyspirit:'
                    if (woodType != 'pale_oak') {
                        woodworksCompatId           = 'woodworks:'
                        quarkCompatId               = 'quark:'
                        verticalSlabCompatId        = 'quark:'
                        createCompatId              = 'create:'
                        farmersDelightCompatId      = 'farmersdelight:'
                        immersiveWeatheringCompatId = 'immersive_weathering:'
                        anotherFurnitureCompatId    = 'another_furniture:'
                        backpackedCompatId          = 'backpacked:'
                        decorativeBlocksCompatId    = 'decorative_blocks:'
                        noMansLandCompatId          = 'nomansland:'
                        bountifulFaresCompatId      = 'bountifulfares:'
                    }
                    break
                }
                case 'quark': {
                    quarkCompatId = 'quark:'
                    break
                }
                // Abnormals mods have native compat with woodworks and farmers delight
                case 'autumnity': case 'atmospheric': case 'upgrade_aquatic': case 'environmental': case 'endergetic': case 'caverns_and_chasms': {
                    woodworksCompatId = mod + ':'
                    farmersDelightCompatId = 'abnormals_delight:'
                    break
                }
                case 'windswept': {
                    woodworksCompatId = mod + ':'
                    farmersDelightCompatId = 'windswept_delights:'
                    break
                }
                case 'darkerdepths': {
                    quarkCompatId = mod + ':'
                    verticalSlabCompatId = mod + ':'
                    noMansLandCompatId = mod + ':'
                    break
                }
                case 'mynethersdelight': {
                    farmersDelightCompatId = mod + ':'
                    break
                }
                case 'collectorsreap': {
                    farmersDelightCompatId = mod + ':'
                    woodworksCompatId = mod + ':'
                    break
                }
                case 'natures_spirit': {
                    farmersDelightCompatId = 'natures_delight:'
                    bountifulFaresCompatId = mod + ':'
                    break
                }
                case 'nomansland': {
                    noMansLandCompatId = mod + ':'
                    farmersDelightCompatId = mod + ':'
                    bountifulFaresCompatId = mod + ':'
                }
            }

            const woodTypeObj = {
                minecraft: {
                    log:                    mod + ':' + logPrefix + woodType + logSuffix,
                    wood:                   mod + ':' + woodPrefix + woodType + woodSuffix,
                    stripped_log:           mod + ':stripped_' + woodType + logSuffix,
                    stripped_wood:          mod + ':stripped_' + woodType + woodSuffix,
                    planks:                 mod + ':' + woodType + '_planks',
                    stairs:                 mod + ':' + woodType + plankSuffix + '_stairs',
                    slab:                   mod + ':' + woodType + plankSuffix + '_slab',
                    fence:                  mod + ':' + woodType + plankSuffix + '_fence',
                    fence_gate:             mod + ':' + woodType + plankSuffix + '_fence_gate',
                    door:                   mod + ':' + woodType + '_door',
                    trapdoor:               mod + ':' + woodType + '_trapdoor',
                    pressure_plate:         mod + ':' + woodType + plankSuffix + '_pressure_plate',
                    button:                 mod + ':' + woodType + plankSuffix + '_button',
                    sign:                   mod + ':' + woodType + '_sign',
                    hanging_sign:           mod + ':' + woodType + '_hanging_sign',
                    boat:                   mod + ':' + woodType + '_boat',
                    chest_boat:             mod + ':' + woodType + '_chest_boat',
                },
                woodworks: {
                    chest:                  woodworksCompatId + woodType + '_chest',
                    trapped_chest:          woodworksCompatId + 'trapped_' + woodType + '_chest',
                    boards:                 woodworksCompatId + woodType + '_boards',
                    ladder:                 woodworksCompatId + woodType + '_ladder',
                    beehive:                woodworksCompatId + woodType + '_beehive',
                    bookshelf:              woodworksCompatId + woodType + '_bookshelf',
                    chiseled_bookshelf:     woodworksCompatId + 'chiseled_' + woodType + '_bookshelf',
                },
                quark: {
                    // vertical_slab:          verticalSlabCompatId + woodType + plankSuffix + '_vertical_slab',
                    // vertical_planks:        quarkCompatId + 'vertical_' + woodType + '_planks',
                    post:                   quarkCompatId + woodType + '_post',
                    stripped_post:          quarkCompatId + 'stripped_' + woodType + '_post',
                    hollow_log:             quarkCompatId + 'hollow_' + woodType + logSuffix,
                },
                create: {
                    window:                 createCompatId + woodType + '_window',
                    window_pane:            createCompatId + woodType + '_window_pane',
                },
                farmersdelight: {
                    cabinet:                farmersDelightCompatId + woodType + '_cabinet',
                },
                supplementaries: {
                    way_sign:               supplementariesCompatId + 'way_sign_' + woodType,
                    cannon_boat:            supplementariesCompatId + 'cannon_boat_' + woodType,
                    // item_shelf:             suppSquaredCompatId + 'item_shelf_' + woodType,
                },
                // immersive_weathering: {
                    // bark:                   immersiveWeatheringCompatId + woodType + barkSuffix
                // },
                // snowy_spirit: {
                    // sled:                   snowySpiritCompatId + 'sled_' + woodType
                // },
                another_furniture: {
                    // flower_box:             anotherFurnitureCompatId + woodType + '_flower_box',
                    shelf:                  anotherFurnitureCompatId + woodType + '_shelf',
                    shutter:                anotherFurnitureCompatId + woodType + '_shutter',
                    bench:                  anotherFurnitureCompatId + woodType + '_bench',
                    table:                  anotherFurnitureCompatId + woodType + '_table',
                    drawer:                 anotherFurnitureCompatId + woodType + '_drawer',
                    chair:                  anotherFurnitureCompatId + woodType + '_chair'
                },
                // backpacked: {
                    // backpack_shelf:         backpackedCompatId + woodType + '_backpack_shelf'
                // },
                nomansland: {
                    trimmed_planks:         noMansLandCompatId + 'trimmed_' + woodType + '_planks',
                },
                bountifulfares: {
                    pickets:           bountifulFaresCompatId + woodType + '_pickets',
                    trellis:           bountifulFaresCompatId + woodType + '_trellis',
                }
            }

            // Lazy final try for stem/hyphae differentiation in case i missed something
            // if (!Item.exists(woodTypeObj.immersive_weathering.bark)) {
                // woodTypeObj.immersive_weathering.bark = immersiveWeatheringCompatId + woodType + '_scales'
            // }
            if (!Item.exists(woodTypeObj.minecraft.log)) {
                woodTypeObj.minecraft.log               = mod + ':' + logPrefix + woodType + '_stem'
                woodTypeObj.minecraft.wood              = mod + ':' + woodPrefix + woodType + '_hyphae'
                woodTypeObj.minecraft.stripped_log      = mod + ':stripped_' + woodType + '_stem'
                woodTypeObj.minecraft.stripped_wood     = mod + ':stripped_' + woodType + '_hyphae'
            }

            // Raft fallback
            if (!Item.exists(woodTypeObj.minecraft.boat)) {
                woodTypeObj.minecraft.boat              = mod + ':' + woodType + '_raft'
            }
            if (!Item.exists(woodTypeObj.minecraft.chest_boat)) {
                woodTypeObj.minecraft.chest_boat        = mod + ':' + woodType + '_chest_raft'
            }
            if (!Item.exists(woodTypeObj.supplementaries.cannon_boat)) {
                woodTypeObj.supplementaries.cannon_boat = supplementariesCompatId + 'cannon_raft_' + woodType
            }


            // Adjusting for edge cases
            switch (woodType) {
                case 'oak': {
                    woodTypeObj.woodworks.ladder                = 'minecraft:ladder'
                    woodTypeObj.woodworks.beehive               = 'minecraft:beehive'
                    woodTypeObj.woodworks.bookshelf             = 'minecraft:bookshelf'
                    woodTypeObj.woodworks.chiseled_bookshelf    = 'minecraft:chiseled_bookshelf'
                    woodTypeObj.supplementaries.item_shelf      = 'supplementaries:item_shelf'
                    break
                }
                case 'bamboo': {
                    woodTypeObj.woodworks.chest         = 'woodworks:bamboo_closet'
                    woodTypeObj.woodworks.trapped_chest = 'woodworks:trapped_bamboo_closet'
                    break
                }
                case 'poise': {
                    // woodTypeObj.quark.hollow_log        = 'everycomp:q/endergetic/hollow_poise_log'  // bruh
                    break
                }
                case 'petrified': {
                    // woodTypeObj.quark.hollow_log        = 'everycomp:q/darkerdepths/hollow_petrified_log'
                    woodTypeObj.woodworks.bookshelf     = 'darkerdepths:petrified_bookshelf'
                    break
                }
                case 'runewood': case 'soulwood': {
                    woodTypeObj.woodworks.boards        = mod + ':' + woodType + '_boards'
                    // woodTypeObj.quark.vertical_planks   = mod + ':' + 'vertical_' + woodType + '_planks'
                    break
                }
            }


            switch (mod) {
                case 'quark': {
                    // WHY
                    woodTypeObj.minecraft.slab          = mod + ':' + woodType + '_planks_slab'
                    woodTypeObj.minecraft.stairs        = mod + ':' + woodType + '_planks_stairs'
                    woodTypeObj.quark.vertical_slab     = mod + ':' + woodType + '_planks_vertical_slab'
                    break
                }
                case 'goety': {
                    woodTypeObj.woodworks.chest         = mod + ':' + woodType + '_chest'
                    woodTypeObj.woodworks.trapped_chest = mod + ':trapped_' + woodType + '_chest'
                    woodTypeObj.woodworks.bookshelf     = mod + ':' + woodType + '_bookshelf'
                    break
                }
                case 'nomansland': {
                    woodTypeObj.woodworks.bookshelf     = mod + ':' + woodType + '_bookshelf'
                }
            }

            // Debug
            for (const [entrySetMod, entries] of Object.entries(woodTypeObj)) {
                for (const [entryName, entryId] of Object.entries(entries)) {
                    if (entryId != undefined && !Item.exists(entryId)) {
                        if (global.DEBUG_MODE && woodTypesToConstruct[mod][woodType]) {
                            console.warn(`    DOESN'T EXIST: ${entryName}: "${entryId}"`)
                        }
                        
                        woodTypeObj[entrySetMod][entryName] = undefined
                    }
                }
            }

            // Finalization
            if (woodTypesToConstruct[mod][woodType]) {
                global.WOOD_TYPES[mod][woodType] = woodTypeObj
            } else {
                global.DISABLED_WOOD_TYPES[mod][woodType] = woodTypeObj
                global.REMOVALS.add(woodTypeObj)
            }

            if (global.DEBUG_MODE) console.log(`    Constructed "${mod}:${woodType}"`)
        })
    })
    if (global.DEBUG_MODE) console.log('Finished constructing wood types!')
}
