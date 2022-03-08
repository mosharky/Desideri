onEvent('recipes', event => {

	event.stonecutting('quark:framed_glass', 'valhelsia_structures:metal_framed_glass')
	event.stonecutting('quark:framed_glass_pane', 'valhelsia_structures:metal_framed_glass_pane')
	event.stonecutting('valhelsia_structures:metal_framed_glass', 'quark:framed_glass')
	event.stonecutting('valhelsia_structures:metal_framed_glass_pane', 'quark:framed_glass_pane')

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
		{
			output: 'beyond_earth:blue_iron_plating_block',
			inputs: ['beyond_earth:iron_plating_block', '#forge:dyes/blue'],
			id: 'beyond_earth:blue_iron_plating_block'
		},
		{
			output: 'comforts:rope_and_nail',
			inputs: ['farmersdelight:rope', 'minecraft:iron_ingot'],
			id: 'comforts:rope_and_nail_shapeless'
		},
		{
			output: 'aquaculture:sushi',
			inputs: ['#desideri:raw_fish_fillets', '#forge:crops/rice', 'minecraft:seagrass'],
			id: 'aquaculture:sushi'
	
		}
	]
    shapeless.forEach((recipe) => {
        recipe.id
            ? event.shapeless(recipe.output, recipe.inputs).id(recipe.id)
            : event.shapeless(recipe.output, recipe.inputs);
    });
})

