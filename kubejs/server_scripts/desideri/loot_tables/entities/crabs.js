onEvent('entity.loot_tables', event => {
    // Coconut Crab
    event.modifyEntity('ecologics:coconut_crab', table => {
        table.addPool(pool => {
            // Shell entry
            pool.rolls = 1
            pool
                .addCondition({
                    condition: 'quark:flag',
                    flag: 'crab_brewing'
                })
                .addCondition({
                    condition: 'killed_by_player'
                })
                .addCondition({
                    condition: 'random_chance_with_looting',
                    chance: 0.25,
                    looting_multiplier: 0.03
                })
            pool.addItem('quark:crab_shell')
        })
        table.addPool(pool => {
            // Leg entry
            pool.rolls = 1
            pool
                .addItem('quark:crab_leg')
                .addFunction({
                    function: 'set_count',
                    count: {
                        type: 'minecraft:uniform',
                        min: 0,
                        max: 1,
                    }
                })
                .addFunction({
                    function: 'minecraft:furnace_smelt',
                    conditions: [
                        {
                            condition: 'minecraft:entity_properties',
                            predicate: {
                                flags: {
                                    is_on_fire: true
                                }
                            },
                            entity: 'this'
                        }
                    ]
                })
                .addFunction({
                    function: 'looting_enchant',
                    count: {
                        min: 0,
                        max: 1
                    }
                })
        })
    })

    // Quark Crabs
    event.modifyEntity('quark:crab', table => {
        table.addPool(pool => {
            pool.rolls = 1
            pool
                .addItem('ecologics:crab_claw')
                .randomChance(0.25)
                .addFunction({
                    function: 'minecraft:furnace_smelt',
                    conditions: [
                        {
                            condition: 'minecraft:entity_properties',
                            predicate: {
                                flags: {
                                    is_on_fire: true
                                }
                            },
                            entity: 'this'
                        }
                    ]
                })
        })
    })
})
