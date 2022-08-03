// priority: 1500

// REMOVING
// global.fullRemoval regex inputs
var regexFullRemovals = []
// Remove by recipe ID
var idRemovals = []
// Remove by recipe type
var typeRemovals = []

// REPLACING
// Replace output
var outputReplace = []
// Replace input
var inputReplace = []
// Replace input AND output
var InputOutputReplace = []

// TAGS
var addTagToItem = []

// Constant array of all colours
const colours = [
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray',
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black'
]

// add more to this array if Create supports more ores
const createSupportedOres = [
    'iron',
    'gold',
    'copper',
    'zinc',
    'silver',
    'lead',
    'aluminum',
    'uranium',
    'nickel',
]


function multiSmelt(output, input, experience) {
    onEvent('recipes', event => {
        if (experience != undefined) {
            event.smelting(output, input).xp(experience)
            event.blasting(output, input).xp(experience)
        } else {
            event.smelting(output, input)
            event.blasting(output, input)
        }
    })
}
