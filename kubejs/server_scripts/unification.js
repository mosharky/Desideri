// priority: 9999
onEvent('recipes', (event) => {

    // ------------------------------ REPLACING ------------------------------
    let ingots = ['steel']
    let mod = 'immersiveengineering'
    if (mod = 'immersiveengineering') {
        for (let i of ingots) {
            event.replaceOutput({}, `#forge:ingots/${i}`, `${mod}:ingot_${i}`)
            event.replaceOutput({}, `#forge:plates/${i}`, `${mod}:plate_${i}`)
            event.replaceOutput({}, `#forge:nuggets/${i}`, `${mod}:nugget_${i}`)
            event.replaceOutput({}, `#forge:storage_blocks/${i}`, `${mod}:storage_${i}`)
        }
    }

    // Manual replace
    const inputReplace = [
        { condition: {}, toReplace: '#beyond_earth:compresseds/steel', replaceWith: 'immersiveengineering:plate_steel' },
    ]
    inputReplace.forEach((recipe) => {
        event.replaceInput(recipe.condition, recipe.toReplace, recipe.replaceWith)
    })


    const InputOutputReplace = [
        { condition: {}, toReplace: 'create:iron_sheet', replaceWith: 'immersiveengineering:plate_iron' },
        { condition: {}, toReplace: 'create:golden_sheet', replaceWith: 'immersiveengineering:plate_gold' },
        { condition: {}, toReplace: 'create:copper_sheet', replaceWith: 'immersiveengineering:plate_copper' },
    ]
    InputOutputReplace.forEach((recipe) => {
        event.replaceOutput(recipe.condition, recipe.toReplace, recipe.replaceWith)
        event.replaceInput(recipe.condition, recipe.toReplace, recipe.replaceWith)
    })



    // ------------------------------ REMOVING ------------------------------

    // Removes by recipe ID
    const idRemovals = [
        // Disable hammering recipes
        /immersiveengineering:crafting\/(raw_hammercrushing*.|hammercrushing*.|plate*.)/
    ]
    idRemovals.forEach((removal) => {
        event.remove({ id: removal })
    })







    // Add to fullRemovals array
    global.fullRemovals.push(
        'beyond_earth:hammer',
        'beyond_earth:compressed_steel',
        /beyond_earth:steel_(ingot|nugget|block)/,
        /create:(iron|golden|copper)_sheet/,
    )
})
