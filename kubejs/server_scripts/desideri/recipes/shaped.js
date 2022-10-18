// Shaped recipes
let ring = ['AAA', 'A A', 'AAA']
let filled_ring = ['AAA', 'ABA', 'AAA']
let stick = ['A', 'A']
let four = ['AA', 'AA']

const shapedRecipes = [
    {
        output: '3x minecraft:ladder',
        pattern: ['A A', 'AAA', 'A A'],
        key: {
            A: '#forge:rods/wooden'
        },
        id: 'desideri:shaped/universal_ladder'
    },
    {
        output: 'minecraft:chest',
        pattern: ring,
        key: {
            A: '#minecraft:planks'
        },
        id: 'desideri:shaped/universal_chest'
    },
    {
        output: '4x minecraft:chest',
        pattern: ring,
        key: {
            A: '#minecraft:logs'
        },
        id: 'desideri:shaped/universal_chest_from_log'
    },
    {
        output: '16x minecraft:stick',
        pattern: stick,
        key: {
            A: '#minecraft:logs'
        },
        id: 'desideri:shaped/sticks_from_logs'
    },
    {
        output: 'backpacked:backpack',
        pattern: ['ABA', 'CDC', 'EBE'],
        key: {
            A: 'minecraft:rabbit_hide',
            B: 'minecraft:shulker_shell',
            C: '#forge:string',
            D: '#forge:ingots/iron',
            E: 'minecraft:leather'
        },
        id: 'backpacked:backpack'
    },
    {
        output: 'farmersdelight:chocolate_pie',
        pattern: ['   ', 'AAA', 'BCB'],
        key: {
            A: 'create:bar_of_chocolate',
            B: 'minecraft:sugar',
            C: 'farmersdelight:pie_crust'
        },
        id: 'farmersdelight:chocolate_pie'
    },
    {
        output: 'biomesoplenty:rose_quartz_block',
        pattern: ['AAA', 'AAA', 'AAA'],
        key: {
            A: 'biomesoplenty:rose_quartz_shard'
        },
        id: 'biomesoplenty:rose_quartz_block'
    },
    {
        output: 'create:rose_quartz',
        pattern: four,
        key: {
            A: 'biomesoplenty:rose_quartz_shard'
        },
        id: 'create:crafting/materials/rose_quartz'
    },
    {
        output: 'thermal:stuffed_pumpkin',
        pattern: ['ACA', 'DED', ' B '],
        key: {
            A: '#forge:cooked_beef',
            B: 'minecraft:carved_pumpkin',
            C: 'thermal:cheese_wedge',
            D: 'farmersdelight:tomato',
            E: '#forge:bread'
        }
    },
    {
        output: 'thermal:potion_cake',
        pattern: ['ABA', 'CDC', 'EEE'],
        key: {
            A: '#forge:milk',
            B: 'minecraft:potion',
            C: 'minecraft:sugar',
            D: '#forge:eggs',
            E: 'minecraft:wheat'
        },
        id: 'thermal:potion_cake'
    },
    {
        output: 'thermal:phytosoil',
        pattern: ['ABA', 'BCB', 'ABA'],
        key: {
            A: 'minecraft:charcoal',
            B: 'thermal:phytogro',
            C: 'farmersdelight:rich_soil',
        },
        id: 'thermal:phytosoil'
    },
    {
        output: 'create:diving_boots',
        pattern: ['A A', 'B B', 'C C'],
        key: {
            A: '#forge:ingots/copper',
            B: 'thermal:cured_rubber',
            C: 'alloyed:steel_ingot'
        },
        id: 'create:crafting/appliances/diving_boots'
    },
    {
        output: 'create:diving_helmet',
        pattern: [' A ', 'ABA', 'ACA'],
        key: {
            A: '#forge:ingots/copper',
            B: 'thermal:cured_rubber',
            C: 'minecraft:tinted_glass'
        },
        id: 'create:crafting/appliances/diving_helmet'
    },
    {
        output: 'create:super_glue',
        pattern: ['AB', 'CD'],
        key: {
            A: 'thermal:rosin',
            B: '#forge:plates/iron',
            C: '#forge:nuggets/iron',
            D: '#forge:slimeballs'
        },
        id: 'create:crafting/kinetics/super_glue'
    },
    {
        output: 'enigmaticlegacy:end_anchor',
        pattern: [' A ', 'BCB', 'DED'],
        key: {
            A: 'alexsmobs:void_worm_eye',
            B: 'enigmaticlegacy:astral_dust',
            C: 'minecraft:respawn_anchor',
            D: 'minecraft:end_stone',
            E: 'minecraft:obsidian'
        },
        id: 'desideri:shaped/end_anchor'
    },
    {
        output: 'thermal:satchel',
        pattern: ['ACA', 'BDB', 'ABA'],
        key: {
            A: '#forge:leather',
            B: '#minecraft:wool',
            C: '#forge:ingots/tin',
            D: 'supplementaries:sack'
        },
        id: 'thermal:tools/satchel'
    },
]
onEvent('recipes', event => {
    shapedRecipes.forEach(recipe => {
        recipe.id
            ? event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
            : event.shaped(recipe.output, recipe.pattern, recipe.key)
    })

    // woodTyperecipes
    constructedWoodTypes.forEach(woodType => {
        if (woodType.chest != undefined) {
            event.shaped(`4x ${woodType.chest}`, ring, {A: `#${woodType.modId}:${woodType.logType}${woodType.logSuffix}s`})
                 .id(`desideri:shaped/${woodType.logType}_chest_from_log`)
        }
    })
})

