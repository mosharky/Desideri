// Overrides json files with empty json data
const removeJson = [
    'lootr:advancements/1barrel',
    'lootr:advancements/1cart',
    'lootr:advancements/1chest',
    'lootr:advancements/1shulker',
    'lootr:advancements/10loot',
    'lootr:advancements/25loot',
    'lootr:advancements/50loot',
    'lootr:advancements/100loot',
    'lootr:advancements/root',
    'lootr:advancements/social',
]

onEvent('server.datapack.high_priority', (event) => {
    // because regex is unsupported :(
    removeJson.forEach(removal => {
        event.addJson(`${removal}.json`, {})
    })
})
