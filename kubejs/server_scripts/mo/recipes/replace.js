// priority: 750
onEvent('recipes', (event) => {
    //{ condition: {}, toReplace: '', replaceWith: '' },
    outputReplace.push(
        { condition: {}, toReplace: '', replaceWith: '' }
    )
    inputReplace.push(
        { condition: {}, toReplace: 'minecraft:ender_eye', replaceWith: 'kubejs:lesser_ender_eye' },
        { condition: { id: 'immersiveengineering:crafting/empty_casing' }, toReplace: '#forge:plates/copper', replaceWith: '#forge:plates/brass' },
        { condition: { id: 'immersiveengineering:crafting/empty_shell' }, toReplace: '#forge:plates/copper', replaceWith: '#forge:plates/brass' },
    )
    InputOutputReplace.push(
        { condition: {}, toReplace: '', replaceWith: '' }
    )

    /* ---------------------- LOOPS ----------------------
    
    Loops that iterate for each object in their arrays,
    and running KubeJS's replace events in order to replace inputs/outputs
    in a time-efficient manner.

    condition can be:
    {mod: 'modid'},
    {id: 'recipeid'},
    {type: 'recipetype'}

    */

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