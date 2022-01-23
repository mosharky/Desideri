// Registers items/blocks/fluids into the game

// Rarity constants:
// RARITY_UNCOMMON
// RARITY_RARE
// RARITY_EPIC

onEvent('item.registry', event => {

	// Hemolymph Pustules
	event.create('hemolymph_pustules', item => {
		item.displayName('Hemolymph Pustules')
		item.rarity(RARITY_UNCOMMON)
	})

	// Lesser Eye of Ender
	event.create('lesser_ender_eye', item => {
		item.displayName('Lesser Eye of Ender')
	})
})