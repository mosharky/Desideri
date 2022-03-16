// No bowl inputs?
onEvent('recipes', (event) => {
    function cookingRecipe(result, ingredient, id, experience) {
        return event.custom({
            type: 'farmersdelight:cooking',
            result: result,
            experience: experience,
            ingredients: ingredient,
            cookingtime: 200
        }).id(id) // must give an id!
    }

    cookingRecipe(
        Item.of('kubejs:hominy'), [
            Ingredient.of('corn_delight:corn_seeds'), 
            Ingredient.of('corn_delight:corn_seeds'), 
            Ingredient.of('kubejs:lye')
        ], 
        'desideri:hominy',
        0.35
    )
    // rooty stew once i figure out how bowl inputs work
})
