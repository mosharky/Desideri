function worldgen_Naturalist(e) {
    removeBiomeModifier(e, 'naturalist:add_ant_hills')
    removeBiomeModifier(e, 'naturalist:remove_farm_animals_savanna')
    removeBiomeModifier(e, 'naturalist:remove_farm_animals_swamp')
    removeBiomeModifier(e, 'naturalist:remove_forest_pigs')
}