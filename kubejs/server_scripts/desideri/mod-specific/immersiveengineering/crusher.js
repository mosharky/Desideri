onEvent('recipes', (event) => {
    event.recipes.immersiveengineeringCrusher(
        '2x create:crushed_iron_ore',
        'minecraft:iron_ore', [
            Item.of('create:crushed_iron_ore').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of('minecraft:cobblestone').withChance(0.12)
    ])

    function strataOreCrusherRecipe(oreBlock, resultItem, resultItemCount, resultItemChance, resultBlock, extraOutput, recipeId) {
        let secondaryOutput = [
            Item.of(resultItem).withChance(resultItemChance),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of(resultBlock).withChance(0.12),
        ]
        if (extraOutput != undefined) {
            secondaryOutput.push(extraOutput)
        }
        if (recipeId != undefined) {
            return event.recipes.immersiveengineeringCrusher(`${resultItemCount}x ${resultItem}`, oreBlock, secondaryOutput).id(recipeId)
        } else {
            return event.recipes.immersiveengineeringCrusher(`${resultItemCount}x ${resultItem}`, oreBlock, secondaryOutput)
        }
    }

    // Stone
    strataOreCrusherRecipe('minecraft:coal_ore', 'minecraft:coal', 2, 0.25, 'minecraft:cobblestone', Item.of('immersiveengineering:dust_sulfur').withChance(0.15), 'immersiveengineering:crusher/ore_coal')
    strataOreCrusherRecipe('minecraft:lapis_ore', 'minecraft:lapis_lazuli', 12, 0.25, 'minecraft:cobblestone', undefined, 'immersiveengineering:crusher/ore_lapis')
    strataOreCrusherRecipe('minecraft:redstone_ore', 'minecraft:redstone', 7, 0.25, 'minecraft:cobblestone', undefined, 'immersiveengineering:crusher/ore_redstone')
    strataOreCrusherRecipe('minecraft:diamond_ore', 'minecraft:diamond', 2, 0.25, 'minecraft:cobblestone', undefined, 'immersiveengineering:crusher/ore_diamond')
    strataOreCrusherRecipe('minecraft:copper_ore', 'create:crushed_copper_ore', 2, 0.25, 'minecraft:cobblestone', undefined, 'immersiveengineering:crusher/ore_copper')
    strataOreCrusherRecipe('minecraft:gold_ore', 'create:crushed_gold_ore', 2, 0.25, 'minecraft:cobblestone', undefined, 'immersiveengineering:crusher/ore_gold')
    strataOreCrusherRecipe('immersiveengineering:ore_silver', 'create:crushed_silver_ore', 2, 0.25, 'minecraft:cobblestone', undefined, 'immersiveengineering:crusher/ore_silver')
    strataOreCrusherRecipe('immersiveengineering:ore_aluminum', 'create:crushed_aluminum_ore', 2, 0.25, 'minecraft:cobblestone', undefined, 'immersiveengineering:crusher/ore_aluminum')
    strataOreCrusherRecipe('create:zinc_ore', 'create:crushed_zinc_ore', 2, 0.25, 'minecraft:cobblestone')
    strataOreCrusherRecipe('minecraft:iron_ore', 'create:crushed_iron_ore', 2, 0.25, 'minecraft:cobblestone')
    strataOreCrusherRecipe('malum:soulstone_ore', 'malum:soulstone_cluster', 2, 0.25, 'minecraft:cobblestone')
    // Deepslate
    strataOreCrusherRecipe('minecraft:deepslate_gold_ore', 'create:crushed_gold_ore', 2, 0.25, 'minecraft:cobbled_deepslate')
    strataOreCrusherRecipe('minecraft:deepslate_copper_ore', 'create:crushed_copper_ore', 2, 0.25, 'minecraft:cobbled_deepslate')
    strataOreCrusherRecipe('minecraft:deepslate_coal_ore', 'minecraft:coal', 2, 0.25, 'minecraft:cobbled_deepslate', Item.of('immersiveengineering:dust_sulfur').withChance(0.15))
    strataOreCrusherRecipe('minecraft:deepslate_diamond_ore', 'minecraft:diamond', 2, 0.25, 'minecraft:cobbled_deepslate')
    strataOreCrusherRecipe('minecraft:deepslate_redstone_ore', 'minecraft:redstone', 7, 0.25, 'minecraft:cobbled_deepslate')
    strataOreCrusherRecipe('minecraft:deepslate_lapis_ore', 'minecraft:lapis_lazuli', 12, 0.25, 'minecraft:cobbled_deepslate')
    strataOreCrusherRecipe('minecraft:deepslate_iron_ore', 'create:crushed_iron_ore', 2, 0.25, 'minecraft:cobbled_deepslate')
    strataOreCrusherRecipe('create:deepslate_zinc_ore', 'create:crushed_zinc_ore', 2, 0.25, 'minecraft:cobbled_deepslate')
    strataOreCrusherRecipe('immersiveengineering:deepslate_ore_silver', 'create:crushed_silver_ore', 2, 0.25, 'minecraft:cobbled_deepslate')
    strataOreCrusherRecipe('immersiveengineering:deepslate_ore_aluminum', 'create:crushed_aluminum_ore', 2, 0.25, 'minecraft:cobbled_deepslate')
    strataOreCrusherRecipe('malum:deepslate_soulstone_ore', 'malum:soulstone_cluster', 2, 0.25, 'minecraft:cobbled_deepslate')
    // Moon
    strataOreCrusherRecipe('beyond_earth:moon_iron_ore', 'create:crushed_iron_ore', 2, 0.25, 'beyond_earth:moon_sand')
    strataOreCrusherRecipe('beyond_earth:moon_desh_ore', 'kubejs:crushed_desh_ore', 2, 0.25, 'beyond_earth:moon_sand')
    // Mars
    strataOreCrusherRecipe('beyond_earth:mars_iron_ore', 'create:crushed_iron_ore', 2, 0.25, 'beyond_earth:mars_sand', Item.of('immersiveengineering:dust_saltpeter').withChance(0.50))
    strataOreCrusherRecipe('beyond_earth:mars_ostrum_ore', 'kubejs:crushed_ostrum_ore', 2, 0.25, 'beyond_earth:mars_sand', Item.of('immersiveengineering:dust_saltpeter').withChance(0.50))
    strataOreCrusherRecipe('beyond_earth:mars_diamond_ore', 'minecraft:diamond', 2, 0.25, 'beyond_earth:mars_sand', Item.of('immersiveengineering:dust_saltpeter').withChance(0.50))
    // Mercury
    strataOreCrusherRecipe('beyond_earth:mercury_iron_ore', 'create:crushed_iron_ore', 2, 0.25, 'beyond_earth:mercury_stone')
    // Glacio
    strataOreCrusherRecipe('beyond_earth:glacio_copper_ore', 'create:crushed_copper_ore', 2, 0.25, 'beyond_earth:glacio_stone')
    strataOreCrusherRecipe('beyond_earth:glacio_iron_ore', 'create:crushed_iron_ore', 2, 0.25, 'beyond_earth:glacio_stone')
    strataOreCrusherRecipe('beyond_earth:glacio_coal_ore', 'minecraft:coal', 2, 0.25, 'beyond_earth:glacio_stone', Item.of('immersiveengineering:dust_sulfur').withChance(0.10))
    strataOreCrusherRecipe('beyond_earth:glacio_lapis_ore', 'minecraft:lapis_lazuli', 12, 0.25, 'beyond_earth:glacio_stone')
    // Venus
    strataOreCrusherRecipe('beyond_earth:venus_gold_ore', 'create:crushed_gold_ore', 2, 0.25, 'beyond_earth:venus_sand', Item.of('immersiveengineering:dust_sulfur').withChance(0.25))
    strataOreCrusherRecipe('beyond_earth:venus_calorite_ore', 'kubejs:crushed_calorite_ore', 2, 0.25, 'beyond_earth:venus_sand', Item.of('immersiveengineering:dust_sulfur').withChance(0.25))
    strataOreCrusherRecipe('beyond_earth:venus_diamond_ore', 'minecraft:diamond', 2, 0.25, 'beyond_earth:venus_sand', Item.of('immersiveengineering:dust_sulfur').withChance(0.25))
    strataOreCrusherRecipe('beyond_earth:venus_coal_ore', 'minecraft:coal', 2, 0.25, 'beyond_earth:venus_sand', Item.of('immersiveengineering:dust_sulfur').withChance(0.75))
    // Nether
    strataOreCrusherRecipe('minecraft:nether_gold_ore', 'minecraft:gold_nugget', 7, 0.50, 'minecraft:netherrack', undefined, 'immersiveengineering:crusher/nether_gold')
    strataOreCrusherRecipe('minecraft:nether_quartz_ore', 'minecraft:quartz', 2, 0.25, 'minecraft:netherrack', undefined, 'immersiveengineering:crusher/ore_quartz')
    strataOreCrusherRecipe('malum:blazing_quartz_ore', 'malum:blazing_quartz', 2, 0.25, 'minecraft:netherrack')

    // Raw Ore Recipes
    event.recipes.immersiveengineeringCrusher('create:crushed_iron_ore', 'minecraft:raw_iron', Item.of('create:experience_nugget').withChance(0.75)).id('immersiveengineering:crusher/raw_ore_iron')
    event.recipes.immersiveengineeringCrusher('create:crushed_gold_ore', 'minecraft:raw_gold', Item.of('create:experience_nugget').withChance(0.75)).id('immersiveengineering:crusher/raw_ore_gold')
    event.recipes.immersiveengineeringCrusher('create:crushed_copper_ore', 'minecraft:raw_copper', Item.of('create:experience_nugget').withChance(0.75)).id('immersiveengineering:crusher/raw_ore_copper')
    event.recipes.immersiveengineeringCrusher('create:crushed_zinc_ore', 'create:raw_zinc', Item.of('create:experience_nugget').withChance(0.75))
    event.recipes.immersiveengineeringCrusher('create:crushed_silver_ore', 'immersiveengineering:raw_silver', Item.of('create:experience_nugget').withChance(0.75)).id('immersiveengineering:crusher/raw_ore_silver')
    event.recipes.immersiveengineeringCrusher('create:crushed_aluminum_ore', 'immersiveengineering:raw_aluminum', Item.of('create:experience_nugget').withChance(0.75)).id('immersiveengineering:crusher/raw_ore_aluminum')
    event.recipes.immersiveengineeringCrusher('kubejs:crushed_desh_ore', 'beyond_earth:raw_desh', Item.of('create:experience_nugget').withChance(0.75))
    event.recipes.immersiveengineeringCrusher('kubejs:crushed_ostrum_ore', 'beyond_earth:raw_ostrum', Item.of('create:experience_nugget').withChance(0.75))
    event.recipes.immersiveengineeringCrusher('kubejs:crushed_calorite_ore', 'beyond_earth:raw_calorite', Item.of('create:experience_nugget').withChance(0.75))

    event.recipes.immersiveengineeringCrusher('9x create:crushed_iron_ore', 'minecraft:raw_iron_block', Item.of('9x create:experience_nugget').withChance(0.75)).id('immersiveengineering:crusher/raw_block_iron')
    event.recipes.immersiveengineeringCrusher('9x create:crushed_gold_ore', 'minecraft:raw_gold_block', Item.of('9x create:experience_nugget').withChance(0.75)).id('immersiveengineering:crusher/raw_block_gold')
    event.recipes.immersiveengineeringCrusher('9x create:crushed_copper_ore', 'minecraft:raw_copper_block', Item.of('9x create:experience_nugget').withChance(0.75)).id('immersiveengineering:crusher/raw_block_copper')
    event.recipes.immersiveengineeringCrusher('9x create:crushed_zinc_ore', 'create:raw_zinc_block', Item.of('9x create:experience_nugget').withChance(0.75))
    event.recipes.immersiveengineeringCrusher('9x create:crushed_silver_ore', 'immersiveengineering:raw_block_silver', Item.of('9x create:experience_nugget').withChance(0.75)).id('immersiveengineering:crusher/raw_block_silver')
    event.recipes.immersiveengineeringCrusher('9x create:crushed_aluminum_ore', 'immersiveengineering:raw_block_aluminum', Item.of('9x create:experience_nugget').withChance(0.75)).id('immersiveengineering:crusher/raw_block_aluminum')
    event.recipes.immersiveengineeringCrusher('9x kubejs:crushed_desh_ore', 'beyond_earth:raw_desh_block', Item.of('9x create:experience_nugget').withChance(0.75))
    event.recipes.immersiveengineeringCrusher('9x kubejs:crushed_ostrum_ore', 'beyond_earth:raw_ostrum_block', Item.of('9x create:experience_nugget').withChance(0.75))
    event.recipes.immersiveengineeringCrusher('9x kubejs:crushed_calorite_ore', 'beyond_earth:raw_calorite_block', Item.of('9x create:experience_nugget').withChance(0.75))

})