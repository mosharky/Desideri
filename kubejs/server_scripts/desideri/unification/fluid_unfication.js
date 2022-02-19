// priority: 1250
onEvent('tags.fluids', event => {
    // Biodiesel > Beyond Earth fuel/oil
    event.add('beyond_earth:vehicle_fuel', 'immersiveengineering:biodiesel')
    event.remove('beyond_earth:vehicle_fuel', 'beyond_earth:fuel')
    event.remove('beyond_earth:oil', 'beyond_earth:oil')
    event.remove('forge:plantoil', 'createaddition:seed_oil')
})

typeRemovals.push(
    // Removes Beyond Earth's fuel refinery recipes
    'beyond_earth:fuelrefining',
)

global.fullRemovals.push(
    'beyond_earth:fuel_refinery',
    'beyond_earth:fuel_bucket',
    'beyond_earth:oil_bucket',
    'createaddition:seed_oil_bucket'
)