// priority: 500

global.fullRemovals.push(
    'beyond_earth:compressor',
)

onEvent('recipes', (event) => {

    // Removes by recipe ID
    global.idRemovals.push(
        '',
    )

    // Removes inputs and outputs from global list fullRemoval
    global.fullRemovals.forEach((removal) => {
        event.remove({ input: removal })
        event.remove({ output: removal })
    })
    // Removes by recipe ID
    global.idRemovals.forEach((removal) => {
        event.remove({ id: removal })
    })
})