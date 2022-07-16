/*
    input: 'ItemId' or 'TagId'
    additionalInput: [ItemId]
    result: { count: 0, item: 'ItemId' }
    secondaryResult: [{ chance: 0, item: 'ItemId' }]
    slag: true or false
    energy: FE amount
    time: seconds
    id: recipeId
 
    additionalInput, secondaryResult, slag, id are optional fields
*/

/*
const ArcFurnaceRecipes = [
    {
        input: '#forge:dusts/aluminum',
        result: { count: 1, item: 'immersiveengineering:ingot_aluminum' },
        energy: 256,
        time: 2,
        id: 'immersiveengineering:arcfurnace/dust_aluminum'
    },
    {
        input: '#forge:dusts/silver',
        result: { count: 1, item: 'immersiveengineering:ingot_silver' },
        energy: 256,
        time: 2,
        id: 'immersiveengineering:arcfurnace/dust_silver'
    },
    {
        input: '#forge:dusts/electrum',
        result: { count: 1, item: 'immersiveengineering:ingot_electrum' },
        energy: 256,
        time: 2,
        id: 'immersiveengineering:arcfurnace/dust_electrum'
    },
    {
        input: '#forge:dusts/steel',
        result: { count: 1, item: 'immersiveengineering:ingot_steel' },
        energy: 256,
        time: 2,
        id: 'immersiveengineering:arcfurnace/dust_steel'
    },
    {
        input: '#forge:dusts/iron',
        result: { count: 1, item: 'minecraft:iron_ingot' },
        energy: 256,
        time: 2,
        id: 'immersiveengineering:arcfurnace/dust_iron'
    },
    {
        input: '#forge:dusts/copper',
        result: { count: 1, item: 'minecraft:copper_ingot' },
        energy: 256,
        time: 2,
        id: 'immersiveengineering:arcfurnace/dust_copper'
    },
    {
        input: '#forge:dusts/gold',
        result: { count: 1, item: 'minecraft:gold_ingot' },
        energy: 256,
        time: 2,
        id: 'immersiveengineering:arcfurnace/dust_gold'
    },
    {
        input: '#forge:ingots/copper',
        additionalInput: ['3x #forge:nuggets/zinc', 'create:cinder_flour'],
        result: { count: 1, item: 'alloyed:bronze_ingot' },
        energy: 512,
        time: 5
    },
    {
        input: '#forge:ores/desh',
        result: { count: 2, item: 'beyond_earth:desh_ingot' },
        energy: 512,
        time: 10,
        slag: true
    },
    {
        input: '#forge:ores/calorite',
        result: { count: 2, item: 'beyond_earth:calorite_ingot' },
        energy: 512,
        time: 10,
        slag: true
    },
    {
        input: '#forge:ores/ostrum',
        result: { count: 2, item: 'beyond_earth:ostrum_ingot' },
        energy: 512,
        time: 10,
        slag: true
    },
    {
        input: '#forge:ores/ostrum',
        result: { count: 2, item: 'beyond_earth:ostrum_ingot' },
        energy: 512,
        time: 10,
        slag: true
    },
    {
        input: 'beyond_earth:raw_desh',
        result: { count: 1, item: 'beyond_earth:desh_ingot' },
        secondaryResult: [{ chance: 0.5, item: 'beyond_earth:desh_ingot' }],
        energy: 256,
        time: 5
    },
    {
        input: 'beyond_earth:raw_ostrum',
        result: { count: 1, item: 'beyond_earth:ostrum_ingot' },
        secondaryResult: [{ chance: 0.5, item: 'beyond_earth:ostrum_ingot' }],
        energy: 256,
        time: 5
    },
    {
        input: 'beyond_earth:raw_calorite',
        result: { count: 1, item: 'beyond_earth:calorite_ingot' },
        secondaryResult: [{ chance: 0.5, item: 'beyond_earth:calorite_ingot' }],
        energy: 256,
        time: 5
    },
    {
        input: 'beyond_earth:raw_desh_block',
        result: { count: 13, item: 'beyond_earth:desh_ingot' },
        secondaryResult: [{ chance: 0.5, item: 'beyond_earth:desh_ingot' }],
        energy: 2304,
        time: 45
    },
    {
        input: 'beyond_earth:raw_ostrum_block',
        result: { count: 13, item: 'beyond_earth:ostrum_ingot' },
        secondaryResult: [{ chance: 0.5, item: 'beyond_earth:ostrum_ingot' }],
        energy: 2304,
        time: 45
    },
    {
        input: 'beyond_earth:raw_calorite_block',
        result: { count: 13, item: 'beyond_earth:calorite_ingot' },
        secondaryResult: [{ chance: 0.5, item: 'beyond_earth:calorite_ingot' }],
        energy: 2304,
        time: 45
    },
]
ArcFurnaceRecipes.forEach(data => {
    data.time = data.time * 20
    data.energy = data.energy * 100
    let additiveArray = []
    if (data.additionalInput != undefined) {
        data.additionalInput.forEach(item => {
            additiveArray.push(Ingredient.of(item))
        })
    }
    let secondaryArray = []
    if (data.secondaryResult != undefined) {
        data.secondaryResult.forEach(item => {
            secondaryArray.push({
                chance: item.chance,
                output: Item.of(item.item)
            })
        })
    }
    let recipe = {
        type: 'immersiveengineering:arc_furnace',
        input: Ingredient.of(data.input),
        additives: additiveArray,
        results: [{
            count: data.result.count,
            base_ingredient: Item.of(data.result.item)
        }],
        secondaries: secondaryArray,
        time: data.time,
        energy: data.energy
    }
    if (data.slag) {
        recipe['slag'] = { item: 'thermal:slag' }
    }
    onEvent('recipes', (event) => {
        if (data.id != undefined) {
            return event.custom(recipe).id(data.id)
        } else {
            return event.custom(recipe)
        }
    })
})
*/