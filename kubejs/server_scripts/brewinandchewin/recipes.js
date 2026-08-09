/** @param {$RecipesKubeEvent} e */
function recipes_BrewinAndChewin(e) {
    // e.custom({
    //     type: 'brewinandchewin:fermenting',
    //     base_fluid: {
    //         amount: 1000,
    //         fluid: 'brewinandchewin:rice_wine'
    //     },
    //     experience: 1,
    //     fermenting_time: 4800,
    //     ingredients: [
    //         { item: 'minecraft:honey_bottle' },
    //         { tag: 'immersive_weathering:bark' },
    //         { item: 'minecraft:lily_of_the_valley' },
    //         { item: 'minecraft:sugar' }
    //     ],
    //     recipe_book_tab: 'drinks',
    //     result: {
    //         count: 1000,
    //         fluid: 'brewinandchewin:pale_jane'
    //     },
    //     temperature: 4,
    //     unit: 'millibuckets'
    // }).id('brewinandchewin:fermenting/pale_jane_from_rice_wine')

    e.shaped('brewinandchewin:pizza', [
        ' A ',
        'BCB',
        ' D '
    ], {
        A: '#brewinandchewin:foods/cheese_wedge',
        B: '#brewinandchewin:foods/pizza_topping',
        C: 'farmersdelight:tomato_sauce',
        D: 'farmersdelight:pie_crust'
    }).id('brewinandchewin:pizza')
}
