// Hide items in REI item list
onEvent('rei.hide.items', rei => {
	// rei.hide(global.fullRemovals)
	rei.hide([
		/(biomesoplenty|compatoplenty|decorative_compat|supplementaries):(.*magic.*|.*umbran.*|.*palm.*)/, // tables and beehives aren't caught by this?
		/refinedstorage:(?!red).+_(controller|creative_controller|.*grid.*|network_receiver|network_transmitter|relay|wireless_transmitter|disk_manipulator|crafter|crafter_manager|crafting_monitor|security_manager|detector)/,
		/biomesoplenty:potted.*/,
		/lootr:(?!trophy).*/, // ???
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
