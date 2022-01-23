// Shapeless recipes
// Index 0 is output, index 1 is input
onEvent('recipes', event => {
	// Hemolymph Pustules
	event.shapeless('2x kubejs:hemolymph_pustules', 'alexsmobs:hemolymph_sac').id('mo:hemolymph_pustules')
	// Lesser Ender Eye
	event.shapeless('kubejs:lesser_ender_eye', ['minecraft:ender_pearl', 'minecraft:blaze_powder', 'minecraft:blaze_powder']).id('mo:lesser_ender_eye')
	// Blue Iron Plating
	event.shapeless('beyond_earth:blue_iron_plating_block', ['beyond_earth:iron_plating_block', '#forge:dyes/blue']).id('beyond_earth:blue_iron_plating_block')
})

