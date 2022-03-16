// Hide items in JEI item list
onEvent('rei.hide.items', rei => {
	// rei.hide(global.fullRemovals)
	rei.hide([
		// Hides unused BoP wood
		/(biomesoplenty|compatoplenty|decorative_compat|supplementaries):(.*magic.*|.*umbran.*|.*palm.*)/,
		// Hides Refined Storage's dyed variants except for red
		/refinedstorage:.(!red)+_(controller|creative_controller|grid|crafting_grid|pattern_grid|fluid_grid|network_receiver|network_transmitter|relay|wireless_transmitter|disk_manipulator|crafter|crafter_manager|crafting_monitor|security_manager|detector)/,
	])
})

onEvent('rei.information', rei => {
	rei.add(global.fullRemovals, Text.of('DISABLED').red().bold())
})

// Item tooltips
onEvent('item.tooltip', tooltip => {
	tooltip.add(global.fullRemovals, Text.of('DISABLED').red().bold())
	tooltip.add(/refinedstorage:red_/, Text.of('Can be any color').gray())
})
