// No bowl inputs?
onEvent('recipes', (event) => {
    function cookingRecipe(ingredients, result, experience, container, id) {
        return event.custom({
            type: 'farmersdelight:cooking',
            ingredients: ingredients,
            result: result,
            experience: experience,
            container: container,
            cookingtime: 200
        }).id(id) // must give an id!
    }

    cookingRecipe([
        Ingredient.of('corn_delight:corn_seeds'),
        Ingredient.of('corn_delight:corn_seeds'),
        Ingredient.of('kubejs:lye')
    ],
        Item.of('kubejs:hominy'),
        0.35,
        Item.of('air'),
        'desideri:hominy',

    )
    cookingRecipe([
        Ingredient.of('rootsclassic:old_root'),
        Ingredient.of('minecraft:wheat'),
        Ingredient.of('minecraft:beetroot')
    ],
        Item.of('rootsclassic:rooty_stew'),
        0.2,
        Item.of('minecraft:bowl'),
        'rootsclassic:rooty_stew'
    )
})
