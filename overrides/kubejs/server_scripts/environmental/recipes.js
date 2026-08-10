/** @param {$RecipesKubeEvent} e */
function environmentalRecipes(e) {
    // For Cattail thatch
    e.replaceInput({}, 'environmental:cattail', 'nomansland:cattail')
    e.replaceInput({}, 'environmental:duckweed', 'nomansland:duckweed')

    e.shaped('environmental:duck_egg_crate', ['AAA', 'ABA', 'AAA'], {A: 'naturalist:duck_egg'})
    e.shapeless('9x environmental:duck_egg', ['environmental:duck_egg_crate'])
}
