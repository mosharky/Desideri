onEvent('recipes', (event) => {
    const id_prefix = 'hiraeth:create/mixing/'
    event.recipes.createMixing(
        // Output
        'farmersdelight:raw_pasta',
        // Input
        ['create:dough', '#forge:eggs']
    ).id(`${id_prefix}raw_pasta`)
})