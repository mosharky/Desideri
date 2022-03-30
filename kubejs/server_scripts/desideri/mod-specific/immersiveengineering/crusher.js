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
    strataOreCrusherRecipe('minecraft:iron_ore', 'create:crushed_iron_ore', 2, 0.25, 'minecraft:cobblestone')
    // Deepslate
    strataOreCrusherRecipe('minecraft:deepslate_gold_ore', 'create:crushed_gold_ore', 2, 0.25, 'minecraft:cobbled_deepslate')
    strataOreCrusherRecipe('minecraft:deepslate_copper_ore', 'create:crushed_copper_ore', 2, 0.25, 'minecraft:cobbled_deepslate')
    strataOreCrusherRecipe('minecraft:deepslate_coal_ore', 'minecraft:coal', 2, 0.25, 'minecraft:cobbled_deepslate', Item.of('immersiveengineering:dust_sulfur').withChance(0.15))
    strataOreCrusherRecipe('minecraft:deepslate_diamond_ore', 'minecraft:diamond', 2, 0.25, 'minecraft:cobbled_deepslate')
    strataOreCrusherRecipe('minecraft:deepslate_redstone_ore', 'minecraft:redstone', 7, 0.25, 'minecraft:cobbled_deepslate')
    strataOreCrusherRecipe('minecraft:deepslate_lapis_ore', 'minecraft:lapis_lazuli', 12, 0.25, 'minecraft:cobbled_deepslate')
    strataOreCrusherRecipe('minecraft:deepslate_iron_ore', 'create:crushed_iron_ore', 2, 0.25, 'minecraft:cobbled_deepslate')
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
    //Venus
    strataOreCrusherRecipe('beyond_earth:venus_gold_ore', 'create:crushed_gold_ore', 2, 0.25, 'beyond_earth:venus_sand', Item.of('immersiveengineering:dust_sulfur').withChance(0.25))
    strataOreCrusherRecipe('beyond_earth:venus_calorite_ore', 'kubejs:crushed_calorite_ore', 2, 0.25, 'beyond_earth:venus_sand', Item.of('immersiveengineering:dust_sulfur').withChance(0.25))
    strataOreCrusherRecipe('beyond_earth:venus_diamond_ore', 'minecraft:diamond', 2, 0.25, 'beyond_earth:venus_sand', Item.of('immersiveengineering:dust_sulfur').withChance(0.25))
    strataOreCrusherRecipe('beyond_earth:venus_coal_ore', 'minecraft:coal', 2, 0.25, 'beyond_earth:venus_sand', Item.of('immersiveengineering:dust_sulfur').withChance(0.75))
})