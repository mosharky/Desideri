// Shaped recipes
let ring = ['AAA', 'A A', 'AAA']
let filled_ring = ['AAA', 'ABA', 'AAA']
let stick = ['A', 'A']
let four = ['AA', 'AA']

const shaped = [
    // ESSENTIALS
    // Chest from any plank
    {
        output: 'minecraft:chest',
        pattern: ring,
        key: {
            A: '#minecraft:planks'
        },
        id: 'quark:building/crafting/chests/chest_revert'
    },
    // Bookshelf unification
    {
        output: 'minecraft:bookshelf',
        pattern: ['AAA', 'BBB', 'AAA'],
        key: {
            A: '#minecraft:planks',
            B: 'minecraft:book'
        },
        id: 'quark:building/crafting/oak_bookshelf'
    },
    // Stick from log
    {
        output: '16x minecraft:stick',
        pattern: stick,
        key: {
            A: '#minecraft:logs'
        },
        id: 'desideri:shaped/stick_from_logs'
    },
    // Classic ladder recipe
    {
        output: '3x minecraft:ladder',
        pattern: ['A A', 'AAA', 'A A'],
        key: {
            A: '#forge:rods/wooden'
        },
        id: 'desideri:shaped/ladders'
    },
    // Chest from logs
    {
        output: '4x minecraft:chest',
        pattern: ring,
        key: {
            A: '#minecraft:logs'
        },
        id: 'desideri:shaped/chest_from_logs'
    },


    // MISC RECIPES
    {
        output: 'beyond_earth:rusted_iron_plating_block',
        pattern: filled_ring,
        key: {
            A: 'beyond_earth:iron_plating_block',
            B: 'minecraft:water_bucket'
        },
        id: 'beyond_earth:rusted_iron_plating_block'
    },
    {
        output: '2x beyond_earth:rusted_iron_pillar_block',
        pattern: stick,
        key: {
            A: 'beyond_earth:rusted_iron_plating_block',
        },
        id: 'beyond_earth:rusted_iron_pillar_block'
    },
    {
        output: '4x beyond_earth:iron_mark_block',
        pattern: ['ABA', 'ACA'],
        key: {
            A: 'beyond_earth:iron_plating_block',
            B: '#forge:dyes/yellow',
            C: '#forge:dyes/black'
        },
        id: 'beyond_earth:iron_mark_block'
    },
    {
        output: 'beyond_earth:nasa_workbench',
        pattern: ['ABA', 'CDC', 'AEA'],
        key: {
            A: '#forge:plates/steel',
            B: 'minecraft:crafting_table',
            C: '#forge:ingots/brass',
            D: '#forge:ingots/steel',
            E: 'minecraft:redstone_block'
        },
        id: 'beyond_earth:nasa_workbench'
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

    // Hexerei Wood fixes
    /*
    uncomment when Hexerei is updated to 1.18.2
    {
        output: '3x hexerei:willow_wood',
        pattern: four,
        key: { A: 'hexerei:willow_log' },
        id: 'hexerei:willow_wood'
    },
    {
        output: '3x hexerei:stripped_willow_wood',
        pattern: four,
        key: { A: 'hexerei:stripped_willow_log' },
        id: 'hexerei:stripped_willow_wood'
    },
    {
        output: '3x hexerei:mahogany_wood',
        pattern: four,
        key: { A: 'hexerei:mahogany_log' },
        id: 'hexerei:mahogany_wood'
    },
    {
        output: '3x hexerei:stripped_mahogany_wood',
        pattern: four,
        key: { A: 'hexerei:stripped_mahogany_log' },
        id: 'hexerei:stripped_mahogany_wood'
    },
    */
    {
        output: '4x createaddition:spool',
        pattern: ['A', 'B', 'A'],
        key: {
            A: 'immersiveengineering:stick_treated',
            B: '#forge:nuggets/iron'
        },
        id: 'createaddition:crafting/spool'
    },
    // because for some reason it's removed by something?
    {
        output: '4x minecraft:stick',
        pattern: stick,
        key: {
            A: '#minecraft:planks'
        },
        id: 'minecraft:sticks'
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
]
onEvent('recipes', event => {
    shaped.forEach((recipe) => {
        recipe.id
            ? event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
            : event.shaped(recipe.output, recipe.pattern, recipe.key)
    })
})