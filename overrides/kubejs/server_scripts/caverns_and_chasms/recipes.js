/** @param {$RecipesKubeEvent} e  */
function recipes_CavernsAndChasms(e) {
    // e.remove({id: 'caverns_and_chasms:bundle'})

    e.replaceInput({ id: 'caverns_and_chasms:iron_bricks' }, 'minecraft:iron_ingot', 'blockbox:iron_plate')
    e.replaceInput({ id: 'caverns_and_chasms:gold_bricks' }, 'minecraft:gold_ingot', 'blockbox:chiseled_gold')
}
