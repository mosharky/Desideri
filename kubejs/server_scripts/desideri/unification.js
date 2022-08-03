//priority: 1250
/*
This script doesn't just unify, it also attempts to remove useless metals/ores, such as:
- Lead
- Nickel
- Uranium
- Silver

This also sort of creates a parity between Create and Immersive Engineering
*/

// ------------------------------ REPLACING ------------------------------
//{ condition: {}, toReplace: '', replaceWith: '' },
// Replace outputs
outputReplace.push(
    // { condition: {}, toReplace: 'create:copper_nugget', replaceWith: 'immersiveengineering:nugget_copper' },
    { condition: {}, toReplace: 'beyond_earth:cheese', replaceWith: 'thermal:cheese_wedge' },
)
// Replace inputs
inputReplace.push(
    // Beyond Earth 'plate' instead of 'compressed'
    { condition: {}, toReplace: '#beyond_earth:compresseds/steel', replaceWith: '#forge:plates/steel' },
    { condition: {}, toReplace: '#beyond_earth:compresseds/desh', replaceWith: '#forge:plates/desh' },
    // Plates
    // { condition: {}, toReplace: '#forge:plates/steel', replaceWith: 'immersiveengineering:plate_steel' },
    // { condition: {}, toReplace: '#forge:plates/iron', replaceWith: 'immersiveengineering:plate_iron' },
    // { condition: {}, toReplace: '#forge:plates/golden', replaceWith: 'immersiveengineering:plate_golden' },
    // { condition: {}, toReplace: '#forge:plates/copper', replaceWith: 'immersiveengineering:plate_copper' },
    { condition: {}, toReplace: '#forge:plates/constantan', replaceWith: '#forge:plates/copper' },
    { condition: { mod: 'beyond_earth' }, toReplace: '#forge:plates/iron', replaceWith: '#forge:plates/steel' },
    // Steel
    // { condition: {}, toReplace: '#forge:ingots/steel', replaceWith: 'immersiveengineering:ingot_steel' },
    // { condition: {}, toReplace: '#forge:nuggets/steel', replaceWith: 'immersiveengineering:nugget_steel' },
    // { condition: {}, toReplace: '#forge:storage_blocks/steel', replaceWith: 'immersiveengineering:storage_steel' },
    { condition: { mod: 'beyond_earth' }, toReplace: '#forge:nuggets/iron', replaceWith: '#forge:nuggets/steel' },
    // Iron
    // { condition: {}, toReplace: '#forge:rods/iron', replaceWith: 'immersiveengineering:stick_iron' },
    { condition: { id: 'beyond_earth:oxygen_tank' }, toReplace: '#forge:ingots/iron', replaceWith: '#forge:ingots/brass' },
    { condition: {}, toReplace: 'refinedstorage:quartz_enriched_iron', replaceWith: '#forge:ingots/bronze' },
    // Gears
    { condition: {}, toReplace: '#forge:gears/signalum', replaceWith: '#forge:gears/bronze'},
    { condition: {}, toReplace: '#forge:ingots/signalum', replaceWith: '#forge:ingots/bronze'},
    // Other
    { condition: {}, toReplace: 'minecraft:milk_bucket', replaceWith: '#forge:milk' },
)
// Replace inputs and outputs
// InputOutputReplace.push()

// ------------------------------ REMOVING ------------------------------

// Remove by recipe ID
idRemovals.push(
    'create:crafting/materials/copper_ingot',
    'create:crafting/materials/copper_nugget',
    'beyond_earth:desh_plate',
    'thermal:phytogro_8',
    'thermal:phytogro_2',
    'thermal:phytogro_4',
)

// Remove by recipe type
typeRemovals.push(
    // Removes Beyond Earth's compressor recipes
    'beyond_earth:compressing',
    // Removes Beyond Earth's coal generator recipes
    'beyond_earth:generating',
)

// Fully remove
// Regex no worky :(
global.fullRemovals.push(
    'beyond_earth:hammer',
    'beyond_earth:compressed_desh',
    'beyond_earth:compressed_steel',
    'beyond_earth:coal_generator',
    'beyond_earth:compressor',
    'create:copper_nugget',
    'createaddition:iron_wire',
    'createaddition:copper_wire',
    'malum:copper_nugget',
    'thermal:netherite_nugget',
    'galosphere:raw_silver',
    'thermal:charcoal_block',
)

regexFullRemovals.push(
    /thermal:.*silver(?!_dust|_gear|_plate|_coin).*/,
    /thermal:.*lead(?!_gear|_coin).*/,
    /thermal:.*copper(?!_gear|_coin).*/,
    /thermal:(.*signalum.*|.*apatite.*|.*sulfur.*|.*niter.*|.*_dust)/,
    /oreganized:.*electrum.*/,
    /beyond_earth:steel_(ingot|block)/,
    /beyond_earth:iron_(stick|plate)/,
    /thermal:steel_(nugget|ingot|dust|block|plate)/,
    /createaddition:(gold|brass)_rod/,
    /refinedstorage:quartz_enriched.*/,
    /galosphere:.*silver_(block|ingot|nugget|ore)/,
    /darkerdepths:(raw_silver|silver_ore|.*silver_(ingot|nugget|block))/,
)

addTagToItem.push(
    { tag: 'forge:storage_blocks/raw_lead', item: 'oreganized:raw_lead_block' },
    { tag: 'forge:storage_blocks', item: ['oreganized:raw_lead_block', 'oreganized:lead_block'] },
    { tag: 'forge:storage_blocks/lead', item: 'oreganized:lead_block' },
    { tag: 'forge:ores/silver', item: ['darkerdepths:aridrock_silver_ore', 'darkerdepths:limestone_silver_ore'] },
    { tag: 'forge:ores', item: ['darkerdepths:aridrock_silver_ore', 'darkerdepths:limestone_silver_ore'] },
)

// ------------------------------ RECIPES ------------------------------
onEvent('recipes', event => {
    // Shaped crafting
    const shapedUnificationRecipes = [
        {
            output: 'refinedstorage:machine_casing',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:ingots/bronze',
                B: '#minecraft:planks'
            }
        },
        {
            output: 'alloyed:steel_ingot',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: '#forge:nuggets/steel'
            }
        },
        {
            output: '9x beyond_earth:steel_nugget',
            pattern: ['A'],
            key: { A: '#forge:ingots/steel' }
        },
    ]
    shapedUnificationRecipes.forEach((recipe) => {
        recipe.id
            ? event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
            : event.shaped(recipe.output, recipe.pattern, recipe.key)
    })

    // unified smelting ore recipes for cleanliness
    multiSmelt('oreganized:silver_ingot', '#forge:ores/silver', 0.7)
    idRemovals.push(
        'oreganized:blast_deepslate_silver_ore',
        'oreganized:blast_silver_ore',
        'oreganized:smelt_deepslate_silver_ore',
        'oreganized:smelt_silver_ore',
    )

    event.recipes.createMixing('4x thermal:phytogro', ['farmersdelight:organic_compost', 'createaddition:biomass'])
})


// ------------------------------ FLUIDS ------------------------------
onEvent('tags.fluids', event => {
    // Biodiesel > Beyond Earth fuel/oil
    // event.add('beyond_earth:vehicle_fuel', 'immersiveengineering:biodiesel')
    event.remove('beyond_earth:vehicle_fuel', 'beyond_earth:fuel')
    event.remove('beyond_earth:oil', 'beyond_earth:oil')
    // event.remove('forge:plantoil', 'createaddition:seed_oil')
})

idRemovals.push(
    // 'createaddition:compacting/seed_oil'
)

typeRemovals.push(
    // Removes Beyond Earth's fuel refinery recipes
    'beyond_earth:fuelrefining',
)

global.fullRemovals.push(
    'beyond_earth:fuel_refinery',
    'beyond_earth:fuel_bucket',
    'beyond_earth:oil_bucket',
    // 'createaddition:seed_oil_bucket'
)