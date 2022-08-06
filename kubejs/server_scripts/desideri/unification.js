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
    { condition: {}, toReplace: 'createaddition:iron_rod', replaceWith: 'beyond_earth:iron_stick' },
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
    //{ condition: {}, toReplace: '#forge:gears/signalum', replaceWith: '#forge:gears/bronze'},
    //{ condition: {}, toReplace: '#forge:ingots/signalum', replaceWith: '#forge:ingots/bronze'},
    // Other
    { condition: {}, toReplace: 'minecraft:milk_bucket', replaceWith: '#forge:milk' },
    { condition: {}, toReplace: 'thermal:invar_ingot', replaceWith: '#forge:ingots/steel' },
)
// Replace inputs and outputs
// InputOutputReplace.push()

// ------------------------------ REMOVING ------------------------------

// Remove by recipe ID
idRemovals.push(
    'beyond_earth:desh_plate',
    'thermal:phytogro_8',
    'thermal:phytogro_2',
    'thermal:phytogro_4',
    'malum:copper_ingot_from_nugget',
    'oreganized:electrum_ingot',
    'thermal:fire_charge/lumium_ingot_4',
    'thermal:fire_charge/enderium_ingot_2',
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
    'createaddition:iron_wire',
    'createaddition:copper_wire',
    'malum:copper_nugget',
    'thermal:netherite_nugget',
    'galosphere:raw_silver',
    'thermal:charcoal_block',
    'beyond_earth:iron_plate',
)

regexFullRemovals.push(
    /thermal:.*silver(?!_dust|_gear|_plate|_coin).*/,
    /thermal:.*lead(?!_gear|_coin|_dust).*/,
    //thermal:.*copper(?!_gear|_coin).*/,
    /thermal:.*steel(?!_gear|_dust).*/,
    /thermal:(.*apatite.*|.*sulfur.*|.*niter.*|.*cinnabar.*|.*electrum(?!_dust).*|.*diamond.*|.*emerald.*|.*lapis.*|.*netherite.*|.*invar.*|.*nickel.*)/,
    /thermal:.*_plate.*/,
    /oreganized:electrum_(?!block|ingot|nugget).*/,
    /beyond_earth:steel_(ingot|block)/,
    /createaddition:(?!copper).*_rod/,
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
    { tag: 'forge:raw_materials', item: ['oreganized:raw_silver', 'oreganized:raw_lead'] },
    { tag: 'forge:raw_materials/lead', item: 'oreganized:raw_lead' },
    { tag: 'forge:raw_materials/silver', item: 'oreganized:raw_silver' },
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

    event.custom({
        type:'createaddition:rolling',
        input: { tag: 'forge:ingots/iron' },
        result: {
            item: 'beyond_earth:iron_stick',
            count: 2
        }
    }).id('beyond_earth:iron_stick')

    event.recipes.createMixing('4x thermal:phytogro', ['farmersdelight:organic_compost', 'createaddition:biomass'])
    event.recipes.createMixing('2x thermal:enderium_dust', ['3x #forge:dusts/lead', '2x thermal:ender_pearl_dust', '#forge:dusts/diamond']).id('thermal:enderium_dust_2').superheated()
    event.recipes.createMixing('2x thermal:lumium_dust', ['3x #forge:dusts/silver', '2x #forge:dusts/glowstone', '9x #forge:nuggets/brass']).id('thermal:lumium_dust_4').superheated()
    event.recipes.createMixing('2x thermal:electrum_dust', ['#forge:dusts/gold', '#forge:dusts/silver']).id('thermal:electrum_dust_2')
    event.recipes.createMixing('3x alloyed:bronze_ingot', ['3x #forge:ingots/copper', '#forge:ingots/tin', '3x create:cinder_flour']).id('alloyed:mixing/bronze_ingot_x3')
    event.recipes.createMixing('alloyed:bronze_ingot', ['#forge:ingots/copper', '3x #forge:nuggets/tin', 'create:cinder_flour']).id('alloyed:mixing/bronze_ingot')

    // unified smelting ore recipes for cleanliness
    multiSmelt('oreganized:silver_ingot', '#forge:ores/silver', 0.7)
    idRemovals.push(
        'oreganized:blast_deepslate_silver_ore',
        'oreganized:blast_silver_ore',
        'oreganized:smelt_deepslate_silver_ore',
        'oreganized:smelt_silver_ore',
    )

    // crushing & milling ingots to dust
    const dustMultiCrushing = [
        {
            ingot: 'minecraft:ender_pearl',
            dust: 'thermal:ender_pearl_dust'
        },
        {
            ingot: 'minecraft:iron_ingot',
            dust: 'thermal:iron_dust'
        },
        {
            ingot: 'minecraft:gold_ingot',
            dust: 'thermal:gold_dust'
        },
        {
            ingot: 'minecraft:copper_ingot',
            dust: 'thermal:copper_dust'
        },
        {
            ingot: 'minecraft:quartz',
            dust: 'thermal:quartz_dust'
        },
        {
            ingot: 'thermal:tin_ingot',
            dust: 'thermal:tin_dust'
        },
        {
            ingot: 'oreganized:lead_ingot',
            dust: 'thermal:lead_dust',
            smeltingRecipe: true
        },
        {
            ingot: 'oreganized:silver_ingot',
            dust: 'thermal:silver_dust',
            smeltingRecipe: true
        },
        {
            ingot: 'alloyed:steel_ingot',
            dust: 'thermal:steel_dust'
        },
        {
            ingot: 'alloyed:bronze_ingot',
            dust: 'thermal:bronze_dust'
        },
        {
            ingot: 'oreganized:electrum_ingot',
            dust: 'thermal:electrum_dust'
        },
        {
            ingot: 'thermal:lumium_ingot',
            dust: 'thermal:lumium_dust'
        },
        {
            ingot: 'thermal:enderium_ingot',
            dust: 'thermal:enderium_dust'
        }
    ]

    dustMultiCrushing.forEach(recipe => {
        event.recipes.createCrushing(recipe.dust, recipe.ingot).processingTime(100)
        event.recipes.createMilling(recipe.dust, recipe.ingot).processingTime(100)
        if (recipe.smeltingRecipe) {
            multiSmelt(recipe.ingot, recipe.dust) // because for some reason they're missing this?
        }
    })

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