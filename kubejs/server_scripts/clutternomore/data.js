/** @param {$KubeDataGenerator} e  */
function data_ClutterNoMore(e) {
    const remixWoodCNM_Json = {
        priority: 499,
        add: {}
    }

    const addition = (stem, variants) => {
        if (stem == undefined) return
        remixWoodCNM_Json.add[stem] = variants.filter(item => { return item != undefined })
    }


    addition('farmersdelight:rope_fence', [
        'farmersdelight:rope_fence_gate',
    ])

    // colours
    global.COLOURS.forEach(colour => {
        addition(`create:${colour}_seat`, [
            `bits_n_bobs:${colour}_chair`,
            `another_furniture:${colour}_sofa`
        ])
    })


    // wooden shit
    for (const [mod, woodTypes] of Object.entries(global.WOOD_TYPES)) {
        for (const [woodType, woodTypeObj] of Object.entries(woodTypes)) {
            addition(woodTypeObj.minecraft.planks, [
                woodTypeObj.nomansland.trimmed_planks,
                woodTypeObj.woodworks.boards,
                woodTypeObj.minecraft.slab,
                woodTypeObj.minecraft.stairs,
                'clutternomore:${stem}_step',
                'clutternomore:vertical_${stem}_slab',
            ])

            addition(woodTypeObj.minecraft.fence, [
                woodTypeObj.minecraft.fence_gate,
                woodTypeObj.bountifulfares.pickets,
            ])

            addition(woodTypeObj.minecraft.sign, [
                woodTypeObj.minecraft.hanging_sign,
                woodTypeObj.supplementaries.way_sign
            ])

            addition(woodTypeObj.minecraft.door, [
                woodTypeObj.minecraft.trapdoor,
                woodTypeObj.another_furniture.shutter
            ])

            addition(woodTypeObj.another_furniture.table, [
                woodTypeObj.another_furniture.shelf,
                woodTypeObj.another_furniture.chair,
                woodTypeObj.another_furniture.bench,
            ])

            addition(woodTypeObj.woodworks.chest, [
                // woodTypeObj.woodworks.trapped_chest,
                woodTypeObj.farmersdelight.cabinet,
                woodTypeObj.another_furniture.drawer,
            ])
        }
    }
    e.json('clutternomore:shape_map/remix_wood', remixWoodCNM_Json)
}