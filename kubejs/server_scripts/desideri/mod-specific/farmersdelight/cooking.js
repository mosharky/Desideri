function cookingRecipe(result, experience, ingredient) {
    return {
        type: 'farmersdelight:cooking',
        result: result,
        experience: experience,
        ingredients: ingredient,
        cookingtime: 200
    }
}

onEvent('recipes', (event) => {
    const recipes = [
    cookingRecipe(Item.of('kubejs:hominy'), 0.35, [
            Ingredient.of('corn_delight:corn_seeds'),
            Ingredient.of('corn_delight:corn_seeds'),
            Ingredient.of('kubejs:lye')
        ])
    ]

    recipes.forEach((recipe) => {
        event.custom(recipe)
    })
})