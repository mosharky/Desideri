/** @param {$RecipesKubeEvent} e */
function recipes_Create(e) {
    e.remove({ type: 'create:fan_smoking' })
    e.remove({ type: 'create:fan_blasting' })
    e.remove({ type: 'create:fan_haunting' })

    e.replaceInput({}, 'create:dough', 'farmersdelight:wheat_dough')
    e.replaceInput({}, 'create:wheat_flour', 'bountifulfares:flour')
    e.replaceOutput({}, 'create:dough', 'farmersdelight:wheat_dough')
    e.replaceOutput({}, 'create:wheat_flour', 'bountifulfares:flour')

    e.remove({ id: 'create:mixing/chocolate' })
    e.remove({ id: 'create:crafting/appliances/slime_ball' })
    e.remove({ id: 'create:smoking/bread' })
    e.remove({ id: 'create:smelting/bread' })
    e.remove({ id: 'create:campfire_cooking/bread' })
    e.remove({ id: 'minecraft:bread' })
}
