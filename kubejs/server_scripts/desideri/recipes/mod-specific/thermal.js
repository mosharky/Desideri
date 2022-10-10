onEvent('recipes', event => {

    // ARBOREAL EXTRACTOR
    event.remove({ type: 'thermal:tree_extractor' })
    constructedWoodTypes.forEach(tree => {
        if (tree.fluid != false) {
            let fluid = tree.fluid.toJson()
            event.custom({
                type: 'thermal:tree_extractor',
                trunk: tree.logBlock,
                leaves: tree.leavesBlock,
                result: fluid
            })

            if (tree?.extraLeaves != undefined) {
                tree.extraLeaves.forEach(extraLeafBlock => {
                    event.custom({
                        type: 'thermal:tree_extractor',
                        trunk: tree.logBlock,
                        leaves: extraLeafBlock,
                        result: fluid
                    })
                })
            }
        }
    })
})

