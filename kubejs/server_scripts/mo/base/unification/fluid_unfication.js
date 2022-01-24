// priority: 9999
onEvent('tags.fluids', event => {
    // Biodiesel > Beyond Earth fuel/oil
    event.add('beyond_earth:vehicle_fuel', 'immersiveengineering:biodiesel')
    event.remove('beyond_earth:vehicle_fuel', 'beyond_earth:fuel')
    event.remove('beyond_earth:oil', 'beyond_earth:oil')
    // Remove #minecraft:water tag from all fluids
    let fluids = [
        'beyond_earth:oil',
        'beyond_earth:fuel',
        'create:chocolate',
        'create:honey',
        'hexerei:blood_fluid',
        'hexerei:tallow_fluid'
    ]
    fluids.forEach((fluid) =>{
        event.remove('minecraft:water', fluid)
    })
})

global.typeRemovals.push(
    // Removes Beyond Earth's fuel refinery recipes
    'beyond_earth:fuelrefining',
)

global.fullRemovals.push(
    'beyond_earth:fuel_refinery',
    'beyond_earth:fuel_bucket',
    'beyond_earth:oil_bucket',
)