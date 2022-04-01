onEvent('recipes', (event) => {
    event.recipes.createMilling(['3x minecraft:string', Item.of('minecraft:string').withChance(0.25)], '#minecraft:wool').id('create:milling/wool')
    event.recipes.createMilling('immersiveengineering:dust_electrum', '#forge:ingots/electrum')
    event.recipes.createMilling('immersiveengineering:dust_gold', '#forge:ingots/gold')
    event.recipes.createMilling('immersiveengineering:dust_iron', '#forge:ingots/iron')
    event.recipes.createMilling('immersiveengineering:dust_steel', '#forge:ingots/steel')
    event.recipes.createMilling('immersiveengineering:dust_silver', '#forge:ingots/silver')
    event.recipes.createMilling('immersiveengineering:dust_aluminum', '#forge:ingots/aluminum')
    event.recipes.createMilling('immersiveengineering:dust_copper', '#forge:ingots/copper')
    event.recipes.createMilling('immersiveengineering:dust_coke', '#forge:coal_coke')
    event.recipes.createMilling('9x immersiveengineering:dust_coke', '#forge:storage_blocks/coal_coke')

    const rawOresToMill = [
        { modId: 'immersiveengineering', ore: 'aluminum' },
        { modId: 'immersiveengineering', ore: 'silver' },
        { modId: 'create', ore: 'zinc' },
        { modId: 'minecraft', ore: 'iron' },
        { modId: 'minecraft', ore: 'gold' },
        { modId: 'minecraft', ore: 'copper' },
        { modId: 'beyond_earth', ore: 'desh' },
        { modId: 'beyond_earth', ore: 'ostrum' },
        { modId: 'beyond_earth', ore: 'calorite' },
    ]
    rawOresToMill.forEach(rawOre => {
        if (global.createSupportedOres.includes(rawOre.ore)) {
            event.recipes.createMilling(`create:crushed_${rawOre.ore}_ore`, `${rawOre.modId}:raw_${rawOre.ore}`)
        } else {
            event.recipes.createMilling(`kubejs:crushed_${rawOre.ore}_ore`, `${rawOre.modId}:raw_${rawOre.ore}`)
        }
    })
})