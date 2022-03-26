// No bowl inputs?
onEvent('recipes', (event) => {
    function cookingRecipe(ingredients, result, experience, container, id) {
        let ingredientArray = []
        ingredients.forEach(item => {
            ingredientArray.push(Ingredient.of(item))
        })
        return event.custom({
            type: 'farmersdelight:cooking',
            ingredients: ingredientArray,
            result: Item.of(result),
            experience: experience,
            container: Item.of(container),
            cookingtime: 200
        }).id(id) // must give an id!
    }

    cookingRecipe([
        'corn_delight:corn_seeds',
        'corn_delight:corn_seeds',
        'kubejs:lye'
    ], 'kubejs:hominy', 0.35, 'air', 'desideri:hominy')
    
    cookingRecipe([
        'rootsclassic:old_root',
        'minecraft:wheat',
        'minecraft:beetroot'
    ], 'rootsclassic:rooty_stew', 0.2, 'minecraft:bowl', 'rootsclassic:rooty_stew')
})
