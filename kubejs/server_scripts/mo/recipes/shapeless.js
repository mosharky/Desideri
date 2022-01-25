// Shapeless recipes

const id_prefix = 'hiraeth:shapeless/'
const recipes = [
	{ 
		output: '2x kubejs:hemolymph_pustules',
		inputs: 'alexsmobs:hemolymph_sac',
		id: `${id_prefix}hemolymph_pustules`
	},
	{
		output: 'kubejs:lesser_ender_eye',
		inputs: ['minecraft:ender_pearl', 'minecraft:blaze_powder', 'minecraft:blaze_powder'],
		id: `${id_prefix}:lesser_ender_eye`
	},
	{
		output: 'beyond_earth:blue_iron_plating_block',
		inputs: ['beyond_earth:iron_plating_block', '#forge:dyes/blue'],
		id: 'beyond_earth:blue_iron_plating_block'
	}
]
/*
{
	output:
	inputs:
	id: `${id_prefix}`
}
*/

onEvent('recipes', event => {
	recipes.forEach((recipe) => {
        recipe.id
            ? event.shapeless(recipe.output, recipe.inputs).id(recipe.id)
            : event.shapeless(recipe.output, recipe.inputs);
    });
})

