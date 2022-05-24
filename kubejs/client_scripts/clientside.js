// Hide items in JEI item list
onEvent('jei.hide.items', jei => {
	// jei.hide(global.fullRemovals)
	jei.hide([
		/refinedstorage:(white|light_gray|gray|black|brown|red|orange|yellow|lime|green|cyan|blue|magenta|pink)_/,
		'biomesoplenty:clover',
	])
})

// JEI Information pages
onEvent('jei.information', jei => {
	jei.add(global.fullRemovals, Text.of('DISABLED. If found in-game in a recipe or dropped as an item, please contact us on the discord.').red().bold())
})

// Item tooltips
onEvent('item.tooltip', tooltip => {
	tooltip.add(global.fullRemovals, Text.of('DISABLED. If found in-game in a recipe or dropped as an item, please contact us on the discord.').red().bold())
	tooltip.add(/refinedstorage:red_/, Text.of('Can be any color').gray())
})
