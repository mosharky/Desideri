onEvent('recipes', (event) => {
    event.recipes.createMixing('2x farmersdelight:raw_pasta', ['create:dough', '#forge:eggs']).id('desideri:create/mixing/raw_pasta')
    event.recipes.createMixing('thermal:cheese_wheel', Fluid.of('minecraft:milk', 1000)).processingTime(1000).id('thermal:cheese_wheel')
    //event.recipes.createMixing('', [])
})