/** @param {$RecipesKubeEvent} e */
function recipes_Neapolitan(e) {
    e.replaceInput({}, 'neapolitan:milk_bottle', 'farmersdelight:milk_bottle')
    e.remove({ id: 'neapolitan:cake' })

    RECIPES.Cake(e, 'neapolitan:vanilla_cake', 'neapolitan:dried_vanilla_pods', true)
    RECIPES.Cake(e, 'neapolitan:chocolate_cake', 'neapolitan:dried_vanilla_pods', true)
    RECIPES.Cake(e, 'neapolitan:strawberry_cake', 'neapolitan:strawberries', true)
    RECIPES.Cake(e, 'neapolitan:banana_cake', 'neapolitan:banana', true)
    RECIPES.Cake(e, 'neapolitan:mint_cake', 'neapolitan:mint_leaves', true)
    RECIPES.Cake(e, 'neapolitan:adzuki_cake', 'neapolitan:roasted_adzuki_beans', true)

    const replaceCocoaBeansRecipes = [
        'starcatcher_delight:cooking/chocolate_taiyaki',
        'minecraft:cookie',
        'atmospheric:orange_pudding',
        'bountifulfares:tropical_medley',
        'farmersdelight:chocolate_pie',
    ].forEach(recipe => e.replaceInput({ id: recipe }, 'minecraft:cocoa_beans', '#c:foods/chocolate_bar'))
}
