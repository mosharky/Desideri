// priority: 500

// Removes inputs and outputs from global list fullRemoval
global.fullRemovals.push(
    '',
)
// Removes by recipe ID
global.idRemovals.push(
    '',
)
// Removes by recipe type
global.typeRemovals.push(
    '',
)

onEvent('recipes', (event) => {
    // Removes inputs and outputs from global array fullRemoval
    global.fullRemovals.forEach((removal) => {
        event.remove({ input: removal })
        event.remove({ output: removal })
    })
    // Removes by recipe ID
    global.idRemovals.forEach((removal) => {
        event.remove({ id: removal })
    })
    // Removes by recipe type
    global.typeRemovals.forEach((removal) => {
        event.remove({ type: removal })
    })
})