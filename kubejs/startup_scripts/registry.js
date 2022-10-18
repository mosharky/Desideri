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

	/*
	item.create('crushed_desh_ore')
		.displayName('Crushed Desh Ore')

	item.create('crushed_ostrum_ore')
		.displayName('Crushed Ostrum Ore')

	item.create('crushed_calorite_ore')
		.displayName('Crushed Calorite Ore')
	*/

	item.create('crushed_cloggrum_ore')
		.displayName('Crushed Cloggrum Ore')

	item.create('crushed_froststeel_ore')
		.displayName('Crushed Froststeel Ore')

})

onEvent('item.modification', event => {
	let modifyFoodValue = (foodItem, hunger, saturation) => {
		return event.modify(foodItem, item => {
			item.setFoodProperties(food => {
				food.hunger(hunger)
				food.saturation(saturation)
			})
		})
	}

	modifyFoodValue('minecraft:cooked_beef', 6, 1.0)
	modifyFoodValue('minecraft:cooked_porkchop', 6, 1.0)
	modifyFoodValue('corn_delight:taco', 9, 1.2)
	modifyFoodValue('corn_delight:cornbread_stuffing', 7, 1.2) // not working?
	modifyFoodValue('corn_delight:nachos_bowl', 6, 1) // not working?
	modifyFoodValue('corn_delight:grilled_corn', 5, 1.1) // not working?
	modifyFoodValue('corn_delight:boiled_corn', 5, 1.1) // not working?
	modifyFoodValue('corn_delight:popcorn', 3, 1)
	modifyFoodValue('corn_delight:caramel_popcorn', 5, 1.1)
	modifyFoodValue('corn_delight:creamed_corn', 7, 1.0)
	modifyFoodValue('corn_delight:corn_dog', 8, 0.9)
	modifyFoodValue('corn_delight:classic_corn_dog', 9, 1.0) // not working?
	modifyFoodValue('autumnity:cooked_turkey_piece', 5, 1.1)
})