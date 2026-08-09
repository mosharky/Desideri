/** @param {$RecipesKubeEvent} e  */
function recipes_NaturesSpirit(e) {
    e.replaceInput({}, 'natures_spirit:cheese_bucket', 'brewinandchewin:flaxen_cheese_wedge')
    e.replaceInput({}, 'natures_spirit:coconut_half', 'bountifulfares:coconut_half')
    e.remove({id: 'natures_spirit:charcoal_from_coconuts'})
}
