/** @param {$ItemModificationKubeEvent} e */
function itemModification_Incubation(e) {
    e.modify('incubation:scrambled_eggs', item => item.maxStackSize = 16)
}
