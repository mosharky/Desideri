// priority: 1
/*
Avoid using biome modifiers to add vanilla placed features to biomes, 
as this may cause a feature cycle violation (the game will crash if two biomes 
have the same two features in their feature lists but in different orders). 

Placed features can be referenced in biome jsons or added via biome modifiers, but should not be used in both.

Avoid adding the same placed feature with more than one biome modifier, as this can cause feature cycle violations.

for adding to all biomes:
    'biomes': {
        'type': 'neoforge:any'
    }

Steps (in order): 
- raw_generation
- lakes
- local_modifications
- underground_structures
- surface_structures
- strongholds
- underground_ores
- underground_decoration
- fluid_springs
- vegetal_decoration
- top_layer_modification
*/

const PLACED = 'placed'
const CONFIGURED = 'configured'
const RAW_GENERATION = 'raw_generation'
const LAKES = 'lakes'
const LOCAL_MODIFICATIONS = 'local_modifications'
const UNDERGROUND_STRUCTURES = 'underground_structures'
const SURFACE_STRUCTURES = 'surface_structures'
const STRONGHOLDS = 'strongholds'
const UNDERGROUND_ORES = 'underground_ores'
const UNDERGROUND_DECORATION = 'underground_decoration'
const FLUID_SPRINGS = 'fluid_springs'
const VEGETAL_DECORATION = 'vegetal_decoration'
const TOP_LAYER_MODIFICATION = 'top_layer_modification'


/**
 * Processes string into an ID for a feature
 * @param {String | Array.<String>} input
 * @returns {String}
 */
function nameProcess(input) {
    let filename = ''
    if (typeof input == 'string') filename = input.replace(':', '_')
    else filename = input[0].replace(':', '_')
    if (filename.includes('#')) filename = filename.slice(1)
    return filename
}

/**
 * Stops a placed feature from generating
 * @param {$KubeDataGenerator} event - generateData event
 * @param {String | Array.<String>} features - The placed feature ID string or array of ID strings
 * @param {String | Array.<String>} biomes - A biome ID, or biome tag, or an array of biomes
 * @param {String} step - The generation step
 * @param {Optional | String} id - Modifier ID
 */
function removeFeatures(event, features, biomes, step, id) {
    if (typeof features == 'string') features = [features]
    let obj = {
        type: 'lithostitched:remove_features',
        biomes: biomes,
        features: features,
        step: step
    }
    id == undefined
        ? event.json(`kubejs:lithostitched/worldgen_modifier/remove_feature/${nameProcess(features)}`, obj)
        : event.json(`kubejs:lithostitched/worldgen_modifier/remove_feature/${id}`, obj)

}

/**
 * Adds placed features to biomes
 * @param {$KubeDataGenerator} event - generateData event
 * @param {String | Array.<String>} features - The placed feature ID string or array of ID strings
 * @param {String | Array.<String>} biomes - A biome ID, or biome tag, or an array of biomes
 * @param {String} step - The generation step
 * @param {Optional | String} id - Modifier ID
 */
function addFeatures(event, features, biomes, step, id) {
    if (typeof features == 'string') features = [features]
    let obj = {
        type: 'lithostitched:add_features',
        biomes: biomes,
        features: features,
        step: step
    }
    id == undefined
        ? event.json(`kubejs:lithostitched/worldgen_modifier/add_feature/${nameProcess(features)}`, obj)
        : event.json(`kubejs:lithostitched/worldgen_modifier/add_feature/${id}`, obj)
}

/**
 * Copies a placed feature JSON from kubejs/_mod_data
 * @param {$KubeDataGenerator} event - generateData event
 * @param {String} modId - Which mods' jar this feature is found in
 * @param {String} featureType - 'placed' or 'configured'
 * @param {String} featureId - Feature ID (i.e.: 'minecraft:oak_tree)
 * @returns {String} Copied Feature ID
 */
function copyPasteFeature(event, modId, featureType, featureId) {
    let copiedFeatureName = 'copied_' + featureId.replace(':', '_')
    event.json(`kubejs:worldgen/${featureType}_feature/${copiedFeatureName}`, getFeatureJson(modId, featureType, featureId))
    return `kubejs:${copiedFeatureName}`
}

/**
 * Registers a feature in location featureId
 * @param {$KubeDataGenerator} event - generateData event
 * @param {String} type - CONFIGURED or PLACED
 * @param {String} featureId - Feature ID (i.e. `minecraft:oak_tree`)
 * @param {Object} featureJson - Feature JSON object
 * @returns {String} Returns featureId
 */
function registerFeature(event, type, featureId, featureJson) {
    if (type != CONFIGURED && type != PLACED) {
        console.error(`Incorrect feature type "${type}" for feature: "${featureId}"`)
        console.log(featureJson)
        return
    }
    let replaceIdSplit = featureId.split(':')
    event.json(`${replaceIdSplit[0]}:worldgen/${type}_feature/${replaceIdSplit[1]}`, featureJson)
    return featureId
}

/**
 * Remove a forge biome modifier
 * @param {$KubeDataGenerator} event - generateData event
 * @param {String} modifier - mod id + modifier name (ex: 'eidolon:silver_ore')
 */
function removeBiomeModifier(event, modifier) {
    let namespace = modifier.split(':')[0]
    let filename = modifier.split(':')[1]
    event.json(`${namespace}:neoforge/biome_modifier/${filename}`, { type: 'neoforge:none' })
}


/**
 * Remove entity spawns from biomes
 * @param {$KubeDataGenerator} event - generateData event
 * @param {String | Array.<String>} mobs - An entity ID, or entity type tag, or an array of entities
 * @param {String | Array.<String>} biomes - A biome ID, or biome tag, or an array of biomes
 * @param {Optional | String} id - Modifier ID
 */
function removeSpawns(event, mobs, biomes) {
    let obj = {
        type: 'lithostitched:remove_biome_spawns',
        biomes: biomes,
        mobs: mobs
    }
    id == undefined
        ? event.json(`kubejs:lithostitched/worldgen_modifier/remove_spawn/${nameProcess(mobs)}`, obj)
        : event.json(`kubejs:lithostitched/worldgen_modifier/remove_spawn/${id}`, obj)
}

/**
 * Get feature JSON object by type
 * @param {String} modId - Which mods' jar this feature is found in
 * @param {String} featureType - 'placed' or 'configured'
 * @param {String} featureId - Feature ID (i.e.: 'minecraft:oak_tree)
 * @returns {Object} Feature JSON
 */
function getFeatureJson(modId, featureType, featureId) {
    let featureSplit = featureId.split(':')
    let namespace = featureSplit[0]
    let featureName = featureSplit[1]
    return global.readJson(modId, `${namespace}:worldgen/${featureType}_feature/${featureName}`)
}

/**
 * @param {String} plant - The block ID of the plant
 * @returns {Object} - A would_survive predicate object
 */
function wouldSurvive(plant) {
    const properties = {}
    if (plant.includes('sapling')) properties.stage = 0
    else properties.age = 0
    return {
        type: 'minecraft:block_predicate_filter',
        predicate: {
            type: 'minecraft:would_survive',
            state: {
                Name: plant,
                Properties: properties
            }
        }
    }
}


/**
 * Create a configured and placed feature
 * @param {$KubeDataGenerator} event - generateData event
 * @param {String} blockId - The block ID to generate patches of
 * @param {Number} tries - Number of attempts to place the patch
 * @param {Number} xzSpread 
 * @param {Number} ySpread 
 * @param {Number} rarity - A 1 / 'rarity' chance to generate
 * @param {Optional | Object} state - Block state object if needed
 * @returns {String} - The placed feature ID
 */
function configuredFoliagePatch(e, blockId, tries, xzSpread, ySpread, rarity, state) {
    let featureId = `kubejs:patch_${blockId.replace(':', '_')}`
    let stateExists = state != undefined
    registerFeature(e, CONFIGURED, featureId, {
        type: 'minecraft:random_patch',
        config: {
            feature: {
                feature: {
                    type: 'minecraft:simple_block',
                    config: {
                        to_place: {
                            type: 'minecraft:simple_state_provider',
                            state: stateExists ? { Name: blockId, Properties: state } : { Name: blockId }
                        }
                    }
                },
                placement: [
                    {
                        type: 'minecraft:block_predicate_filter',
                        predicate: {
                            type: 'minecraft:matching_blocks',
                            blocks: 'minecraft:air'
                        }
                    }
                ]
            },
            tries: tries,
            xz_spread: xzSpread,
            y_spread: ySpread
        }
    })

    registerFeature(e, PLACED, featureId, {
        feature: featureId,
        placement: [
            {
                type: 'minecraft:rarity_filter',
                chance: rarity
            },
            {
                type: 'minecraft:in_square'
            },
            {
                type: 'minecraft:heightmap',
                heightmap: 'WORLD_SURFACE_WG'
            },
            {
                type: 'minecraft:biome'
            }
        ]
    })

    return featureId
}


/**
 * @param {$KubeDataGenerator} event - generateData event
 * @param {String} block - The block ID to register a cliff for
 * @param {Number} count 
 * @param {Number} xzMin 
 * @param {Number} xzMax 
 * @param {Number} yMin 
 * @param {Number} yMax 
 * @param {Array<String>} toReplaceAt0
 * @param {Array<String>} toReplace
 * @param {Boolean} placedWeird 
 * @param {String} id
 * @returns {String} - The placed feature ID
 */
function registerCliff(event, block, count, xzMin, xzMax, yMin, yMax, toReplaceAt0, toReplace, placedWeird, id) {
    let featureId = `kubejs:${block.replace(':', '_')}_cliff`
    if (id != undefined) featureId = id

    registerFeature(event, CONFIGURED, featureId, {
        type: 'minecraft:random_selector',
        config: {
            features: [],
            default: {
                feature: {
                    type: 'minecraft:simple_block',
                    config: {
                        to_place: {
                            type: 'minecraft:simple_state_provider',
                            state: { Name: block }
                        }
                    }
                },
                placement: [
                    { type: 'count', count: count },
                    {
                        type: 'minecraft:random_offset',
                        xz_spread: {
                            type: 'minecraft:uniform',
                            min_inclusive: xzMin,
                            max_inclusive: xzMax
                        },
                        y_spread: {
                            type: 'minecraft:uniform',
                            min_inclusive: yMin,
                            max_inclusive: yMax
                        }
                    },
                    {
                        type: 'minecraft:block_predicate_filter',
                        predicate: {
                            type: 'minecraft:all_of',
                            predicates: [
                                {
                                    type: 'minecraft:matching_blocks',
                                    offset: [0, 0, 0],
                                    blocks: toReplaceAt0
                                },
                                {
                                    type: 'minecraft:all_of',
                                    predicates: [
                                        {
                                            type: 'minecraft:any_of',
                                            predicates: [
                                                { type: 'minecraft:matching_blocks', offset: [-1, 1, 0], blocks: toReplace },
                                                { type: 'minecraft:matching_blocks', offset: [-1, 1, 1], blocks: toReplace },
                                                { type: 'minecraft:matching_blocks', offset: [-1, 1, -1], blocks: toReplace },
                                                { type: 'minecraft:matching_blocks', offset: [0, 1, 1], blocks: toReplace },
                                                { type: 'minecraft:matching_blocks', offset: [0, 1, -1], blocks: toReplace },
                                                { type: 'minecraft:matching_blocks', offset: [1, 1, -1], blocks: toReplace },
                                                { type: 'minecraft:matching_blocks', offset: [1, 1, 0], blocks: toReplace },
                                                { type: 'minecraft:matching_blocks', offset: [1, 1, 1], blocks: toReplace }
                                            ]
                                        },
                                        {
                                            type: 'minecraft:any_of',
                                            predicates: [
                                                { type: 'minecraft:matching_blocks', offset: [-1, 2, 0], blocks: toReplace },
                                                { type: 'minecraft:matching_blocks', offset: [-1, 2, 1], blocks: toReplace },
                                                { type: 'minecraft:matching_blocks', offset: [-1, 2, -1], blocks: toReplace },
                                                { type: 'minecraft:matching_blocks', offset: [0, 2, 1], blocks: toReplace },
                                                { type: 'minecraft:matching_blocks', offset: [0, 2, -1], blocks: toReplace },
                                                { type: 'minecraft:matching_blocks', offset: [1, 2, -1], blocks: toReplace },
                                                { type: 'minecraft:matching_blocks', offset: [1, 2, 0], blocks: toReplace },
                                                { type: 'minecraft:matching_blocks', offset: [1, 2, 1], blocks: toReplace }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ]
            }
        }
    })

    const placedJson = {
        feature: featureId,
        placement: [
            { type: 'minecraft:count', count: 256 },
            { type: 'minecraft:in_square' },
            { type: 'heightmap', heightmap: 'WORLD_SURFACE_WG' },
            { type: 'minecraft:biome' }
        ]
    }
    if (placedWeird) placedJson.placement[1] = {
        type: 'minecraft:random_offset',
        xz_spread: {
            type: 'minecraft:uniform',
            min_inclusive: 0,
            max_inclusive: 15
        },
        y_spread: {
            type: 'minecraft:uniform',
            min_inclusive: 0,
            max_inclusive: 0
        }
    }
    registerFeature(event, PLACED, featureId, placedJson)

    return featureId
}

function disableBlueprintBiome(e, biomeSlice) {
    const split = biomeSlice.split(':')
    e.json(`${split[0]}:blueprint/modded_biome_slices/${split[1]}`, {
        levels: ['minecraft:overworld'],
        weight: 0,
        provider: {
            type: "blueprint:multi_noise",
            areas: { 'environmental:marsh_area': "environmental:marsh" },
            biomes: [{ // Not sure if this field is needed but whatever
                biome: 'blueprint:original_source_marker',
                parameters: {
                    continentalness: [1.0, 1.1],
                    depth: 0.0,
                    erosion: [-1.0, 1.0],
                    humidity: [-1.0, 1.0],
                    offset: 0.0,
                    temperature: [-1.0, 1.0],
                    weirdness: [-1.0, 1.0]
                }
            }],
            only_map_from_areas: true
        }
    })
}
