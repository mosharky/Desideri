onEvent('recipes', (event) => {

    // Steel
    // Immersive Engineering > Beyond Earth

    const inputReplace = [
        { condition: {}, toReplace: '#forge:ingots/steel', replaceWith: 'immersiveengineering:ingot_steel' },
        { condition: {}, toReplace: '#forge:nuggets/steel', replaceWith: 'immersiveengineering:nugget_steel' },
        { condition: {}, toReplace: '#forge:storage_blocks/steel', replaceWith: 'immersiveengineering:storage_steel' },
        { condition: {}, toReplace: 'beyond_earth:compressed_steel', replaceWith: 'immersiveengineering:plate_steel' },
    ]

    // Replace input
    inputReplace.forEach((recipe) => {
        event.replaceInput(recipe.condition, recipe.toReplace, recipe.replaceWith)
    })

    //test
})