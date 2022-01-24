// Shaped recipes
onEvent('recipes', event => {

    const id_prefix = 'mo:base/'
    let ring = ['AAA', 'A A', 'AAA']
    let filled_ring = ['AAA', 'ABA', 'AAA']
    let stick = ['A', 'A']

    const recipes = [
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
            id: `${id_prefix}sticks_from_logs`
        },
        // Classic ladder recipe
        {
            output: '3x minecraft:ladder',
            pattern: ['A A', 'AAA', 'A A'],
            key: {
                A: '#forge:rods/wooden'
            },
            id: `${id_prefix}ladders`
        },
        // Chest from logs
        {
            output: '4x minecraft:chest',
            pattern: ring,
            key: {
                A: '#minecraft:logs'
            },
            id: `${id_prefix}chest_from_logs`
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
    ]
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
})