/** @param {$KubeDataGenerator} e  */
function worldgen_Oreganized(e) {
    removeBiomeModifier(e, 'oreganized:add_datura')
    removeBiomeModifier(e, 'oreganized:sparse_add_datura')
    removeBiomeModifier(e, 'oreganized:overworld_ores')
    addFeatures(e, 'oreganized:lead_ore', '#minecraft:is_overworld', UNDERGROUND_ORES)
}
