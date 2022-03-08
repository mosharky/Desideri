// Hide items in JEI item list
onEvent('jei.hide.items', jei => {
	// jei.hide(global.fullRemovals)
	jei.hide([
		// Hides unused BoP wood
		/(biomesoplenty|compatoplenty|decorative_compat|supplementaries):(.*magic.*|.*umbran.*|.*palm.*)/,
		// Hides Refined Storage's dyed variants except for red
		/refinedstorage:.(!red)+_(controller|creative_controller|grid|crafting_grid|pattern_grid|fluid_grid|network_receiver|network_transmitter|relay|wireless_transmitter|disk_manipulator|crafter|crafter_manager|crafting_monitor|security_manager|detector)/,
	])
})

onEvent('jei.information', jei => {
	jei.add(global.fullRemovals, Text.of('DISABLED').red().bold())
})

// Item tooltips
onEvent('item.tooltip', tooltip => {
	tooltip.add(global.fullRemovals, Text.of('DISABLED').red().bold())
	tooltip.add(/refinedstorage:red_/, Text.of('Can be any color').gray())
})
