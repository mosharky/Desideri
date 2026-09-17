// priority: -1
ItemEvents.modifyTooltips(e => {
    e.add('#kubejs:disabled', Text.red('DISABLED'))
})

RecipeViewerEvents.removeEntries('item', e => {
    hideItem_Core(e)
    hideItem_CavernsAndChasms(e)
})

RecipeViewerEvents.removeEntriesCompletely('item', e => {
    hideItemCompletely_Core(e)
    hideItemCompletely_BountifulFares(e)
}) 

RecipeViewerEvents.removeEntriesCompletely('fluid', e => {
    hideFluidCompletely_Core(e)
})

RecipeViewerEvents.addInformation('item', e => {
})

ClientEvents.generateAssets('after_mods', e => {
    clientData_EMI(e)
    clientData_REMI(e)
    clientData_Quark(e)
    clientData_Polytone(e)
})
