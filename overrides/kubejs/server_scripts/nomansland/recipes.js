/** @param {$RecipesKubeEvent} e  */
function recipes_NoMansLand(e) {
    e.replaceInput({}, 'nomansland:walnuts', 'bountifulfares:walnut')
    e.shapeless('nomansland:pancake', ['supplementaries:pancake', 'nomansland:maple_syrup_bottle']).id('nomansland:integration/farmersdelight/pancake')

    e.shaped('nomansland:fruit_cake', [
        'ZXY',
        'ABA',
        'CCC'
    ], {
        Z: 'nomansland:pear',
        X: 'minecraft:sweet_berries',
        Y: 'minecraft:apple',
        A: '#c:milk',
        B: '#c:eggs',
        C: '#c:flour'
    }).id('nomansland:food/fruit_cake')

    RECIPES.Workstone(e, ['nomansland:pine_nuts', RECIPES.ChancedResult('nomansland:pine_nuts', 1, 0.5)], 'windswept:pinecone')
    e.recipes.create.milling(['2x nomansland:pine_nuts', CreateItem.of('nomansland:pine_nuts', 0.5)], 'windswept:pinecone')
    
    // theres an error on this recipe bruh and i cant use kubejs deilght
    /*
    e.custom({
        type: 'farmersdelight:cooking',
        recipe_book_tab: 'misc',
        experience: 1,
        ingredients: [
            { tag: 'c:foods/dough' },
            { tag: 'c:crops/cabbage' },
            { tag: 'c:crops/onion' },
            {
                type: 'neoforge:compound',
                children: [
                    { tag: 'c:foods/raw_chicken' },
                    { tag: 'c:foods/raw_pork' },
                    { tag: 'c:foods/raw_beef' },
                    { tag: 'nomansland:edible_mushrooms' }
                ]
            }
        ],
        result: {
            count: 2,
            id: 'farmersdelight:dumplings'
        }
    }).id('farmersdelight:cooking/dumplings')
    */
}
