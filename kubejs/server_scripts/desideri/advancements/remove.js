lootrRemove = [
    '1barrel',
    '1cart',
    '1chest',
    '1shulker',
    '10loot',
    '25loot',
    '50loot',
    '100loot',
    'root',
    'social',
]
onEvent('server.datapack.high_priority', (event) => {
    // Overrides with empty json data
    lootrRemove.forEach(removal => {
        event.addJson(`lootr:advancements/${removal}.json`, {})
    })
})
