// priority: 750
onEvent('recipes', (event) => {
    //{ condition: {}, toReplace: '', replaceWith: '' },
    outputReplace.push(
        { condition: {}, toReplace: 'supplementaries:flax_seeds', replaceWith: 'immersiveengineering:seed' }
    )
    inputReplace.push(
        { condition: {}, toReplace: 'minecraft:ender_eye', replaceWith: 'kubejs:lesser_ender_eye' },
        { condition: { id: 'immersiveengineering:crafting/empty_casing' }, toReplace: '#forge:plates/copper', replaceWith: '#forge:plates/brass' },
        { condition: { id: 'immersiveengineering:crafting/empty_shell' }, toReplace: '#forge:plates/copper', replaceWith: '#forge:plates/brass' },
        { condition: {}, toReplace: 'supplementaries:flax', replaceWith: 'farmersdelight:straw' },
        { condition: {}, toReplace: '#supplementaries:ropes', replaceWith: 'farmersdelight:rope' },
    )
    InputOutputReplace.push(
        { condition: {}, toReplace: '', replaceWith: '' }
    )

    // Replace output
    outputReplace.forEach((recipe) => {
        event.replaceOutput(recipe.condition, recipe.toReplace, recipe.replaceWith)
    })
    // Replace input
    inputReplace.forEach((recipe) => {
        event.replaceInput(recipe.condition, recipe.toReplace, recipe.replaceWith)
    })
    // Replace input AND output
    InputOutputReplace.forEach((recipe) => {
        event.replaceOutput(recipe.condition, recipe.toReplace, recipe.replaceWith)
        event.replaceInput(recipe.condition, recipe.toReplace, recipe.replaceWith)
    })
})