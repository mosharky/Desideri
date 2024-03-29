// priority: 750
onEvent('recipes', (event) => {
    //{ condition: {}, toReplace: '', replaceWith: '' },
    outputReplace.push(
         { condition: {}, toReplace: 'darkerdepths:resin', replaceWith: 'thermal:rosin' }
    )
    inputReplace.push(
        { condition: {}, toReplace: 'minecraft:ender_eye', replaceWith: 'kubejs:lesser_ender_eye' },
        // { condition: { id: 'immersiveengineering:crafting/empty_casing' }, toReplace: '#forge:plates/copper', replaceWith: '#forge:plates/brass' },
        // { condition: { id: 'immersiveengineering:crafting/empty_shell' }, toReplace: '#forge:plates/copper', replaceWith: '#forge:plates/brass' },
        { condition: {}, toReplace: 'supplementaries:flax', replaceWith: 'farmersdelight:straw' },
        { condition: {}, toReplace: '#supplementaries:ropes', replaceWith: 'farmersdelight:rope' },
        // { condition: { id: /immersiveengineering:crafting\/(wirecoil.*|hemp_fabric)/ }, toReplace: '#balm:wooden_rods', replaceWith: 'createaddition:spool' },
        { condition: {}, toReplace: 'minecraft:bread', replaceWith: '#forge:bread' },
        { condition: {}, toReplace: 'enigmaticlegacy:angel_blessing', replaceWith: 'minecraft:elytra' },
        { condition: {}, toReplace: 'minecraft:stick', replaceWith: '#forge:rods/wooden' },
        { condition: {}, toReplace: '#forge:crops/flax', replaceWith: 'farmersdelight:straw' },
        { condition: { id: 'farmersdelight:fruit_salad' }, toReplace: 'minecraft:sweet_berries', replaceWith: '#desideri:berries' },
        { condition: {}, toReplace: 'farmersdelight:tree_bark', replaceWith: '#immersive_weathering:bark' },
        { condition: { id: 'create:crafting/kinetics/belt_connector' }, toReplace: 'minecraft:dried_kelp', replaceWith: 'thermal:cured_rubber' },
        { condition: {}, toReplace: 'minecraft:brown_mushroom', replaceWith: '#desideri:brown_mushrooms' },
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