// Shapeless recipes
// Index 0 is output, index 1 is input
onEvent('recipes', event => {
	// Hemolymph Pustules
	event.shapeless('2x kubejs:hemolymph_pustules', 'alexsmobs:hemolymph_sac').id('mo:hemolymph_pustules')
	// Lesser Ender Eye
	event.shapeless('kubejs:lesser_ender_eye', ['minecraft:ender_pearl', 'minecraft:blaze_powder', 'minecraft:blaze_powder']).id('mo:lesser_ender_eye')
	// Blue Iron Plating
	event.shapeless('beyond_earth:blue_iron_plating_block', ['beyond_earth:iron_plating_block', '#forge:dyes/blue']).id('beyond_earth:blue_iron_plating_block')

	// Beyond Earth Plates
	event.recipes.createPressing('beyond_earth:compressed_steel', 'beyond_earth:steel_ingot').id('beyond_earth:compressing/compressed_steel')
	event.recipes.createPressing('beyond_earth:desh_plate', 'beyond_earth:desh_ingot').id('beyond_earth:desh_plate')
	event.recipes.createMixing('beyond_earth:steel_ingot', ['#forge:ingots/iron', '4x minecraft:charcoal']).superheated().id('beyond_earth:steel_ingot_blasting')
})