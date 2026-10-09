// priority: -1

// this only works in server scripts and not client scripts apparently?
// https://github.com/kube-mods/kubejs/issues/1135#issuecomment-4683058051
RecipeViewerEvents.removeCategories(e => {
    e.remove('woodworks:sawmill')
    e.remove('create:milling')
    e.remove('create:fan_smoking')
    e.remove('create:fan_blasting')
    e.remove('create:fan_haunting')
})

ServerEvents.tags('item', e => {
    itemTags_Core(e)
    itemTags_Neapolitan(e)
    itemTags_Naturalist(e)
    itemTags_FieldGuide(e)
    itemTags_ClutterNoMore(e)
    // itemTags_Aether(e)
})

ServerEvents.tags('block', e => {
    blockTags_Core(e)
    blockTags_SnowRealMagic(e)
    blockTags_BountifulFares(e)
    blockTags_FieldGuide(e)
    blockTags_Create(e)
})

ServerEvents.tags('fluid', e => {
    fluidTags_Create(e)
})

ServerEvents.tags('entity_type', e => {
    entityTags_Core(e)
    entityTags_Atmospheric(e)
    entityTags_Environmental(e)
    entityTags_Galosphere(e)
    // entityTags_Supplementaries(e)
    // entityTags_FtbChunks(e)
    // entityTags_NumismaticOverhaul(e)
    entityTags_FieldGuide(e)
})

ServerEvents.tags('worldgen/biome', e => {
    biomeTags_Atmospheric(e)
    // biomeTags_Autumnity(e)
    biomeTags_CavernsAndChasms(e)
    biomeTags_Environmental(e)
    biomeTags_Galosphere(e)
    biomeTags_Neapolitan(e)
    biomeTags_UpgradeAquatic(e)
    biomeTags_Windswept(e)
    biomeTags_BountifulFares(e)
    biomeTags_Oreganized(e)
    biomeTags_Malum(e)
    biomeTags_Incision(e)
    biomeTags_Spawn(e)

    // these changes need to load way later
    biomeTags_Core(e)
    biomeTags_NoMansLand(e)
})

ServerEvents.tags('worldgen/structure', e => {
    structureTags_Core(e)
})


ServerEvents.recipes(e => {
    recipes_Core(e)
    recipes_Atmospheric(e)
    recipes_BrewinAndChewin(e)
    recipes_CavernsAndChasms(e)
    // recipes_CreateDeco(e)
    recipes_FarmersDelight(e)
    recipes_Neapolitan(e)
    recipes_Quark(e)
    recipes_SootyChimneys(e)
    recipes_Supplementaries(e)
    recipes_Woodworks(e)
    recipes_BountifulFares(e)
    // recipes_NaturesSpirit(e)
    recipes_Create(e)
    recipes_NoMansLand(e)
    // recipes_Autumnity(e)
    recipes_Embers(e)
    recipes_Naturalist(e)
    // recipes_Everycomp(e)
    // recipes_Aether(e)
    recipes_AbundantAtmosphere(e)
    recipes_MinersDelight(e)
    recipes_AbnormalsDelight(e)
    recipes_Spawn(e)
    recipes_Galosphere(e)
    recipes_Windswept(e)

    // Fully removing any recipe tied to items in REMOVALS
    global.REMOVALS.set.forEach(removal => {
        e.remove({ input: removal })
        e.remove({ output: removal })
    })
})


ServerEvents.loaded(e => {
    // Default game rules
    if (e.server.persistentData.gameRules) return
    e.server.gameRules.set('playersSleepingPercentage', 1)
    e.server.gameRules.set('spawnRadius', 0)
    e.server.gameRules.set('disableElytraMovementCheck', true)
    if (global.DEBUG_MODE) {
        e.server.runCommandSilent('time set noon')
        e.server.gameRules.set('doDaylightCycle', false)
        e.server.gameRules.set('doWeatherCycle', false)
    }
    e.server.persistentData.gameRules = true
})

ServerEvents.generateData('after_mods', e => {
    // numismaticTrades_Core(e)
    // moonlightTrades_Supplementaries(e)
    // moonlightTrades_Sawmill(e)

    worldgen_Core(e)
    worldgen_Atmospheric(e)
    // worldgen_Autumnity(e)
    worldgen_Environmental(e)
    worldgen_Neapolitan(e)
    worldgen_CavernsAndChasms(e)
    worldgen_Galosphere(e)
    // worldgen_MyNethersDelight(e)
    // worldgen_NaturesSpirit(e)
    worldgen_Oreganized(e)
    worldgen_SnowySpirit(e)
    worldgen_FarmersDelight(e)
    worldgen_BountifulFares(e)
    worldgen_NoMansLand(e)
    // worldgen_ArtsAndCrafts(e)
    worldgen_Embers(e)
    worldgen_Malum(e)
    worldgen_Windswept(e)
    worldgen_Naturalist(e)
    worldgen_UpgradeAquatic(e)

    // this has to be last
    worldgen_Biolith(e)

    structures_Core(e)

    data_ClutterNoMore(e)
})

LootJS.lootTables(e => {
    lootTables_Core(e)
    lootTables_SootyChimneys(e)
    lootTables_Naturalist(e)
    lootTables_Spawn(e)
    lootTables_NoMansLand(e)

    const all = e.modifyLootTables(/.*/)
    lootRemovals_Core(all)
    lootRemovals_Environmental(all)
    lootRemovals_NoMansLand(all)

    const noBlocks = e.modifyLootTables(/(?!.*:blocks\/).*/)
    lootRemovals_Core_NoBlocks(noBlocks)
})

LootJS.modifiers(e => {
    lootModifiers_Galosphere(e)
})


MoreJS.villagerTrades(e => {
    // villagerTrades_NumismaticOverhaul(e)
})
