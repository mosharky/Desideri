/** @param {$ItemModificationKubeEvent} e */
function itemModification_Atmospheric(e) {
    e.modify('atmospheric:passion_fruit_sorbet', item => item.maxStackSize = 16)
    e.modify('atmospheric:orange_sorbet', item => item.maxStackSize = 16)
}
