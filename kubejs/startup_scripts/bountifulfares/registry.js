/** @param {$ItemModificationKubeEvent} e */
function itemModification_BountifulFares(e) {
    e.modify('bountifulfares:passion_fruit', item => {
        item.modifyFood(food => {
            food.effect('atmospheric:spitting', 7*20, 0, 1)
        })
    })
}
