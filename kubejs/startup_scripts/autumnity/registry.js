/** @param {$ItemModificationKubeEvent} e */
function itemModification_Autumnity(e) {
    e.modify('autumnity:foul_soup', item => item.maxStackSize = 16)
}
