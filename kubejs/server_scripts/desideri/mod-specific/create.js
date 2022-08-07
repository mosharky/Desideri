onEvent('recipes', event => {

    // CRUSHING
    constructedOreRecipes.forEach(oreRecipeData => {
        event.remove({output: oreRecipeData.crushedOre, type: 'create:crushing'})

        let recipeData = {
            type: 'create:crushing',
            ingredients: [oreRecipeData.oreBlock],
            results: [oreRecipeData.crushedOre],
            processingTime: 300
        }
        if (oreRecipeData.extraOutput1 != undefined) {
            recipeData.results.push(oreRecipeData.extraOutput1)
        }
        if (oreRecipeData.extraOutput2 != undefined) {
            recipeData.results.push(oreRecipeData.extraOutput2)
        }
        recipeData.results.push(Item.of('create:experience_nugget').withChance(0.75))
        if (oreRecipeData.crushedStrata != undefined) {
            recipeData.results.push(Item.of(oreRecipeData.crushedStrata).withChance(0.12))
        }
        if (oreRecipeData?.extraStrataOutput != undefined) {
            recipeData.results.push(oreRecipeData.extraStrataOutput)
        }
        event.custom(recipeData)
    })

    event.recipes.createCrushing([Item.of('3x minecraft:prismarine_shard').withChance(0.75), Item.of('minecraft:prismarine_shard').withChance(0.5)], 'minecraft:prismarine').processingTime(200)
    event.recipes.createCrushing([Item.of('3x immersive_weathering:prismarine_brick').withChance(0.75), Item.of('immersive_weathering:prismarine_brick').withChance(0.5)], 'minecraft:prismarine').processingTime(200).id('immersive_weathering:prismarine_bricks_from_brick')


    // MILLING
    event.recipes.createMilling(['3x minecraft:string', Item.of('minecraft:string').withChance(0.25)], '#minecraft:wool').id('create:milling/wool')

    const rawToCrushed = [ // a list of all raw ores (TODO: integrate this to thingsToCrush later?)
        'create:zinc',
        'minecraft:iron',
        'minecraft:gold',
        'minecraft:copper',
        'beyond_earth:desh',
        'beyond_earth:ostrum',
        'beyond_earth:calorite',
        'undergarden:cloggrum',
        'undergarden:froststeel',
        'thermal:tin',
        'oreganized:silver',
        'oreganized:lead'
    ].forEach(rawOre => {
        let rawOreSplit = rawOre.split(':')
        let modId = rawOreSplit[0]
        let ore = rawOreSplit[1]
        if (createSupportedOres.includes(ore)) {
            event.recipes.createMilling(`create:crushed_${ore}_ore`, `${modId}:raw_${ore}`)
        } else {
            event.recipes.createMilling(`kubejs:crushed_${ore}_ore`, `${modId}:raw_${ore}`)
        }
    })


    // CUTTING
    event.remove({ type: 'create:cutting' })
    constructedWoodTypes.forEach((type) => {
        // Log blocks
        event.recipes.createCutting([type.logBlockStripped, 'thermal:sawdust'], type.logBlock)
        event.recipes.createCutting([`6x ${type.plankBlock}`, 'thermal:sawdust'], type.logBlockStripped)
        // Wood blocks
        event.recipes.createCutting([type.woodBlockStripped, 'thermal:sawdust'], type.woodBlock)
        event.recipes.createCutting([`8x ${type.plankBlock}`, 'thermal:sawdust'], type.woodBlockStripped)
    })


    // MIXING
    event.recipes.createMixing('2x farmersdelight:raw_pasta', ['create:dough', '#forge:eggs']).id('desideri:create/mixing/raw_pasta')
    event.recipes.createMixing('thermal:cheese_wheel', Fluid.of('minecraft:milk', 1000)).processingTime(1000).id('thermal:cheese_wheel')


    // PRESSING
    event.recipes.createPressing('corn_delight:tortilla_raw', 'kubejs:hominy').id('corn_delight:tortilla_raw')


    // SPLASHING
    event.recipes.createSplashing('kubejs:lye', 'supplementaries:ash')
})