/** @param {$ItemModificationKubeEvent} e */
function itemModification_BerryGood(e) {
    e.modify('berry_good:glowgurt', item => item.maxStackSize = 16)
}
