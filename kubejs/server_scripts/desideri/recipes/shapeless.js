onEvent('recipes', event => {

	event.stonecutting('quark:framed_glass', 'valhelsia_structures:metal_framed_glass')
	event.stonecutting('quark:framed_glass_pane', 'valhelsia_structures:metal_framed_glass_pane')
	event.stonecutting('valhelsia_structures:metal_framed_glass', 'quark:framed_glass')
	event.stonecutting('valhelsia_structures:metal_framed_glass_pane', 'quark:framed_glass_pane')

	event.blasting('malum:processed_soulstone', 'malum:raw_soulstone').id('malum:processed_soulstone_from_raw_soulstone_blasting')
	event.smelting('malum:processed_soulstone', 'malum:raw_soulstone').id('malum:processed_soulstone_from_raw_soulstone_smelting')

	// Shapeless crafting table recipes
	const shapeless = [
		{ 
			output: '2x kubejs:hemolymph_pustules',
			inputs: 'alexsmobs:hemolymph_sac',
			id: 'desideri:shapeless/hemolymph_pustules'
		},
		{
			output: 'kubejs:lesser_ender_eye',
			inputs: ['minecraft:ender_pearl', 'minecraft:blaze_powder', 'minecraft:blaze_powder'],
			id: 'desideri:shapeless/lesser_ender_eye'
		},
		/*
		{
			output: 'beyond_earth:blue_iron_plating_block',
			inputs: ['beyond_earth:iron_plating_block', '#forge:dyes/blue'],
			id: 'beyond_earth:blue_iron_plating_block'
		},
		*/
		{
			output: 'comforts:rope_and_nail',
			inputs: ['farmersdelight:rope', 'minecraft:iron_ingot'],
			id: 'comforts:rope_and_nail_shapeless'
		},
		{
			output: 'sprout:peanut_butter_cookie',
			inputs: ['thermal:peanut_butter', 'minecraft:wheat', 'minecraft:wheat'],
			id: 'sprout:peanut_butter_cookie'
		},
		{
			output: 'thermal:jelly',
			inputs: ['minecraft:sweet_berries', 'minecraft:sweet_berries', 'minecraft:sweet_berries', 'minecraft:sugar', 'thermal:jar'],
			id: 'thermal:jelly'
		},
		{
			output: 'thermal:peanut_butter',
			inputs: ['thermal:peanut', 'thermal:peanut', 'thermal:peanut', 'minecraft:sugar', 'thermal:jar'],
			id: 'thermal:peanut_butter'
		},
		{
			output: 'thermal:peanut_seeds',
			inputs: 'thermal:peanut',
			id: 'desideri:shapeless/peanut_seeds'
		},
		{
			output: 'minecraft:bookshelf',
			inputs: '#forge:bookshelves',
			id: 'desideri:shapeless/bookshelf_revert'
		},
		{
			output: 'minecraft:chest',
			inputs: '#forge:chests/wooden',
			id: 'quark:building/crafting/chests/chest_revert'
		},
		{
			output: 'upgrade_aquatic:bedroll',
			inputs: ['#upgrade_aquatic:bedrolls', 'supplementaries:soap'],
			id: 'desideri:shapeless/bedroll_revert'
		},
		{
			output: 'create:brown_toolbox',
			inputs: ['create:toolboxes', 'supplementaries:soap'],
			id: 'desideri:shapeless/toolbox_revert'
		}
	]
    shapeless.forEach((recipe) => {
        recipe.id
            ? event.shapeless(recipe.output, recipe.inputs).id(recipe.id)
            : event.shapeless(recipe.output, recipe.inputs);
    });
})

