function removals_Embers() {
    global.REMOVALS.add([
        /embers:.*silver(?!_crystal_seed|_aspectus|_plate|_bucket).*/,
        /embers:.*lead(?!_crystal_seed|_aspectus|_plate|_bucket).*/,
        'embers:copper_plate',
        'embers:iron_plate',
        'embers:copper_nugget'
    ])
}