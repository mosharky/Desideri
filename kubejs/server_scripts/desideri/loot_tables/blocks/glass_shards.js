onEvent('block.loot_tables', event => {
    const glassBlocks = [
        'create:tiled_glass',
        'create:framed_glass',
        'create:horizontal_framed_glass',
        'create:vertical_framed_glass',
        'valhelsia_structures:metal_framed_glass'
    ]
    glassBlocks.forEach(block => {
        event.addBlock(block, table => {
            table.addPool(pool => {
                pool.rolls = 1
                pool
                    .addItem(block)
                    .addCondition({
                        condition: 'minecraft:match_tool',
                        predicate: {
                            enchantments: [
                                {
                                    enchantment: 'minecraft:silk_touch',
                                    levels: {
                                        min: 1
                                    }
                                }
                            ]
                        }
                    })

                pool
                    .addItem('quark:clear_shard')
                    .addCondition({
                        condition: 'quark:flag',
                        flag: 'glass_shard'
                    })
                    .addFunction({
                        function: 'minecraft:set_count',
                        count: {
                            min: 2.0,
                            max: 4.0,
                            type: 'minecraft:uniform'
                        }
                    })
                    .addFunction({
                        function: 'minecraft:apply_bonus',
                        enchantment: 'minecraft:fortune',
                        formula: 'minecraft:uniform_bonus_count',
                        parameters: {
                            bonusMultiplier: 1
                        }
                    })
                    .addFunction({
                        function: 'minecraft:limit_count',
                        limit: {
                            max: 4,
                            min: 1
                        }
                    })
                    .addFunction({
                        function: 'minecraft:explosion_decay'
                    })
            })
        })
    })
})