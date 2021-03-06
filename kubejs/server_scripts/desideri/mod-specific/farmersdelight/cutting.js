// Credits to the Enigmatica 6 modpack and its incredible development team for the majority of this file.
// This is an edited version of their script here: https://github.com/EnigmaticaModpacks/Enigmatica6/blob/master/kubejs/server_scripts/enigmatica/kubejs/base/recipetypes/farmersdelight/cutting.js
function cuttingRecipe(ingredient, tool, result) {
    return {
        type: 'farmersdelight:cutting',
        ingredients: [ingredient],
        tool: tool,
        result: result
    }
}

function filletRecipe(fish, filletCount) {
    return cuttingRecipe(Ingredient.of(fish), Ingredient.of('#forge:tools/knives'), [
        Item.of('aquaculture:fish_fillet_raw', filletCount),
        Item.of('minecraft:bone_meal', Math.ceil(filletCount / 3))
    ])
}
onEvent('recipes', (event) => {
    const recipes = [
        cuttingRecipe(Ingredient.of('aquaculture:frog'), Ingredient.of('#forge:tools/knives'), [
            Item.of('quark:frog_leg', 2)
        ]),
        cuttingRecipe(
            Ingredient.of('aquaculture:goldfish'),
            {
                type: 'farmersdelight:tool_action',
                action: 'pickaxe_dig'
            },
            [Item.of('minecraft:raw_gold', 1)]
        ),
        cuttingRecipe(Ingredient.of('aquaculture:atlantic_cod'), Ingredient.of('#forge:tools/knives'), [
            Item.of('farmersdelight:cod_slice', 6),
            Item.of('minecraft:bone_meal', 3)
        ]),
        cuttingRecipe(Ingredient.of('aquaculture:pink_salmon'), Ingredient.of('#forge:tools/knives'), [
            Item.of('farmersdelight:salmon_slice', 2),
            Item.of('minecraft:bone_meal', 1)
        ]),
        filletRecipe('minecraft:pufferfish', 2),
        filletRecipe('aquaculture:boulti', 1),
        filletRecipe('aquaculture:smallmouth_bass', 2),
        filletRecipe('aquaculture:atlantic_halibut', 14),
        filletRecipe('aquaculture:pollock', 2),
        filletRecipe('aquaculture:bayad', 4),
        filletRecipe('aquaculture:atlantic_herring', 1),
        filletRecipe('aquaculture:synodontis', 1),
        filletRecipe('aquaculture:piranha', 1),
        filletRecipe('aquaculture:red_grouper', 3),
        filletRecipe('aquaculture:pacific_halibut', 12),
        filletRecipe('aquaculture:perch', 1),
        filletRecipe('aquaculture:rainbow_trout', 2),
        filletRecipe('aquaculture:catfish', 6),
        filletRecipe('aquaculture:muskellunge', 3),
        filletRecipe('aquaculture:tambaqui', 3),
        filletRecipe('aquaculture:carp', 2),
        filletRecipe('aquaculture:blackfish', 2),
        filletRecipe('aquaculture:capitaine', 10),
        filletRecipe('aquaculture:brown_trout', 2),
        filletRecipe('aquaculture:arapaima', 10),
        filletRecipe('aquaculture:tuna', 10),
        filletRecipe('aquaculture:bluegill', 1),
        filletRecipe('aquaculture:gar', 4),
        filletRecipe('alexsmobs:blobfish', 6),
        //filletRecipe('betterendforge:end_fish_raw', 2),
        //filletRecipe('upgrade_aquatic:lionfish', 12)
    ]

    recipes.forEach((recipe) => {
        event.custom(recipe)
    })



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

            let result = [Item.of(recipe.output), Item.of(variant.woodBark)]
            if (variant.woodBark == undefined) {
                result = Item.of(recipe.output)
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