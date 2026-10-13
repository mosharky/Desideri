/** @param {$KubeDataGenerator} e  */
function worldgen_Biolith(e) {
    e.json('desideri:biolith/biome_placement', {
        // additions: BIOLITH.BIOME_PLACEMENT.additions,
        // removals: BIOLITH.BIOME_PLACEMENT.removals,
        replacements: BIOLITH.BIOME_PLACEMENT.replacements,
        sub_biomes: BIOLITH.BIOME_PLACEMENT.sub_biomes,
    })
}