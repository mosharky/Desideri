onEvent('recipes', event => {

    // CRUSHING
    constructedOreData.forEach(oreData => {
        event.remove({output: oreData.crushedOre.item, type: 'create:crushing'})
        oreData.oreBlocks.forEach(entry => {
            let recipeData = {
                type: 'create:crushing',
                ingredients: [entry.oreBlock],
                results: [oreData.crushedOre],
                processingTime: 300
            }
            if (oreData.extraOutput1 != undefined) {
                recipeData.results.push(oreData.extraOutput1)
            }
            if (oreData.extraOutput2 != undefined) {
                recipeData.results.push(oreData.extraOutput2)
            }
            recipeData.results.push(Item.of('create:experience_nugget').withChance(0.75))
            if (oreData.crushedStrata != undefined) {
                recipeData.results.push(Item.of(oreData.crushedStrata).withChance(0.12))
            }
            if (oreData.extraStrataOutput != undefined) {
                recipeData.results.push(oreData.extraStrataOutput)
            }

            let strata = entry.strata.split(':')[1]
            event.custom(recipeData).id(`desideri:create/crushing/${strata}_${oreData.material}_ore`) // TODO: check if this works
        })
    })

    event.recipes.createCrushing([Item.of('3x minecraft:prismarine_shard').withChance(0.75), Item.of('minecraft:prismarine_shard').withChance(0.5)], 'minecraft:prismarine').processingTime(200)
    event.recipes.createCrushing([Item.of('3x immersive_weathering:prismarine_brick').withChance(0.75), Item.of('immersive_weathering:prismarine_brick').withChance(0.5)], 'minecraft:prismarine').processingTime(200).id('immersive_weathering:prismarine_bricks_from_brick')


    // MILLING
    event.recipes.createMilling(['3x minecraft:string', Item.of('minecraft:string').withChance(0.25)], '#minecraft:wool').id('create:milling/wool')

    /*
    // raw ore to crushed ore
    constructedOreData.forEach(oreData => {
        if (oreData?.rawOre != undefined) {
            event.recipes.createMilling(oreData.crushedOre.item, oreData.rawOre)
        }
    })
    */


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