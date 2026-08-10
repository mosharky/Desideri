/*
from: https://modrinth.com/mod/attribute-tooltip-fix

If you are using KubeJS or another mod which let's you define attributes directly through the UUID string, use these:

Attack Damage: CB3F55D3-645C-4F38-A497-9C13A33DB5CF
Attack Speed: FA233E1C-4180-4865-B01B-BCCE9785ACA3
*/

StartupEvents.registry('item', e => {

})

/** @param {$ItemModificationKubeEvent} e */
function itemModification_Core(e) {
    e.modify('minecraft:suspicious_stew', item => item.maxStackSize = 16)
}
