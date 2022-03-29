// Registers items/blocks/fluids into the game

// Rarity constants:
// RARITY_UNCOMMON
// RARITY_RARE
// RARITY_EPIC

onEvent('item.registry', event => {

	event.create('hemolymph_pustules', item => {
		item.displayName('Hemolymph Pustules')
		item.rarity(RARITY_UNCOMMON)
	})

	event.create('lesser_ender_eye', item => {
		item.displayName('Lesser Eye of Ender')
	})

	event.create('lye', item => {
		item.displayName('Lye')
	})

	event.create('crushed_desh_ore', item => {
		item.displayName('Crushed Desh Ore')
	})

	event.create('crushed_ostrum_ore', item => {
		item.displayName('Crushed ostrum Ore')
	})

	event.create('crushed_calorite_ore', item => {
		item.displayName('Crushed Calorite Ore')
	})

	event.create('hominy', item => {
		item
			.displayName('Hominy')
			.food(food => {
				food
					.hunger(3)
					.saturation(0.1)
					.fastToEat()
			})
	})
})