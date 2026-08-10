/** @param {$ItemModificationKubeEvent} e */
function itemModification_Neapolitan(e) {
    e.modify('neapolitan:adzuki_curry', item => item.maxStackSize = 16)
    e.modify('neapolitan:adzuki_stew', item => item.maxStackSize = 16)
    e.modify('neapolitan:vanilla_pudding', item => item.maxStackSize = 16)
    e.modify(/neapolitan:.*ice_cream/, item => item.maxStackSize = 16)
}
