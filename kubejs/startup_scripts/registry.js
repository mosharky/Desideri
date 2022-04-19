// Registers items/blocks/fluids into the game

// Rarity constants:
// RARITY_UNCOMMON
// RARITY_RARE
// RARITY_EPIC

onEvent('item.registry', item => {

	item.create('hemolymph_pustules')
		.displayName('Hemolymph Pustules')
		.rarity(RARITY_UNCOMMON)

	item.create('lesser_ender_eye')
		.displayName('Lesser Eye of Ender')

	item.create('lye')
		.displayName('Lye')

	item.create('crushed_desh_ore')
		.displayName('Crushed Desh Ore')

	item.create('crushed_ostrum_ore')
		.displayName('Crushed Ostrum Ore')

	item.create('crushed_calorite_ore')
		.displayName('Crushed Calorite Ore')

	item.create('hominy')
		.displayName('Hominy')
		.food(foodBuilder => {
			foodBuilder
				.hunger(3)
				.saturation(0.1)
				.fastToEat()
		})
})