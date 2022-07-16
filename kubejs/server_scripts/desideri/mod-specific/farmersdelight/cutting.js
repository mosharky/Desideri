onEvent('recipes', (event) => {
    constructedWoodTypes.forEach((variant) => {
        let logCuttingRecipes = [
            {
                input: variant.logBlock,
                output: variant.logBlockStripped
            },
            {
                input: variant.woodBlock,
                output: variant.woodBlockStripped
            }
        ]
        logCuttingRecipes.forEach((recipe) => {
            event.remove({ type: 'farmersdelight:cutting', output: recipe.output })

            let result = Item.of(recipe.output)
            if (!unsupportedForWoodBark.includes(variant)) {
                result = [Item.of(recipe.output), Item.of(variant.woodBark)]
            }
            event.custom({
                type: 'farmersdelight:cutting',
                ingredients: [Ingredient.of(recipe.input)],
                tool: {
                    type: 'farmersdelight:tool_action',
                    action: 'axe_strip'
                },
                result: result
            })
        })
    })
})