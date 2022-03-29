// Hide items in JEI item list
onEvent('jei.hide.items', jei => {
	// jei.hide(global.fullRemovals)
	jei.hide([
		/(biomesoplenty|compatoplenty|decorative_compat|supplementaries):(.*magic.*|.*umbran.*|.*palm.*)/,
		/refinedstorage:(white|light_gray|gray|black|brown|red|orange|yellow|lime|green|cyan|blue|magenta|pink)_/,
	])
})

// JEI Information pages
onEvent('jei.information', jei => {
	jei.add(global.fullRemovals, Text.of('DISABLED').red().bold())
})

// Item tooltips
onEvent('item.tooltip', tooltip => {
	tooltip.add(global.fullRemovals, Text.of('DISABLED').red().bold())
	tooltip.add(/refinedstorage:red_/, Text.of('Can be any color').gray())
})
