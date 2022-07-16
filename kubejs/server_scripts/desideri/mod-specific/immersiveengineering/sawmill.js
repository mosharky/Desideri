/*
onEvent('recipes', (event) => {
    event.remove({type: 'immersiveengineering:sawmill'})
    constructedWoodTypes.forEach((variant) => {
        // Log blocks
        event.recipes.immersiveengineeringSawmill(
            // Output
            `6x ${variant.plankBlock}`,
            // Input
            variant.logBlock,
            // Secondary Output (optional)
            [{ stripping: true, output: 'thermal:sawdust' }, 'thermal:sawdust'],
            // Stripped (optional)
            variant.logBlockStripped,
        )
        // Wood blocks
        event.recipes.immersiveengineeringSawmill(
            // Output
            `8x ${variant.plankBlock}`,
            // Input
            variant.woodBlock,
            // Secondary Output (optional)
            [{ stripping: true, output: 'thermal:sawdust' }, 'thermal:sawdust'],
            // Stripped (optional)
            variant.woodBlockStripped,
        )
    })
})
*/