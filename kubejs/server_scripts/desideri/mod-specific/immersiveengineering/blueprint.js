onEvent('recipes', event => {
    event.custom({
        type: 'immersiveengineering:blueprint',
        inputs: [
            { item: 'immersiveengineering:empty_shell' },
            {
                base_ingredient: { tag: 'forge:gunpowder' },
                count: 4
            },
            {
                base_ingredient: { item: 'minecraft:fire_charge' },
                count: 2
            },
            { item: 'minecraft:dragon_breath' }
        ],
        category: 'bullet',
        result: { item: 'immersiveengineering:dragons_breath' }
    }).id('immersiveengineering:blueprint/bullet_dragonsbreath')
})