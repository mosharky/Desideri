// overrides json files with empty json data
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
    'supplementaries:loot_tables/inject/dungeon_flax',
    'supplementaries:loot_tables/inject/end_city_stasis',
    'supplementaries:loot_tables/inject/mineshaft_flax',
    'supplementaries:loot_tables/inject/pillager_flax',
    'supplementaries:loot_tables/inject/shipwreck_storage_flax',
    'thermal:loot_modifiers/seeds_from_grass',
    'alexsmobs:loot_modifiers/banana_drop'
]

onEvent('server.datapack.high_priority', event => {
    removeJson.forEach(removal => event.addJson(`${removal}.json`, {} ))
})
