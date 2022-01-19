// priority: 1000
onEvent('recipes', (event) => {

    // Replace output
    const outputReplace = [
        { condition: {}, toReplace: '', replaceWith: '' },
    ]


    // Replace input
    const inputReplace = [
        { condition: {}, toReplace: 'minecraft:ender_eye', replaceWith: 'kubejs:lesser_ender_eye' },
        { condition: {mod: 'beyond_earth'}, toReplace: '#forge:plates/iron', replaceWith: '#forge:plates/steel' },
        { condition: {mod: 'beyond_earth'}, toReplace: '#forge:nuggets/iron', replaceWith: '#forge:nuggets/steel' },
        { condition: {id: 'beyond_earth:oxygen_tank'}, toReplace: '#forge:ingots/iron', replaceWith: '#forge:ingots/brass' },
    ]

    // Replace input AND output
    const InputOutputReplace = [
        { condition: {}, toReplace: '', replaceWith: '' },
    ]


    /* ---------------------- LOOPS ----------------------
    
    Loops that iterate for each object in their constant arrays,
    and running KubeJS's replace events in order to replace inputs/outputs
    in a coding time-efficient manner.

    conditions can be:
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