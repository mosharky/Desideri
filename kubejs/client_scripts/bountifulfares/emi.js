/** @param {$RemoveEntriesKubeEvent} e  */
function hideItemCompletely_BountifulFares(e) {
    const hideIfNotLoaded = (modId) => {
        if (!Platform.isLoaded(modId)) e.remove(new RegExp(`^${modId}:.*`))
    }
    // because Bountiful Fares registers compat blocks under the other mods' namespace
    hideIfNotLoaded('natures_spirit')
    hideIfNotLoaded('arts_and_crafts')
    hideIfNotLoaded('dungeonsdelight')
    hideIfNotLoaded('delicate_dyes')
    hideIfNotLoaded('netherexp')
    hideIfNotLoaded('frontiers')
    hideIfNotLoaded('appledog')
}