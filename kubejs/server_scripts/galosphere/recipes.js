/** @param {$RecipesKubeEvent} e */
function recipes_Galosphere(e) {
    e.remove({ id: 'galosphere:spectre_flare' })
    e.remove({ id: 'galosphere:monstrometer' })
    e.remove({ id: 'galosphere:burrow_anchor' })
    e.remove({ id: 'galosphere:shadow_frame' })
    e.remove({ id: 'galosphere:light_stand' })
    e.remove({ id: 'galosphere:pink_salt_lamp' })
    e.remove({ id: 'galosphere:weapon_rack' })

    e.shaped('galosphere:spectre_flare', ['A', 'B'], { A: 'galosphere:bottle_of_spectre', B: '#c:ingots/silver' })
    e.shaped('galosphere:monstrometer', [' A ', 'ABA', ' A '], { A: '#c:ingots/silver', B: 'galosphere:lumiere_shard' })
    e.shaped('galosphere:burrow_anchor', [' A ', 'ABA', ' C '], { A: '#c:ingots/silver', B: 'minecraft:sculk_shrieker', C: 'minecraft:echo_shard' })
    e.shaped('8x galosphere:shadow_frame', ['ABA', 'BAB', 'ABA'], { A: '#c:ingots/silver', B: 'galosphere:cured_membrane' })
    e.shaped('galosphere:light_stand', ['B', 'A', 'A'], { A: '#c:ingots/silver', B: '#minecraft:coals' })
    e.shaped('galosphere:pink_salt_lamp', ['B', 'A'], { A: '#c:ingots/silver', B: 'galosphere:pink_salt_cluster' })
    e.shaped('galosphere:weapon_rack', ['AAA'], { A: '#c:ingots/silver' })
    
    e.shaped('galosphere:sterling_helmet', ['AAA', 'ABA'], { A: '#c:ingots/silver', B: 'minecraft:leather_helmet' })
    e.shaped('galosphere:sterling_chestplate', ['ABA', 'AAA', 'AAA'], { A: '#c:ingots/silver', B: 'minecraft:leather_chestplate' })
    e.shaped('galosphere:sterling_leggings', ['AAA', 'ABA', 'A A'], { A: '#c:ingots/silver', B: 'minecraft:leather_leggings' })
    e.shaped('galosphere:sterling_boots', ['A A', 'ABA'], { A: '#c:ingots/silver', B: 'minecraft:leather_boots' })
}