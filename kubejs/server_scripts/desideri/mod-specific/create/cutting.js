onEvent('recipes', (event) => {
    event.remove({ type: 'create:cutting' })
    constructedWoodTypes.forEach((variant) => {
        // Log blocks
        event.recipes.createCutting(
            // Output
            [variant.logBlockStripped, 'immersiveengineering:dust_wood'],
            // Input
            variant.logBlock
        )
        event.recipes.createCutting(
            // Output
            [`6x ${variant.plankBlock}`, 'immersiveengineering:dust_wood'],
            // Input
            variant.logBlockStripped
        )
        // Wood blocks
        event.recipes.createCutting(
            // Output
            [variant.woodBlockStripped, 'immersiveengineering:dust_wood'],
            // Input
            variant.woodBlock
        )
        event.recipes.createCutting(
            // Output
            [`8x ${variant.plankBlock}`, 'immersiveengineering:dust_wood'],
            // Input
            variant.woodBlockStripped
        )
    })
})