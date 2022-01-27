// priority: 500

// Removes inputs and outputs from global list fullRemoval
global.fullRemovals.push(
    'quark:rope',
    'supplementaries:flax_seeds',
    'supplementaries:flax_block',
    'supplementaries:flax',
    'supplementaries:rope',
    /quark:.*_rune/,
    'farmersdelight:wheat_dough',
    'biomesoplenty:spanish_moss',
    /aquaculture:.*_fillet_knife/,
)
// Removes by recipe ID
idRemovals.push(
    'supplementaries:strings',
    'farmersdelight:raw_pasta_from_eggs',
)
// Removes by recipe type
typeRemovals.push(
    '',
)

onEvent('recipes', (event) => {
    // Removes inputs and outputs from global array fullRemoval
    global.fullRemovals.forEach((removal) => {
        event.remove({ input: removal })
        event.remove({ output: removal })
    })
    // Removes by recipe ID
    idRemovals.forEach((removal) => {
        event.remove({ id: removal })
    })
    // Removes by recipe type
    typeRemovals.forEach((removal) => {
        event.remove({ type: removal })
    })
})