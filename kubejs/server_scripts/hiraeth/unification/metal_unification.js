// priority: 1250
/*
This script doesn't just unify, it also attempts to remove useless metals/ores, such as:
- Lead
- Uranium
- Silver

This also sort of creates a parity between Create and Immersive Engineering
*/

// ------------------------------ REPLACING ------------------------------
//{ condition: {}, toReplace: '', replaceWith: '' },
// Replace outputs
outputReplace.push(
    { condition: {}, toReplace: 'create:copper_nugget', replaceWith: 'immersiveengineering:nugget_copper' },
)
// Replace inputs
inputReplace.push(
    // Beyond Earth "plate" instead of "compressed"
    { condition: {}, toReplace: '#beyond_earth:compresseds/steel', replaceWith: '#forge:plates/steel' },
    { condition: {}, toReplace: '#beyond_earth:compresseds/desh', replaceWith: '#forge:plates/desh' },
    // Plates
    { condition: {}, toReplace: '#forge:plates/steel', replaceWith: 'immersiveengineering:plate_steel' },
    { condition: {}, toReplace: '#forge:plates/iron', replaceWith: 'immersiveengineering:plate_iron' },
    { condition: {}, toReplace: '#forge:plates/golden', replaceWith: 'immersiveengineering:plate_golden' },
    { condition: {}, toReplace: '#forge:plates/copper', replaceWith: 'immersiveengineering:plate_copper' },
    { condition: {}, toReplace: '#forge:plates/constantan', replaceWith: '#forge:plates/copper' },
    { condition: { mod: 'beyond_earth' }, toReplace: '#forge:plates/iron', replaceWith: '#forge:plates/steel' },
    { condition: { id: 'immersiveengineering:crafting/capacitor_lv' }, toReplace: '#forge:plates/lead', replaceWith: '#forge:plates/brass' },
    // Steel
    { condition: {}, toReplace: '#forge:ingots/steel', replaceWith: 'immersiveengineering:ingot_steel' },
    { condition: {}, toReplace: '#forge:nuggets/steel', replaceWith: 'immersiveengineering:nugget_steel' },
    { condition: {}, toReplace: '#forge:storage_blocks/steel', replaceWith: 'immersiveengineering:storage_steel' },
    { condition: { mod: 'beyond_earth' }, toReplace: '#forge:nuggets/iron', replaceWith: '#forge:nuggets/steel' },
    // Iron
    { condition: {}, toReplace: '#forge:rods/iron', replaceWith: 'immersiveengineering:stick_iron' },
    { condition: { id: 'beyond_earth:oxygen_tank' }, toReplace: '#forge:ingots/iron', replaceWith: '#forge:ingots/brass' },
)
// Replace inputs and outputs
InputOutputReplace.push(
    // Create & IE overlap in plates
    { condition: {}, toReplace: 'create:iron_sheet', replaceWith: 'immersiveengineering:plate_iron' },
    { condition: {}, toReplace: 'create:golden_sheet', replaceWith: 'immersiveengineering:plate_gold' },
    { condition: {}, toReplace: 'create:copper_sheet', replaceWith: 'immersiveengineering:plate_copper' },
)

// ------------------------------ REMOVING ------------------------------

// Remove by recipe ID
idRemovals.push(
    // Remove crafting grid ore/ingot/plate recipes
    /immersiveengineering:crafting\/(raw_hammercrushing*.|hammercrushing*.|plate*.)/,
    // Remove crafting grid rod recipes
    /immersiveengineering:crafting\/stick_(iron|steel|aluminum)/,
    // Remove redundant copper recipes from Create
    'create:crafting/materials/copper_ingot',
    'create:crafting/materials/copper_nugget',
    // for some reason this recipe isn't being covered by fullRemovals
    'beyond_earth:desh_plate', 
    // Remove Alloy Kiln brass recipe
    'immersiveengineering:alloysmelter/brass'
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
    'beyond_earth:iron_stick',
    'beyond_earth:iron_plate',
    'beyond_earth:steel_ingot',
    'beyond_earth:steel_nugget',
    'beyond_earth:steel_block',
    'beyond_earth:compressed_desh',
    'beyond_earth:compressed_steel',
    'create:iron_sheet',
    'create:golden_sheet',
    'create:copper_sheet',
    'beyond_earth:coal_generator',
    'beyond_earth:compressor',
    /immersiveengineering:.*uranium*./,
    'immersiveengineering:plate_uranium', // remove when .removeAllTagsFrom() accepts regex
    'create:copper_nugget',
    /immersiveengineering:.*lead*./,
    'immersiveengineering:plate_lead', // remove when .removeAllTagsFrom() accepts regex
    /immersiveengineering:.*constantan*./,
    'immersiveengineering:plate_constantan', // remove when .removeAllTagsFrom() accepts regex
    /immersiveengineering:.*nickel*./,
    'immersiveengineering:plate_nickel', // remove when .removeAllTagsFrom() accepts regex
    'immersiveengineering:ingot_nickel', // remove when .removeAllTagsFrom() accepts regex
    'immersiveengineering:dust_electrum',
)

// ------------------------------ RECIPES ------------------------------
// Remove blueprint recipes when KubeJS Immersive Engineering addon fixes recipes not being applied to blueprint recipes
onEvent('recipes', event => {
    event.custom({
        type: 'immersiveengineering:blueprint',
        inputs: [
            { item: 'immersiveengineering:empty_casing' },
            { tag: 'forge:gunpowder' },
            {
                base_ingredient: { tag: 'forge:nuggets/steel' },
                count: 2
            },
        ],
        category: 'bullet',
        result: {
            item: 'immersiveengineering:casull'
        }
    }).id('immersiveengineering:blueprint/bullet_casull')
    event.custom({
        type: 'immersiveengineering:blueprint',
        inputs: [
            { item: 'immersiveengineering:empty_casing' },
            { tag: 'forge:gunpowder' },
            {
                base_ingredient: { tag: 'forge:nuggets/steel' },
                count: 2
            },
            { item: 'kubejs:lesser_ender_eye' }
        ],
        category: 'specialBullet',
        result: { item: 'immersiveengineering:homing' }
    }).id('immersiveengineering:blueprint/bullet_homing')
    event.custom({
        type: 'immersiveengineering:blueprint',
        inputs: [
            { item: 'immersiveengineering:empty_casing' },
            { tag: 'forge:gunpowder' },
            {
                base_ingredient: { tag: 'forge:nuggets/silver' },
                count: 2
            },
            { tag: 'forge:nuggets/steel' }
        ],
        category: 'bullet',
        result: {
            item: 'immersiveengineering:silver'
        }
    }).id('immersiveengineering:blueprint/bullet_silver')

    // Pressing recipes for IE Metals
    event.recipes.createPressing('immersiveengineering:plate_steel', '#forge:ingots/steel')
    event.recipes.createPressing('immersiveengineering:plate_silver', '#forge:ingots/silver')
    event.recipes.createPressing('immersiveengineering:plate_aluminum', '#forge:ingots/aluminum')
    event.recipes.createPressing('immersiveengineering:plate_electrum', '#forge:ingots/electrum')

    // Beyond Earth plates
    event.recipes.createPressing('beyond_earth:desh_plate', '#forge:ingots/desh')
    event.recipes.immersiveengineeringMetalPress('beyond_earth:desh_plate', '#forge:ingots/desh', 'immersiveengineering:mold_plate')
    event.recipes.createPressing('beyond_earth:compressed_ostrum', '#forge:ingots/ostrum')
    event.recipes.immersiveengineeringMetalPress('beyond_earth:compressed_ostrum', '#forge:ingots/ostrum', 'immersiveengineering:mold_plate')
    event.recipes.createPressing('beyond_earth:compressed_calorite', '#forge:ingots/calorite')
    event.recipes.immersiveengineeringMetalPress('beyond_earth:compressed_calorite', '#forge:ingots/calorite', 'immersiveengineering:mold_plate')

    // Steel recipe for Create
    event.recipes.createMixing('immersiveengineering:ingot_steel', ['#forge:ingots/iron', 'immersiveengineering:coal_coke']).superheated()
    // Electrum recipe for Create
    event.recipes.createMixing('immersiveengineering:ingot_electrum', ['#forge:ingots/gold', '#forge:ingots/silver']).heated()
})