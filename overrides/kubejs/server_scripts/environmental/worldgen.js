/** @param {$KubeDataGenerator} e  */
function worldgen_Environmental(e) {

    // Disable all biomes
    // disableBlueprintBiome(e, 'environmental:blossom')
    disableBlueprintBiome(e, 'environmental:marsh')
    disableBlueprintBiome(e, 'environmental:pine_barrens')

    BIOLITH.BIOME_PLACEMENT.replacements.push(
        {
            dimension: 'minecraft:overworld',
            target: 'minecraft:birch_forest',
            biome: 'environmental:blossom_woods',
            proportion: 0.3
        },
        {
            dimension: 'minecraft:overworld',
            target: 'minecraft:swamp',
            biome: 'environmental:marsh',
            proportion: 0.3
        },
        {
            dimension: 'minecraft:overworld',
            target: 'minecraft:mangrove_swamp',
            biome: 'environmental:marsh',
            proportion: 0.1
        },
    )
    BIOLITH.BIOME_PLACEMENT.sub_biomes.push(
        {
            dimension: 'minecraft:overworld',
            target: 'environmental:blossom_woods',
            biome: 'environmental:blossom_valleys',
            criterion: {
                type: 'biolith:value',
                parameter: 'peaks_valleys',
                max: 0.05
            }
        },
        {
            dimension: 'minecraft:overworld',
            target: 'minecraft:swamp',
            biome: 'environmental:marsh',
            criterion: {
                type: 'biolith:any_of',
                criteria: [
                    { type: 'biolith:neighbor', biome: '#minecraft:is_forest' },
                    { type: 'biolith:neighbor', biome: '#minecraft:is_ocean' }
                ]
            }
        }
    )

    replaceEffects(e, 'environmental:marsh', {
        grass_color: 8893516,
        fog_color: 12906239,
        foliage_color: 8230207,
        sky_color: 7715315,
        water_color: 3902136,
        water_fog_color: 2388383
    })

    // Disable biome modifiers
    removeBiomeModifier(e, 'environmental:add_feature/cattails')
    removeBiomeModifier(e, 'environmental:remove_feature/swamp_oak')  // not sure if this is even needed

    // removeBiomeModifier(e, 'environmental:add_feature/flower_forest_vegetation')
    // addFeatures(e, 'environmental:patch_delphiniums', '#kubejs:has_feature/environmental_delphiniums', VEGETAL_DECORATION)

    removeBiomeModifier(e, 'environmental:add_feature/swamp_vegetation')
    removeBiomeModifier(e, 'environmental:add_feature/bluebell')

    // Disable creature stuff
    removeBiomeModifier(e, 'environmental:add_spawn/deer_meadow')
    removeBiomeModifier(e, 'environmental:add_spawn/deer')
    removeBiomeModifier(e, 'environmental:add_spawn/duck_rare')
    removeBiomeModifier(e, 'environmental:add_spawn/duck')
    removeBiomeModifier(e, 'environmental:add_spawn/pig')
    removeBiomeModifier(e, 'environmental:add_spawn/reindeer')
    removeBiomeModifier(e, 'environmental:remove_spawn/chicken')
    removeBiomeModifier(e, 'environmental:remove_spawn/cow')
    removeBiomeModifier(e, 'environmental:remove_spawn/pig')
    removeBiomeModifier(e, 'environmental:remove_spawn/sheep')

    // Replace pine tree with windswept pine tree
    registerFeature(e, CONFIGURED, 'environmental:pine_bees_0002', getFeatureJson('windswept', CONFIGURED, 'windswept:pine_bees'))

    // Replace marsh trees
    registerFeature(e, CONFIGURED, 'environmental:marsh_oak', {
        type: 'minecraft:random_selector',
        config: {
            default: 'nomansland:willow_checked',
            features: [
                { chance: 0.4, feature: 'kubejs:weeping_willow_checked' },  // defined in NML worldgen script
                { chance: 0.3, feature: 'nomansland:small_willow_checked' },
            ]
        }
    })

    removeFeatures(e, ['environmental:cattails_dense', 'environmental:patch_duckweed'], 'environmental:marsh', VEGETAL_DECORATION)

    addFeatures(e, [
        copyPasteFeature(e, 'environmental', PLACED, 'environmental:dwarf_spruce'),
        copyPasteFeature(e, 'environmental', PLACED, 'environmental:dwarf_spruce_thicket'),
    ], '#kubejs:has_feature/environmental_dwarf_spruce',
        VEGETAL_DECORATION
    )

    addFeatures(e, copyPasteFeature(e, 'environmental', PLACED, 'environmental:flower_red_lotus'), '#kubejs:has_feature/environmental_flower_red_lotus', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'environmental', PLACED, 'environmental:flower_white_lotus'), '#kubejs:has_feature/environmental_flower_white_lotus', VEGETAL_DECORATION)
    addFeatures(e, copyPasteFeature(e, 'environmental', PLACED, 'environmental:patch_giant_tall_grass_marsh'), '#kubejs:has_feature/environmental_giant_tall_grass_marsh', VEGETAL_DECORATION)


    // Adding Bountiful Fares' plum fruit to environmental trees
    const plumTrees = [
        'environmental:cheerful_plum',
        'environmental:cheerful_plum_bees_005',
        'environmental:cheerful_plum_bees_0002',
        'environmental:moody_plum',
        'environmental:moody_plum_bees_005',
        'environmental:moody_plum_bees_0002',
    ].forEach(tree => {
        const treeJson = getFeatureJson('environmental', CONFIGURED, tree)
        treeJson.config.decorators.push({
            type: 'minecraft:attached_to_leaves',
            block_provider: {
                type: 'minecraft:randomized_int_state_provider',
                property: 'age',
                source: {
                    type: 'minecraft:simple_state_provider',
                    state: {
                        Name: 'bountifulfares:hanging_plum',
                        Properties: { age: '4' }
                    }
                },
                values: {
                    type: 'minecraft:uniform',
                    max_inclusive: 4,
                    min_inclusive: 0
                }
            },
            directions: ['down'],
            exclusion_radius_xz: 1,
            exclusion_radius_y: 0,
            probability: 0.01,
            required_empty_blocks: 1
        })

        registerFeature(e, CONFIGURED, tree, treeJson)
    })
}
