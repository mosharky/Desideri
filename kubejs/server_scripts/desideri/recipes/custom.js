/*
onEvent('recipes', event => {
    // Tier 1 Rocket (Steel Plate instead of Compressed Steel)
    event.custom({
        type: 'beyond_earth:nasa_workbench',
        input: {
            parts: {
                'beyond_earth:nose':[
                    {item: 'beyond_earth:rocket_nose_cone'}
                ],
                'beyond_earth:body': [
                    {tag: 'forge:plates/steel'},
                    {tag: 'forge:plates/steel'},
                    {tag: 'forge:plates/steel'},
                    {tag: 'forge:plates/steel'},
                    {tag: 'forge:plates/steel'},
                    {tag: 'forge:plates/steel'}
                ],
                'beyond_earth:tank': [
                    {item: 'beyond_earth:steel_tank'},
                    {item: 'beyond_earth:steel_tank'}
                ],
                'beyond_earth:fin_left': [
                    {item: 'beyond_earth:rocket_fin'},
                    {item: 'beyond_earth:rocket_fin'}
                ],
                'beyond_earth:fin_right': [
                    {item: 'beyond_earth:rocket_fin'},
                    {item: 'beyond_earth:rocket_fin'}
                ],
                'beyond_earth:engine': [
                    {item: 'beyond_earth:steel_engine'}
                ]
            }
        },
        output: {
            item: 'beyond_earth:rocket_t1',
            count: 1
        }
    }).id('beyond_earth:nasa_workbenching/tier1')
    // Tier 2 Rocket (Desh Plate instead of Compressed Desh)
    event.custom({
        type: 'beyond_earth:nasa_workbench',
        input: {
            parts: {
                'beyond_earth:nose':[
                    {item: 'beyond_earth:rocket_nose_cone'}
                ],
                'beyond_earth:body': [
                    {tag: 'forge:plates/desh'},
                    {tag: 'forge:plates/desh'},
                    {tag: 'forge:plates/desh'},
                    {tag: 'forge:plates/desh'},
                    {tag: 'forge:plates/desh'},
                    {tag: 'forge:plates/desh'}
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
    }).id('beyond_earth:nasa_workbenching/tier2')
})
*/