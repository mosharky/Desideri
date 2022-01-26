// Hide items in JEI here
onEvent('jei.hide.items', jei => {
	//jei.hide(global.fullRemovals)

	// Hides Refined Storage's dyed variants except for red
	jei.hide([/refinedstorage:(white|orange|magenta|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green||black)_(controller|creative_controller|grid|crafting_grid|pattern_grid|fluid_grid|network_receiver|network_transmitter|relay|wireless_transmitter|disk_manipulator|crafter|crafter_manager|crafting_monitor|security_manager|detector)/])
})