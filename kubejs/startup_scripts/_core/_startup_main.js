// priority: -1

Platform.setModName('kubejs', 'Remix')
Platform.setModName('eidolon_repraised', 'Eidolon')
Platform.setModName('embers', 'Embers')
// Platform.setModName('incision', 'Incision')

function postInit() {
    // console.log($WoodTypeRegistry.getTypes())
    // console.log($EveryCompat.getCompatMods())
    // console.log($EveryCompat.getDependencies())
    // console.log($ModEntriesConfigs.isEntryEnabled("atmospheric:yucca", "woodworks:chest"))
    
    constructWoodTypes()

    // Adding items to global.REMOVALS and global swaps
    removals_Core()
    // removals_AlexsCaves()
    // removals_AlexsMobs()
    removals_Atmospheric()
    // removals_Autumnity()
    removals_BerryGood()
    // removals_Cataclysm()
    removals_CavernsAndChasms()
    // removals_CollectorsReap()
    // removals_CreateDeco()
    // removals_CreatePowerLoader()
    removals_Darkerdepths()
    // removals_DecorativeBlocks()
    removals_Embers()
    // removals_EndRem()
    removals_Environmental()
    removals_FarmersDelight()
    removals_Galosphere()
    // removals_Goety()
    // removals_ImmersiveWeathering()
    removals_Incubation()
    removals_Malum()
    // removals_MoreMinecarts()
    // removals_MowziesMobs()
    // removals_NaturesSpirit()
    removals_Neapolitan()
    removals_Oreganized()
    removals_Quark()
    // removals_Railways()
    // removals_Relics()
    // removals_ScGuns()
    // removals_SnowySpirit()
    // removals_UnusualPrehistory()
    removals_UpgradeAquatic()
    removals_Windswept()
    removals_Woodworks()
    // removals_EvenBetterNether()
    removals_BountifulFares()
    removals_Supplementaries()
    removals_Create()
    removals_NoMansLand()
    // removals_RusticDelight()
    removals_Naturalist()
    removals_AbnormalsDelight()
    removals_Spawn()
    // removals_TwilightForest()
    removals_AbundantAtmosphere()
    // removals_ArchitectsPalette()
    removals_AnotherFurniture()
    // removals_Twigs()
    
    removals_Core_Final()


    // Changing blockswap config with KubeJS!
    // processBlockswapConfig()
    // Virtual blockwsap (without using the blockswap mod)
    processSwappers()
}

// For reloading
if (global.INITIALIZED) postInit()

// postInit because Ingredient needs to wait for mods to load in order to hold anything other than vanilla items
StartupEvents.postInit(e => {
    postInit()
    // portals()
    global.INITIALIZED = true
})


ItemEvents.modification(e => {
    itemModification_Core(e)
    // itemModification_AlexsCaves(e)
    // itemModification_AlexsMobs(e)
    itemModification_Atmospheric(e)
    itemModification_BerryGood(e)
    // itemModification_CollectorsReap(e)
    itemModification_Incubation(e)
    itemModification_Neapolitan(e)
    // itemModification_Respiteful(e)
    // itemModification_UnusualEnd(e)
    itemModification_BountifulFares(e)
    // itemModification_Autumnity(e)
})
