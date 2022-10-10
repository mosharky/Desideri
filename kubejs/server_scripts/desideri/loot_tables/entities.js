onEvent('lootjs', event => {

    // Ecologics Coconut Crabs
    event
        .addEntityLootModifier('ecologics:coconut_crab')
        // Shell pool
        .pool((p) => {
            p.customCondition({ // no idea if this is important
                condition: 'quark:flag',
                flag: 'crab_brewing'
            })
            p.killedByPlayer()
            p.randomChanceWithLooting(0.25, 3)
            p.addLoot('quark:crab_shell')
        })
        // Leg pool
        .pool((p) => {
            p.addLoot('quark:crab_leg')
            p.limitCount([0, 2])
            p.applyLootingBonus([0, 1])
            p.matchEntity((entity) => {
                entity.isOnFire(true)
            })
            p.functions(Item.of('quark:crab_leg'), (f) => {
                f.smeltLoot()
            })
        })

    // Quark Crabs
    event
        .addEntityLootModifier('quark:crab')
        .randomChanceWithLooting(0.25, 3)
        .addLoot('ecologics:crab_claw')
        .matchEntity((entity) => {
            entity.isOnFire(true)
        })
        .functions(Item.of('ecologics:crab_claw'), (f) => {
            f.smeltLoot()
        })
})
