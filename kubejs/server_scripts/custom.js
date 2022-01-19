onEvent('recipes', event => {
    // Greater Eye of Ender recipe
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            {item: 'kubejs:lesser_ender_eye'},
            {item: 'alexsmobs:blood_sac'},
            {item: 'kubejs:hemolymph_pustules'},
        ],
        result: {item: 'minecraft:ender_eye'},
        cookingtime: 200
    }).id('minecraft:ender_eye')


    // Tier 2 Rocket (Desh Plate instead of Compressed Desh)
    event.custom({
        type: 'beyond_earth:workbenching',
        input: {
            parts: {
                'beyond_earth:nose':[
                    {item: 'beyond_earth:rocket_nose_cone'}
                ],
                'beyond_earth:body': [
                    {item: 'beyond_earth:desh_plate'},
                    {item: 'beyond_earth:desh_plate'},
                    {item: 'beyond_earth:desh_plate'},
                    {item: 'beyond_earth:desh_plate'},
                    {item: 'beyond_earth:desh_plate'},
                    {item: 'beyond_earth:desh_plate'}
                ],
                'beyond_earth:tank': [
                    {item: 'beyond_earth:desh_tank'},
                    {item: 'beyond_earth:desh_tank'}
                ],
                'beyond_earth:fin_left': [
                    {item: 'beyond_earth:oxygen_tank'},
                    {item: 'beyond_earth:rocket_fin'}
                ],
                'beyond_earth:fin_right': [
                    {item: 'beyond_earth:oxygen_tank'},
                    {item: 'beyond_earth:rocket_fin'}
                ],
                'beyond_earth:engine': [
                    {item: 'beyond_earth:desh_engine'}
                ]
            }
        },
        output: {
            item: 'beyond_earth:rocket_t2',
            count: 1
        }
    }).id('beyond_earth:workbenching/tier2')
})