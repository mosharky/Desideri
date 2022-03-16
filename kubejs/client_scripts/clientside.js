// Hide items in REI item list
onEvent('rei.hide.items', rei => {
	// rei.hide(global.fullRemovals)
	// blocks that aren't in creative menus aren't getting hidden?
	// why are tables and beehives not in creative menus???
	rei.hide([
		// tables and beehives added by Compat O' Plenty aren't hidden by this?
		/(biomesoplenty|compatoplenty|decorative_compat|supplementaries):(.*magic.*|.*umbran.*|.*palm.*)/,
		// this works fine
		/refinedstorage:(?!red).+_(controller|creative_controller|grid|crafting_grid|pattern_grid|fluid_grid|network_receiver|network_transmitter|relay|wireless_transmitter|disk_manipulator|crafter|crafter_manager|crafting_monitor|security_manager|detector)/,
		// this doesn't work either
		/biomesoplenty:potted.*/,
		// lootr blocks aren't being hidden
		/lootr:(?!trophy).*/,
	])
})

// REI Information pages
onEvent('rei.information', rei => {
	rei.add(global.fullRemovals, Text.of('DISABLED').red().bold())
})

// Item tooltips
onEvent('item.tooltip', tooltip => {
	tooltip.add(global.fullRemovals, Text.of('DISABLED').red().bold())
	tooltip.add(/refinedstorage:red_/, Text.of('Can be any color').gray())
})
