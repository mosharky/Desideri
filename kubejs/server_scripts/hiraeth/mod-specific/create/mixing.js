onEvent('recipes', (event) => {
    event.recipes.createMixing(
        // Output
        'farmersdelight:raw_pasta',
        // Input
        ['create:dough', '#forge:eggs']
    ).id('hiraeth:create/mixing/raw_pasta')
})