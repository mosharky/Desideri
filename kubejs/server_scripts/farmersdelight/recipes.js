/** @param {$RecipesKubeEvent} e */
function recipes_FarmersDelight(e) {
    // FD dough > create
    e.recipes.create.splashing('farmersdelight:wheat_dough', 'bountifulfares:flour')
    e.recipes.create.mixing('farmersdelight:wheat_dough', ['bountifulfares:flour', Fluid.of('minecraft:water', 250)])

    // flour to dough recipes
    e.remove({ id: 'farmersdelight:wheat_dough_from_water' })
    e.remove({ id: 'farmersdelight:wheat_dough_from_egg' })
    e.shaped('8x farmersdelight:wheat_dough', ['AAA', 'ABA', 'AAA'], { A: '#c:flour', B: '#c:eggs' })

    e.replaceInput({}, 'farmersdelight:wheat_dough', '#c:foods/dough')

    // dough / bread instead of wheat
    e.replaceInput({ id: 'neapolitan:banana_bread' }, 'minecraft:wheat', '#c:foods/dough')
    e.replaceInput({ id: 'abnormals_delight:pumpkin_bread' }, 'minecraft:wheat', '#c:foods/dough')

    RECIPES.Cookie(e, 'farmersdelight:sweet_berry_cookie', 'minecraft:sweet_berries', true)
    RECIPES.Cookie(e, 'farmersdelight:honey_cookie', 'minecraft:honey_bottle', true)

    // duplicate recipes
    e.remove({ id: 'farmersdelight:cake_from_milk_bottle' })

    if (Platform.isLoaded('immersive_weathering')) {
        e.replaceInput({}, 'farmersdelight:tree_bark', '#immersive_weathering:bark')

        // Replace tree bark for Immersive Weathering barks
        for (const [mod, woodTypes] of Object.entries(global.WOOD_TYPES)) {
            for (const [woodType, woodTypeObj] of Object.entries(woodTypes)) {
                if (woodTypeObj.minecraft.log != undefined && woodTypeObj.immersive_weathering.bark != undefined) {
                    e.recipes.farmersdelight.cutting(
                        woodTypeObj.minecraft.log,
                        { type: 'farmersdelight:tool_action', action: 'axe_strip' },
                        [woodTypeObj.minecraft.stripped_log, woodTypeObj.immersive_weathering.bark],
                        'minecraft:item.axe.strip'
                    )
                }

                if (woodTypeObj.minecraft.wood != undefined && woodTypeObj.immersive_weathering.bark != undefined) {
                    e.recipes.farmersdelight.cutting(
                        woodTypeObj.minecraft.wood,
                        { type: 'farmersdelight:tool_action', action: 'axe_strip' },
                        [woodTypeObj.minecraft.stripped_wood, woodTypeObj.immersive_weathering.bark],
                        'minecraft:item.axe.strip'
                    )
                }
            }
        }
    }
}
