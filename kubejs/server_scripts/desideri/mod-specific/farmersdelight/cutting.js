onEvent('recipes', (event) => {

    // tools:
    // axe_dig, axe_strip, and any tag

    let cuttingRecipes = [
        /*
        {
            ingredients: ['verdure:clover'],
            tool: 'forge:tools/knives',
            result: ['2x delightful:chopped_clover'],
            id: 'delightful:chopped_clover'
        }
        */
    ]

    constructedWoodTypes.forEach((variant) => {
        [
            {
                input: variant.logBlock,
                output: variant.logBlockStripped
            },
            {
                input: variant.woodBlock,
                output: variant.woodBlockStripped
            }
        ].forEach((logRecipe) => {
            event.remove({ type: 'farmersdelight:cutting', output: logRecipe.output })

            let result = Item.of(logRecipe.output)
            if (!unsupportedForWoodBark.includes(variant)) {
                result = [Item.of(logRecipe.output), Item.of(variant.woodBark)]
            }

            cuttingRecipes.push({
                ingredients: logRecipe.input,
                tool: 'axe_strip',
                result: result
            })
        })
    })

    cuttingRecipes.forEach(recipe => {
        let ingredientArray = []
        if (Array.isArray(recipe.ingredients)) {
            recipe.ingredients.forEach(item => {
                ingredientArray.push(Ingredient.of(item))
            })
        } else {
            ingredientArray = [Ingredient.of(recipe.ingredients)]
        }

        let resultArray = []
        if (Array.isArray(recipe.result)) {
            recipe.result.forEach(result => {
                resultArray.push(Item.of(result).toResultJson())
            })
        } else {
            resultArray = [Item.of(recipe.result).toResultJson()]
        }

        let tool = {}
        if (recipe.tool != 'axe_dig' || recipe.tool != 'axe_strip') {
            tool = {
                tag: recipe.tool
            }
        } else {
            tool = {
                type: 'farmersdelight:tool_action',
                action: recipe.tool
            }
        }

        let recipeDict = {
            type: 'farmersdelight:cutting',
            ingredients: ingredientArray,
            tool: tool,
            result: resultArray
        }
        if (recipe.sound != undefined) {
            recipeDict['sound'] = recipe.sound
        }
        if (recipe.tool = 'axe_strip') {
            recipeDict['sound'] = 'minecraft:item.axe.strip'
        }
        
        console.log(recipeDict)
        recipe.id
            ? event.custom(recipeDict).id(recipe.id)
            : event.custom(recipeDict)

    })
})