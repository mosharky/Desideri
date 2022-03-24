/*
This script makes ores only drop one Raw Ore regardless of your fortune level
by overwriting the loot-tables.

These functions return a new overwriting loot-table for the given Ore which gives one Raw Ore
and the ore block itself if Silk Touch is on the tool.

1. The oneRawOre() function takes the modId and the material. It returns a new loot-table
for the Ore Block and its Deepslate variant. Do not use this if the ore doesn't have a Deepslate
variant.

ex: oneRawOre(minecraft, iron)
this makes the Iron Ore and Deepslate Iron Ore blocks only drop a single Raw Ore, even if the
player has fortune

2. The oneRawOreStrata() function takes the modId, strata, and material. It returns a new
loot-table for the Ore Block. This is for ores that have a prefix, like
'beyond_earth:mars_iron_ore', where it has the "mars_" prefix

ex: oneRawOreStrata(beyond_earth, mars, iron)
This replaces the loot-table for the 'beyond_earth:mars_iron_ore' block.

3. The oneRawOreIrregular() takes the item id of the ore block and the raw ore. It returns
a new loot-table for the Ore Block. Use this when the Ore or its raw variant don't abide
by standard ore-naming conventions.

ex: oneRawOreIrregular('malum:soulstone_ore', 'malum:soulstone_cluster')
This replaces the loot-table for the 'malum:soulstone_ore' block.
*/

onEvent('block.loot_tables', event => {
    function oneRawOre(modId, material) {
        let oreBlock = [`${modId}:${material}_ore`, `${modId}:deepslate_${material}_ore`]
        let rawOre = `${modId}:raw_${material}`
        if (modId == 'immersiveengineering') {
            oreBlock = [`${modId}:ore_${material}`, `${modId}:ore_${material}`]
        }
        return oreBlock.forEach(block => {
            event.addBlock(block, table => {
                table.addPool(pool => {
                    pool
                        .addItem(rawOre)
                        .addCondition({
                            condition: 'minecraft:inverted',
                            term: {
                                condition: 'minecraft:match_tool',
                                predicate: {
                                    enchantments: [
                                        {
                                            enchantment: 'minecraft:silk_touch',
                                            levels: { min: 1 }
                                        }
                                    ]
                                }
                            }
                        })
                    pool
                        .addItem(block)
                        .addCondition({
                            condition: 'minecraft:match_tool',
                            predicate: {
                                enchantments: [
                                    {
                                        enchantment: 'minecraft:silk_touch',
                                        levels: { min: 1 }
                                    }
                                ]
                            }
                        })
                })
            })
        })
    }

    function oneRawOreStrata(modId, strata, material) {
        let oreBlock = `${modId}:${strata}_${material}_ore`
        let rawOre = `${modId}:raw_${material}`
        return event.addBlock(oreBlock, table => {
            table.addPool(pool => {
                pool
                    .addItem(rawOre)
                    .addCondition({
                        condition: 'minecraft:inverted',
                        term: {
                            condition: 'minecraft:match_tool',
                            predicate: {
                                enchantments: [
                                    {
                                        enchantment: 'minecraft:silk_touch',
                                        levels: { min: 1 }
                                    }
                                ]
                            }
                        }
                    })
                pool
                    .addItem(oreBlock)
                    .addCondition({
                        condition: 'minecraft:match_tool',
                        predicate: {
                            enchantments: [
                                {
                                    enchantment: 'minecraft:silk_touch',
                                    levels: { min: 1 }
                                }
                            ]
                        }
                    })
            })
        })
    }

    function oneRawOreIrregular(oreBlock, rawOre) {
        return event.addBlock(oreBlock, table => {
            table.addPool(pool => {
                pool
                    .addItem(rawOre)
                    .addCondition({
                        condition: 'minecraft:inverted',
                        term: {
                            condition: 'minecraft:match_tool',
                            predicate: {
                                enchantments: [
                                    {
                                        enchantment: 'minecraft:silk_touch',
                                        levels: { min: 1 }
                                    }
                                ]
                            }
                        }
                    })
                pool
                    .addItem(oreBlock)
                    .addCondition({
                        condition: 'minecraft:match_tool',
                        predicate: {
                            enchantments: [
                                {
                                    enchantment: 'minecraft:silk_touch',
                                    levels: { min: 1 }
                                }
                            ]
                        }
                    })
            })
        })
    }


    oneRawOre('minecraft', 'iron')
    oneRawOre('minecraft', 'copper')
    oneRawOre('minecraft', 'gold')
    oneRawOre('immersiveengineering', 'silver')
    oneRawOre('immersiveengineering', 'aluminum')
    oneRawOre('create', 'zinc')
    
    oneRawOreStrata('beyond_earth', 'moon', 'desh')
    oneRawOreStrata('beyond_earth', 'moon', 'iron')
    oneRawOreStrata('beyond_earth', 'mars', 'iron')
    oneRawOreStrata('beyond_earth', 'mars', 'ostrum')
    oneRawOreStrata('beyond_earth', 'mercury', 'iron')
    oneRawOreStrata('beyond_earth', 'venus', 'gold')
    oneRawOreStrata('beyond_earth', 'venus', 'calorite')
    oneRawOreStrata('beyond_earth', 'glacio', 'copper')
    oneRawOreStrata('beyond_earth', 'glacio', 'iron')

    oneRawOreIrregular('malum:soulstone_ore', 'malum:soulstone_cluster')
    oneRawOreIrregular('malum:deepslate_soulstone_ore', 'malum:soulstone_cluster')
})
