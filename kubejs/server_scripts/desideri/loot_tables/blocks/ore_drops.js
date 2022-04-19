function oneRawOre(modId, material, strata, irregular) {
    let oreBlock = [`${modId}:${material}_ore`, `${modId}:deepslate_${material}_ore`]
    let rawOre = `${modId}:raw_${material}`
    if (modId == 'immersiveengineering') {
        oreBlock = [`${modId}:ore_${material}`, `${modId}:deepslate_ore_${material}`]
    }
    if (strata != undefined) {
        let materialSplit = material.split(':')
        let materialModId = materialSplit[0]
        let iregMaterial = materialSplit[1]
        oreBlock = [`${modId}:${strata}_${iregMaterial}_ore`]
        rawOre = `${materialModId}:raw_${iregMaterial}`
    }
    if (irregular) {
        oreBlock = [modId]
        rawOre = material
    }
    return oreBlock.forEach(block => {
        removeLootTable(block, 'block')
        onEvent('lootjs', event => {
            event
                .addBlockLootModifier(block)
                .not((not) => {
                    not.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch'))
                })
                .addLoot(rawOre)
                .survivesExplosion()

            event
                .addBlockLootModifier(block)
                .matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch'))
                .addLoot(block)
        })
    })
}


// Iron
oneRawOre('minecraft', 'iron')
oneRawOre('beyond_earth', 'minecraft:iron', 'moon')
oneRawOre('beyond_earth', 'minecraft:iron', 'mars')
oneRawOre('beyond_earth', 'minecraft:iron', 'mercury')
oneRawOre('beyond_earth', 'minecraft:iron', 'glacio')
// Gold
oneRawOre('minecraft', 'gold')
oneRawOre('beyond_earth', 'minecraft:gold', 'venus')
// Copper
oneRawOre('minecraft', 'copper')
oneRawOre('beyond_earth', 'minecraft:copper', 'glacio')
// Modded
oneRawOre('immersiveengineering', 'silver')
oneRawOre('immersiveengineering', 'aluminum')
oneRawOre('create', 'zinc')
// Beyond Earth
oneRawOre('beyond_earth', 'beyond_earth:desh', 'moon')
oneRawOre('beyond_earth', 'beyond_earth:ostrum', 'mars')
oneRawOre('beyond_earth', 'beyond_earth:calorite', 'venus')
// Irregular
// uncomment when Create: Alloyed is re-added
// oneRawOre('malum:soulstone_ore', 'malum:soulstone_cluster', undefined, true)
// oneRawOre('malum:deepslate_soulstone_ore', 'malum:soulstone_cluster', undefined, true)

