// priority: 9999
// This script attempts to make future work easier with the for loops. 
// This doesn't purely just unify, it also attempts to remove rather useless metals/ores.

let materials = ['steel']
let vanillaMaterials = ['iron', 'gold', 'copper']
let mod = 'immersiveengineering'

// ------------------------------ TAGS ------------------------------
onEvent('tags.fluids', event => {
    event.add('beyond_earth:vehicle_fuel', 'immersiveengineering:biodiesel')
    event.remove('minecraft:water', 'beyond_earth:fuel')
    event.remove('beyond_earth:vehicle_fuel', 'beyond_earth:fuel')
    event.remove('minecraft:water', 'beyond_earth:oil')
    event.remove('beyond_earth:oil', 'beyond_earth:oil')
})

// ------------------------------ REPLACING ------------------------------
if (mod = 'immersiveengineering') {
    for (let i of materials) {
        global.inputReplace.push(
            { condition: {}, toReplace: `#forge:ingots/${i}`, replaceWith: `${mod}:ingot_${i}` },
            { condition: {}, toReplace: `#forge:nuggets/${i}`, replaceWith: `${mod}:nugget_${i}` },
            { condition: {}, toReplace: `#forge:plates/${i}`, replaceWith: `${mod}:plate_${i}` },
            { condition: {}, toReplace: `#forge:storage_blocks/${i}`, replaceWith: `${mod}:storage_${i}` },
        )
    }
    for (let i of vanillaMaterials) {
        global.inputReplace.push(
            { condition: {}, toReplace: `#forge:plates/${i}`, replaceWith: `${mod}:plate_${i}` },
        )
    }
}


// Manual replace
//{ condition: {}, toReplace: '', replaceWith: '' },

// Replace outputs
global.outputReplace.push(
    { condition: {}, toReplace: 'create:copper_nugget', replaceWith: 'immersiveengineering:nugget_copper' },
)
// Replace inputs
global.inputReplace.push(
    { condition: {}, toReplace: '#beyond_earth:compresseds/steel', replaceWith: '#forge:plates/steel' },
    { condition: {}, toReplace: '#forge:plates/zinc', replaceWith: '#forge:plates/aluminum' },
    { condition: {}, toReplace: '#forge:rods/iron', replaceWith: 'immersiveengineering:stick_iron' },
    { condition: { mod: 'beyond_earth' }, toReplace: '#forge:plates/iron', replaceWith: '#forge:plates/steel' },
    { condition: { mod: 'beyond_earth' }, toReplace: '#forge:nuggets/iron', replaceWith: '#forge:nuggets/steel' },
    { condition: { id: 'beyond_earth:oxygen_tank' }, toReplace: '#forge:ingots/iron', replaceWith: '#forge:ingots/brass' },
    { condition: { id: 'immersiveengineering:crafting/capacitor_lv' }, toReplace: '#forge:plates/lead', replaceWith: '#forge:plates/brass' }
)
// Replace inputs and outputs
global.InputOutputReplace.push(
    { condition: {}, toReplace: 'create:iron_sheet', replaceWith: 'immersiveengineering:plate_iron' },
    { condition: {}, toReplace: 'create:golden_sheet', replaceWith: 'immersiveengineering:plate_gold' },
    { condition: {}, toReplace: 'create:copper_sheet', replaceWith: 'immersiveengineering:plate_copper' },
)

// ------------------------------ REMOVING ------------------------------

// Remove by recipe ID
global.idRemovals.push(
    'beyond_earth:desh_plate',
    /immersiveengineering:crafting\/(raw_hammercrushing*.|hammercrushing*.|plate*.)/,
    /immersiveengineering:crafting\/stick_*./,
    /beyond_earth:generating*./,
    'beyond_earth:fuelrefining/fuel_from_oil',
    'create:crafting/materials/copper_ingot',
    'create:crafting/materials/copper_nugget'
)

// Add to fullRemovals array
// Regex no worky :(
global.fullRemovals.push(
    'beyond_earth:hammer',
    'beyond_earth:compressed_steel',
    'beyond_earth:iron_stick',
    'beyond_earth:iron_plate',
    'beyond_earth:compressed_desh',
    'beyond_earth:steel_ingot',
    'beyond_earth:steel_nugget',
    'beyond_earth:steel_block',
    'create:iron_sheet',
    'create:golden_sheet',
    'create:copper_sheet',
    'beyond_earth:coal_generator',
    'beyond_earth:fuel_refinery',
    'beyond_earth:fuel_bucket',
    'beyond_earth:oil_bucket',
    /.*uranium*./,
    'immersiveengineering:plate_uranium',
    'create:copper_nugget'
)

