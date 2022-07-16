// 'xp', 'container', and 'time' are optional fields
const cookingRecipes = [
    {
        ingredients: [
            'corn_delight:corn_seeds',
            'corn_delight:corn_seeds',
            'kubejs:lye'
        ],
        result: 'kubejs:hominy',
    },
    {
        ingredients: [
            'kubejs:lesser_ender_eye',
            'alexsmobs:blood_sac',
            'kubejs:hemolymph_pustules'
        ],
        result: 'minecraft:ender_eye',
        id: 'minecraft:ender_eye'
    },
    {
        ingredients: [
            'minecraft:honeycomb',
            'minecraft:honeycomb',
            'verdure:clover',
            '#forge:salad_ingredients/cabbage',
            'create:experience_nugget',
        ],
        result: 'thermal:xp_stew',
        xp: 0.75,
        container: 'minecraft:bowl',
        id: 'thermal:xp_stew'
    },
    {
        ingredients: [
            '#forge:crops/corn',
            'minecraft:sweet_berries',
            '#forge:salad_ingredients/cabbage',
            '#forge:salad_ingredients/cabbage',
            'minecraft:rabbit_foot'
        ],
        result: 'thermal:spring_salad',
        container: 'minecraft:bowl',
        id: 'thermal:spring_salad'
    },
    {
        ingredients: [
            'farmersrespite:rose_hips',
            'farmersrespite:rose_hips',
            'minecraft:carrot',
            'farmersdelight:onion',
            'minecraft:golden_apple',
            '#minecraft:flowers'
        ],
        result: 'thermal:hearty_stew',
        container: 'minecraft:bowl'
    }
]

cookingRecipes.forEach(recipe => {
    // because ingredients must be in json format
    let ingredientArray = []
    recipe.ingredients.forEach(item => {
        ingredientArray.push(Ingredient.of(item))
    })
    let recipeDict = {
        type: 'farmersdelight:cooking',
        ingredients: ingredientArray,
        result: Item.of(recipe.result),
        experience: 0.2,
        time: 200,
    }

    if (recipe.xp != undefined) {
        recipeDict['experience'] = recipe.xp
    }
    if (recipe.container != undefined) {
        recipeDict['container'] = Item.of(recipe.container)
    }
    if (recipe.time != undefined) {
        recipeDict['time'] = recipe.time
    }

    onEvent('recipes', event => {
        if (recipe.id != undefined) {
            event.custom(recipeDict).id(recipe.id)
        } else {
            event.custom(recipeDict)
        }
    })
})