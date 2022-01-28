// Fixes weird water tag inputs with Immersive Engineering (i hope it wasn't like this for a reason..)
onEvent('recipes', event => {
    event.custom({
        type: 'immersiveengineering:turn_and_copy',
        pattern: [
            'ici',
            'cbc',
            'ici'
        ],
        key: {
            i: { tag: 'forge:sheetmetals/steel' },
            c: { tag: 'forge:plates/copper' },
            b: { item: 'minecraft:water_bucket' }
        },
        result: {
            item: 'immersiveengineering:radiator',
            count: 4
        },
        quarter_turn: true
    }).id('immersiveengineering:crafting/radiator')
    event.custom({
        type: 'immersiveengineering:turn_and_copy',
        group: 'ie_concrete',
        pattern: [
            'scs',
            'gbg',
            'scs'
        ],
        key: {
            s: { tag: 'forge:sand' },
            c: { tag: 'forge:clay' },
            g: { tag: 'forge:gravel' },
            b: { item: 'minecraft:water_bucket' }
        },
        result: {
            item: 'immersiveengineering:concrete',
            count: 8
        },
        quarter_turn: true
    }).id('immersiveengineering:crafting/concrete')
    event.custom({
        type: 'immersiveengineering:turn_and_copy',
        group: 'ie_concrete',
        pattern: [
            'scs',
            'gbg',
            'scs'
        ],
        key: {
            s: { item: 'immersiveengineering:slag' },
            c: { tag: 'forge:clay' },
            g: { tag: 'forge:gravel' },
            b: { item: 'minecraft:water_bucket' }
        },
        result: {
            item: 'immersiveengineering:concrete',
            count: 12
        },
        quarter_turn: true
    }).id('immersiveengineering:crafting/concrete2')
    event.custom({
        type: 'immersiveengineering:shapeless_fluid',
        ingredients: [
            { tag: 'forge:dusts/wood' },
            { tag: 'forge:dusts/wood' },
            { tag: 'forge:dusts/wood' },
            { tag: 'forge:dusts/wood' },
            { item: 'minecraft:water_bucket' }
        ],
        result: {
            item: 'minecraft:paper',
            count: 2
        }
    }).id('immersiveengineering:crafting/paper_from_sawdust')
})