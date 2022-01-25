const create_mixing_prefix = 'hiraeth:create/mixing/'
onEvent('recipes', (event) => {
    event.recipes.createMixing(
        // Output
        'farmersdelight:raw_pasta',
        // Input
        ['create:dough', '#forge:eggs']
    ).id(`${create_mixing_prefix}raw_pasta`)
})