onEvent('recipes', (event) => {
    event.recipes.createMilling(['3x minecraft:string', Item.of('minecraft:string').withChance(0.25)], '#minecraft:wool').id('create:milling/wool')

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