/** @param {$KubeDataGenerator} e  */
function worldgen_Idas(e) {
    // Replace all mentions of quark:wraith
    const idasSpawners = [
        'generic', 
        'nexus', 
        'ruins_of_the_deep_top', 
        'wizard_tower'
    ].forEach(spawner => {
        const json = global.readJson('idas', `idas:integrated_structure_spawners/${spawner}.json`)
        json.mobs.forEach(mob => {
            if (global.ENTITY_SWAPPER.get(`${mob.name}`) != undefined) {
                mob.name = global.ENTITY_SWAPPER.get(`${mob.name}`)
            }
        })
        e.json(`idas:integrated_structure_spawners/${spawner}.json`, json)
    })


    // Only the ones with quark:wraith mentioned
    const idasStructures = [
        'ancient_mines',
        'haunted_manor',
        'necromancers_spire',
        'nexus',
        'ancient_portal/ancient_portal',
        'ancient_portal/nether_ancient_portal',
        'sunken_ship/sunken_ship_coral',
        'sunken_ship/sunken_ship'
    ].forEach(structure => {
        const json = global.readJson('idas', `idas:worldgen/structure/${structure}.json`)
        json.spawn_overrides.monster.spawns.forEach(spawn => {
            if (global.ENTITY_SWAPPER.get(`${spawn.name}`) != undefined) {
                spawn.name = global.ENTITY_SWAPPER.get(`${spawn.name}`)
            }
        })
        e.json(`idas:worldgen/structure/${structure}.json`, json)
    })
}
