onEvent('recipes', (event) => {
    event.remove({ type: 'create:cutting' })
    constructedWoodTypes.forEach((variant) => {
        // Log blocks
        event.recipes.createCutting(
            // Output
            [variant.logBlockStripped, 'thermal:sawdust'],
            // Input
            variant.logBlock
        )
        event.recipes.createCutting(
            // Output
            [`6x ${variant.plankBlock}`, 'thermal:sawdust'],
            // Input
            variant.logBlockStripped
        )
        // Wood blocks
        event.recipes.createCutting(
            // Output
            [variant.woodBlockStripped, 'thermal:sawdust'],
            // Input
            variant.woodBlock
        )
        event.recipes.createCutting(
            // Output
            [`8x ${variant.plankBlock}`, 'thermal:sawdust'],
            // Input
            variant.woodBlockStripped
        )
    })
})