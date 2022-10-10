onEvent('recipes', event => {

    // CRUSHING
    constructedOreData.forEach(oreData => {
        // crushing raw ores & raw ore blocks
        if (oreData?.rawOre != undefined) {
            event.remove({input: oreData.rawOre, type: 'create:crushing'})
            event.recipes.create.crushing([oreData.crushedOre.item, Item.of('create:experience_nugget').withChance(0.75)], oreData.rawOre)
                 .id(`desideri:create/crushing/${oreData.rawOre.split(':')[1]}`)

            let rawOreBlock = `${oreData.rawOre}_block`
            if (rawOreBlock.split(':')[0] == 'malum') {
                rawOreBlock = 'malum:block_of_raw_soulstone'
            }
            event.remove({input: rawOreBlock, type: 'create:crushing'})
            event.recipes.create.crushing([`9x ${oreData.crushedOre.item}`, Item.of('create:experience_nugget', 9).withChance(0.75)], rawOreBlock)
                 .id(`desideri:create/crushing/${rawOreBlock.split(':')[1]}`)
        }

        // crushing ores with their block type
        oreData.oreBlocks.forEach(entry => {
            event.remove({input: entry.oreBlock, type: 'create:crushing'})
            let recipeData = {
                type: 'create:crushing',
                ingredients: [entry.oreBlock],
                results: [oreData.crushedOre],
                processingTime: 350
            }
            if (oreData.extraOutput1 != undefined) {
                recipeData.results.push(oreData.extraOutput1)
            }
            if (oreData.extraOutput2 != undefined) {
                recipeData.results.push(oreData.extraOutput2)
            }

            recipeData.results.push(Item.of('create:experience_nugget').withChance(0.75))

            if (entry.crushedStrata != undefined) {
                recipeData.results.push(Item.of(entry.crushedStrata).withChance(0.12))
            }
            if (entry.extraStrataOutput != undefined) {
                recipeData.results.push(Item.of(entry.extraStrataOutput))
            }

            let strata = entry.strata.split(':')[1] + '_'
            if (strata == 'stone_') strata = ''
            let material = oreData.material.split(':')[1]
            event.custom(recipeData).id(`desideri:create/crushing/${strata}${material}_ore`)
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
        event.recipes.create.cutting([type.logBlockStripped, 'thermal:sawdust'], type.logBlock)
        event.recipes.create.cutting([`6x ${type.plankBlock}`, 'thermal:sawdust'], type.logBlockStripped)
        // Wood blocks
        event.recipes.create.cutting([type.woodBlockStripped, 'thermal:sawdust'], type.woodBlock)
        event.recipes.create.cutting([`8x ${type.plankBlock}`, 'thermal:sawdust'], type.woodBlockStripped)
    })


    // MIXING
    event.recipes.create.mixing('2x farmersdelight:raw_pasta', ['create:dough', '#forge:eggs']).id('desideri:create/mixing/raw_pasta')
    event.recipes.create.mixing('thermal:cheese_wheel', Fluid.of('minecraft:milk', 1000)).processingTime(1000).id('thermal:cheese_wheel')
    event.recipes.create.mixing([Fluid.of('minecraft:water', 750), Fluid.of('thermal:syrup', 250)], Fluid.of('thermal:sap', 1000)).processingTime(1000).heated()
    event.recipes.create.mixing(['thermal:rosin', Fluid.of('thermal:tree_oil', 100)], Fluid.of('thermal:resin', 200)).processingTime(1000).heated()


    // WASHING
    constructedOreData.forEach(oreData => {
        let crushedOre = oreData.crushedOre.item
        if (crushedOre.split(':')[1].split('_')[0] == 'crushed') {
            event.remove({type: 'create:splashing', input: crushedOre})

            let nugget = `${oreData.material}_nugget`
            let count1 = 10
            let count2 = 5
            if (oreData.nugget != undefined) {
                nugget = oreData.nugget
            }
            if (oreData.material == 'malum:soulstone') {
                count1 = 2
                count2 = 1
            }

            event.custom({
                type: 'create:splashing',
                ingredients: [Ingredient.of(crushedOre)],
                results: [
                    Item.of(nugget, count1),
                    Item.of(nugget, count2).withChance(0.5)
                ]
            }).id(`desideri:create/splashing/${crushedOre.split(':')[1]}`)
        }
    })
})