/** @param {$RemoveEntriesKubeEvent} e  */
function hideItemCompletely_BountifulFares(e) {
    const hideIf = (modId) => {
        if (!Platform.isLoaded(modId)) e.remove(new RegExp(`^${modId}:.*`))
    }
    // because Bountiful Fares registers compat blocks under the other mods' namespace
    hideIf('natures_spirit')
    hideIf('arts_and_crafts')
    hideIf('dungeonsdelight')
    hideIf('delicate_dyes')
    hideIf('netherexp')
    hideIf('frontiers')
    hideIf('appledog')
}