// didnt work lol
/*
onEvent('worldgen.add', event => {
    event.addOre(ore => {
        ore.id = 'kubejs:smooth_dirt'
        ore.addTarget('minecraft:dirt', 'verdure:smooth_dirt')
        ore.count([10, 15])
            .squared()
            .triangleHeight(
                anchors.aboveBottom(64),
                anchors.absolute(50)
            )
        ore.size = 32
        ore.noSurface = 0.0
        ore.worldgenLayer = 'underground_ores'
        ore.chance = 100
    })
})
*/

onEvent('worldgen.remove', event => {
    event.removeOres(ores => {
        ores.blocks = [
            'darkerdepths:silver_ore', 
            'galosphere:silver_ore',
            'galosphere:deepslate_silver_ore',
        ]
    })
})