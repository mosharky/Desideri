// priority: 9999
// ------------------------------ REPLACING ------------------------------
let materials = ['steel']
let vanillaMaterials = ['iron', 'gold', 'copper']
let mod = 'immersiveengineering'
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
global.outputReplace.push(
    { condition: {}, toReplace: '', replaceWith: '' },
)
global.inputReplace.push(
    { condition: {}, toReplace: '#beyond_earth:compresseds/steel', replaceWith: '#forge:plates/steel' },
    { condition: {}, toReplace: '#forge:plates/zinc', replaceWith: '#forge:plates/aluminum' },
    { condition: {}, toReplace: '#forge:rods/iron', replaceWith: 'immersiveengineering:stick_iron' },
    { condition: { mod: 'beyond_earth' }, toReplace: '#forge:plates/iron', replaceWith: '#forge:plates/steel' },
    { condition: { mod: 'beyond_earth' }, toReplace: '#forge:nuggets/iron', replaceWith: '#forge:nuggets/steel' },
    { condition: { id: 'beyond_earth:oxygen_tank' }, toReplace: '#forge:ingots/iron', replaceWith: '#forge:ingots/brass' }
)
global.InputOutputReplace.push(
    { condition: {}, toReplace: 'create:iron_sheet', replaceWith: 'immersiveengineering:plate_iron' },
    { condition: {}, toReplace: 'create:golden_sheet', replaceWith: 'immersiveengineering:plate_gold' },
    { condition: {}, toReplace: 'create:copper_sheet', replaceWith: 'immersiveengineering:plate_copper' },
)


onEvent('recipes', (event) => {
    // ------------------------------ REMOVING ------------------------------

    // Removes by recipe ID
    const idRemovals = [
        'beyond_earth:desh_plate',
        // Disable hammering recipes
        /immersiveengineering:crafting\/(raw_hammercrushing*.|hammercrushing*.|plate*.)/,
        // Disable crafting grid rod recipes
        /immersiveengineering:crafting\/stick_*./
    ]
    idRemovals.forEach((removal) => {
        event.remove({ id: removal })
    })
})

// Add to fullRemovals array
global.fullRemovals.push(
    'beyond_earth:hammer',
    'beyond_earth:compressed_steel',
    'beyond_earth:iron_stick',
    'beyond_earth:iron_plate',
    'beyond_earth:compressed_desh',
)

