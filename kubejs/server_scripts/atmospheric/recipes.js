/** @param {$RecipesKubeEvent} e */
function recipes_Atmospheric(e) {
    // e.shapeless('2x atmospheric:dolerite', ['nomansland:siltstone', 'minecraft:cobblestone']).id('atmospheric:dolerite')

    e.replaceInput({}, 'atmospheric:orange', 'bountifulfares:orange')
    e.replaceInput({}, 'atmospheric:blood_orange', 'bountifulfares:orange')

    e.shaped('atmospheric:passion_fruit_crate', ['AAA', 'AAA', 'AAA'], { A: 'bountifulfares:passion_fruit' })
    e.shapeless('9x bountifulfares:passion_fruit', ['atmospheric:passion_fruit_crate'])

    e.shaped('atmospheric:shimmering_passion_fruit', ['AAA', 'ABA', 'AAA'], { A: 'minecraft:gold_nugget', B: 'bountifulfares:passion_fruit' })
}
