// priority: 1500

settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

// REMOVING
// global.fullRemoval regex inputs
var regexFullRemovals = []
// remove by recipe ID
var idRemovals = []
// remove by recipe type
var typeRemovals = []

// REPLACING
// replace output
var outputReplace = []
// replace input
var inputReplace = []
// replace input AND output
var InputOutputReplace = []

// TAGS
// add a tag to an item
var addTagToItem = []
// remove tag from item
var removeTagFromItem = []

// all dye colours
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

// add more to this array if Create supports more ores. for Crushed Ore integration stuffs
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
    'tin'
]

const thermalSupportedOres = [
    'iron',
    'gold',
    'copper',
    'tin',
    'lead',
    'silver'
]

const gems = []

