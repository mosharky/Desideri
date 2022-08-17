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
    { condition: {}, toReplace: '#forge:plates/constantan', replaceWith: '#forge:plates/copper' },
    { condition: { mod: 'beyond_earth' }, toReplace: '#forge:plates/iron', replaceWith: '#forge:plates/steel' },
    // Steel
    { condition: { mod: 'beyond_earth' }, toReplace: '#forge:nuggets/iron', replaceWith: '#forge:nuggets/steel' },
    // Iron
    { condition: { id: 'beyond_earth:oxygen_tank' }, toReplace: '#forge:ingots/iron', replaceWith: '#forge:ingots/brass' },
    //{ condition: {}, toReplace: 'refinedstorage:quartz_enriched_iron', replaceWith: '#forge:ingots/bronze' },
    // Other
    { condition: {}, toReplace: 'minecraft:milk_bucket', replaceWith: '#forge:milk' },
    { condition: {}, toReplace: '#forge:ingots/invar', replaceWith: '#forge:ingots/steel' },
    { condition: {}, toReplace: '#forge:gears/constantan', replaceWith: '#forge:gears/bronze' },
    //{ condition: {}, toReplace: '#thermal:glass/hardened', replaceWith: 'minecraft:tinted_glass' },
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
    'thermal:bronze_dust_4',
    'thermal:gunpowder_4',
    'thermal:cyan_dye_from_apatite',
    'thermal:fire_charge/signalum_ingot_4'
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
    'malum:copper_nugget',
    'galosphere:raw_silver',
    'thermal:charcoal_block',
    'beyond_earth:iron_plate',
)

regexFullRemovals.push(
    /thermal:.*silver(?!_dust|_gear|_plate|_coin).*/,
    /thermal:.*lead(?!_gear|_coin|_dust).*/,
    /thermal:.*bronze(?!_gear|_coin|_dust).*/,
    /thermal:.*steel(?!_gear|_dust|_coin).*/,
    /thermal:(.*apatite.*|.*sulfur.*|.*niter.*|.*cinnabar.*|.*electrum(?!_dust).*|.*diamond.*|.*emerald.*|.*lapis.*|.*netherite.*|.*invar.*|.*nickel.*|.*constantan.*)/,
    /thermal:(.*plate.*|.*glass.*|earth_charge)/,
    /oreganized:electrum_(?!block|ingot|nugget).*/,
    /beyond_earth:steel_(ingot|block)/,
    /createaddition:(?!copper).*_rod/,
    /refinedstorage:quartz_enriched.*/,
    /galosphere:.*silver_(block|ingot|nugget|ore)/,
    /darkerdepths:(raw_silver|silver_ore|.*silver_(ingot|nugget|block))/,
)

addTagToItem.push( // TODO: add brilliant stuff to this pls
    { tag: 'forge:storage_blocks', item: ['oreganized:raw_lead_block', 'oreganized:lead_block'] },
    { tag: 'forge:storage_blocks/raw_lead', item: 'oreganized:raw_lead_block' },
    { tag: 'forge:storage_blocks/lead', item: 'oreganized:lead_block' },
    { tag: 'forge:ores', item: ['darkerdepths:aridrock_silver_ore', 'darkerdepths:limestone_silver_ore'] },
    { tag: 'forge:ores/silver', item: ['darkerdepths:aridrock_silver_ore', 'darkerdepths:limestone_silver_ore'] },
    { tag: 'forge:raw_materials/lead', item: 'oreganized:raw_lead' },
    { tag: 'forge:raw_materials/silver', item: 'oreganized:raw_silver' },
    { tag: 'forge:raw_materials/soulstone', item: 'malum:raw_soulstone' },
    { tag: 'forge:raw_materials/brilliance', item: 'malum:cluster_of_brilliance' },
    {
        tag: 'forge:raw_materials',
        item: [
            'oreganized:raw_silver',
            'oreganized:raw_lead',
            'malum:raw_soulstone',
            'malum:cluster_of_brilliance'
        ]
    },
)

// ------------------------------ RECIPES ------------------------------
onEvent('recipes', event => {
    [ // shaped crafting
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
    ].forEach((recipe) => {
        recipe.id
            ? event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
            : event.shaped(recipe.output, recipe.pattern, recipe.key)
    })

    event.custom({
        type: 'createaddition:rolling',
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
    event.recipes.createMixing('3x thermal:bronze_dust', ['3x #forge:dusts/copper', '#forge:dusts/tin', '3x create:cinder_flour']).id('alloyed:mixing/bronze_ingot_x3').heated()
    event.recipes.createMixing('thermal:bronze_dust', ['#forge:dusts/copper', '3x #forge:nuggets/tin', 'create:cinder_flour']).id('alloyed:mixing/bronze_ingot').heated()
    event.recipes.createMixing('thermal:steel_dust', ['2x #forge:dusts/iron', 'minecraft:charcoal']).id('alloyed:mixing/steel_ingot').heated()

    constructedOreData.forEach(oreData => {
        if (oreData?.smelted != undefined) {
            let smelted = oreData.smelted
            let xp = 0.5
            if (oreData?.xp != undefined) {
                xp = oreData?.xp
            }

            oreData.oreBlocks.forEach(entry => {
                event.remove({ input: entry.oreBlock, type: 'minecraft:smelting' })
                event.remove({ input: entry.oreBlock, type: 'minecraft:blasting' })
            })
            multiSmelt(smelted, oreData.oreTag, xp)

            if (oreData.crushedOre.count == 1) { // TODO: check if gem by checking Gem list instead of checking the count
                // in case it already exists:
                event.remove({ input: oreData.crushedOre.item, type: 'minecraft:smelting' })
                event.remove({ input: oreData.crushedOre.item, type: 'minecraft:blasting' })
                multiSmelt(smelted, oreData.crushedOre.item, xp / 2) // TODO: see if this division works lol
            }

            if (oreData.dust != undefined) {
                // in case it already exists:
                event.remove({ input: oreData.dust, type: 'minecraft:smelting' })
                event.remove({ input: oreData.dust, type: 'minecraft:blasting' })
                multiSmelt(smelted, oreData.dust)
            }
        }
    })

    const ingotToDust = [ // crushing & milling ingots to dust
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
            dust: 'thermal:steel_dust',
            smeltingRecipe: true
        },
        {
            ingot: 'alloyed:bronze_ingot',
            dust: 'thermal:bronze_dust',
            smeltingRecipe: true
        },
        {
            ingot: 'oreganized:electrum_ingot',
            dust: 'thermal:electrum_dust',
            smeltingRecipe: true
        },
        {
            ingot: 'thermal:lumium_ingot',
            dust: 'thermal:lumium_dust'
        },
        {
            ingot: 'thermal:enderium_ingot',
            dust: 'thermal:enderium_dust'
        }
    ].forEach(recipe => {
        event.recipes.createCrushing(recipe.dust, recipe.ingot).processingTime(100)
        event.recipes.createMilling(recipe.dust, recipe.ingot).processingTime(100)
        if (recipe.smeltingRecipe) multiSmelt(recipe.ingot, recipe.dust)
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