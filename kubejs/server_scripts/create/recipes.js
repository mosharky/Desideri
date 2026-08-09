/** @param {$RecipesKubeEvent} e */
function recipes_Create(e) {
    e.replaceInput({}, 'create:dough', 'farmersdelight:wheat_dough')
    e.replaceInput({}, 'create:wheat_flour', 'bountifulfares:flour')
    e.replaceOutput({}, 'create:dough', 'farmersdelight:wheat_dough')
    e.replaceOutput({}, 'create:wheat_flour', 'bountifulfares:flour')

    e.remove({ id: 'create:mixing/chocolate' })
    e.remove({ id: 'create:crafting/appliances/slime_ball' })
}
