// priority: 100

// JSDoc IntelliSense
/**
 * Base KJS events
 * @typedef {import("@side-only/server/events").TagEvent<any>} $TagKubeEvent
 * @typedef {import("@package/dev/latvian/mods/kubejs/recipe").$RecipesKubeEvent} $RecipesKubeEvent
 * @typedef {import("@package/dev/latvian/mods/kubejs/generator").$KubeDataGenerator} $KubeDataGenerator
 * LootJS events/builder
 * @typedef {import("@package/com/almostreliable/lootjs/loot").$LootModificationEvent} $LootModificationEvent
 * @typedef {import("@package/com/almostreliable/lootjs/loot/modifier").$LootModifier$Builder} $LootModifier$Builder
 * @typedef {import("@package/com/almostreliable/lootjs/loot").$LootTableEvent} $LootTableEvent
 * @typedef {import("@package/com/almostreliable/lootjs/loot/table").$LootTableList} $LootTableList
 * MoreJS events
*/

let OVERWORLD_BIOMES
ServerEvents.tags('worldgen/biome', e => {
    OVERWORLD_BIOMES = e.get('minecraft:is_overworld').getObjectIds()
})

// let AKASHIC_TOME = 'akashictome:tome[akashictome:tool_content=[{components:{"akashictome:defined_mod":"cobblepedia","patchouli:book":"cobblepedia:cobblepedia"},count:1,id:"patchouli:guide_book"},{components:{"akashictome:defined_mod":"malum"},count:1,id:"malum:encyclopedia_arcana"},{components:{"akashictome:defined_mod":"starcatcher"},count:1,id:"starcatcher:starcatcher_guide"},{components:{"akashictome:defined_mod":"pastel"},count:1,id:"pastel:guidebook"},{components:{"akashictome:defined_mod":"embers"},count:1,id:"embers:ancient_codex"}]]'

// Numismatic Overhaul stuff shortened
const SELL_STACK = 'numismaticoverhaul:sell_stack'
const SELL_TAG = 'numismaticoverhaul:sell_tag'
const BUY_STACK = 'numismaticoverhaul:buy_stack'
const SELL_ENCHANT_ITEM = 'numismaticoverhaul:enchant_item'
const SELL_SINGLE_ENCHANT_ITEM = 'numismaticoverhaul:sell_single_enchantment'
const PROCESS_ITEM = 'numismaticoverhaul:process_item'


/**
 * Returns coin equivalent ItemStack of given bronze number
 * 1 Gold = 100 Silver = 10,000 Bronze
 * 1 Silver = 100 Bronze
 * @param {Number} num number from 1 - 990,000
 * @returns {Item}
 */
function currencyItem(num) {
    if (num > 990000) console.error(`currencyItem returned a value too high: ${num}`)
    else if (num <= 99) return Item.of('numismaticoverhaul:bronze_coin', num)
    else if (num > 99 && num < 10000) return Item.of('numismaticoverhaul:silver_coin', Math.ceil(num / 100))
    else if (num >= 10000) return Item.of('numismaticoverhaul:gold_coin', Math.ceil(num / 10000))
}

/**
 * Get if a player has a specific advancement
 * @param {$MinecraftServer_} server 
 * @param {$Player_} player 
 * @param {string} advancement 
 */
function hasAdvancement(server, player, advancement) {
    const adv = server.advancements.allAdvancements.stream().filter(a => a.id == advancement).findFirst().orElse(null)
    return server.playerList.getPlayerAdvancements(player).getOrStartProgress(adv).isDone()
}


/**
 * Play a sound at the player
 * @param {$MinecraftServer_} server 
 * @param {$Player_} player 
 * @param {string} sound 
 * @param {number} volume 
 * @param {number} pitch 
 */
function playSound(server, player, sound, volume, pitch) {
    if (volume === undefined) volume = 1
    if (pitch === undefined) pitch = 1
    server.runCommandSilent(`execute at ${player.username} run playsound ${sound} player ${player.username} ~ ~ ~ ${volume} ${pitch}`)
}


/**
 * Prevent right-click if players aren't nearby
 * @param {$BlockRightClickedEventJS_} e 
 * @param {string} sound 
 * @param {string} activationItem 
 * @param {number} minPlayers
 * @param {Optional | string} advancement
 */
function antiLoser(e, activationItem, sound, minPlayers, advancement) {
    if (activationItem instanceof RegExp) {
        // e.player.mainHandItem.getId()
    }
    else if (e.player.mainHandItem.getId() != activationItem && e.player.offHandItem.getId() != activationItem) return

    let AABB = e.entity.boundingBox.inflate(150)
    let nearbyPlayers = []
    e.level.getEntitiesWithin(AABB).forEach(entity => {
        if (entity == null || !entity.player) return
        nearbyPlayers.push(entity.username)
    })

    if (nearbyPlayers.length < minPlayers || (advancement != undefined && !hasAdvancement(e.server, e.player, advancement))) {
        e.server.runCommandSilent(`immersivemessages sendcustom ${e.player.username} {anchor:0, background:1, obfuscate:1, size:2, color:"#FF2C00"} 10 You need to have atleast ${minPlayers} friends to summon this boss. loser`)
        playSound(e.server, e.player, sound)
        e.cancel()
    }
}


/** @param {$KubeDataGenerator} e  */
function autoImmersiveEnchanting(e, enchantment, levels) {
    const modId = enchantment.split(':')[0]
    const enchantmentId = enchantment.split(':')[1]

    const enchantmentObj = { levels: {} }
    if (levels == 1) {
        enchantmentObj.levels['1'] = { item: 'minecraft:diamond', amount: 16 }
    } else {
        for (let i = 1; i <= levels; i++) {
            enchantmentObj.levels[`${i}`] = { item: 'minecraft:diamond', amount: 4 * i }
        }
    }
    e.json(`immersiveenchanting:enchantment_costs/${modId}/${enchantmentId}`, enchantmentObj)
}

// Turns an item id into readable text
function prettyItem(item) {
    let modName = Platform.getMods()[item.split(':')[0]].name
    let itemName = Item.of(item).getDisplayName().getString().replace('[', '"').replace(']', '"')

    return `${modName}'s ${itemName}`
}









// ===================== RECIPE FUNCTIONS =====================


const RECIPES = {
    UTILS: {
        /**
         * @param {Array<String> | String | Object} items 
         * @returns {Array<String> | String | Object}
         */
        ItemsToJson: function (items) {
            if (items instanceof Array) {
                let arr = []
                items.forEach(item => arr.push(this.ItemsToJson(item)))
                return arr
            }
            else if (typeof items == 'string') {
                if (/\dx /.test(items)) {
                    let split = items.split('x ')
                    let count = split[0]
                    let id = split[1]
                    return Item.of(id, count)
                }
                else return Item.of(items)
            }
            // assumes its an object or has been converted to the Item class
            return items
        },
        /**
         * @param {Array<String> | String} ingredients 
         * @returns {Array<String> | String}
         */
        IngredientsToJson: function (ingredients) {
            if (ingredients instanceof Array) {
                let arr = []
                ingredients.forEach(ingredient => arr.push(Ingredient.of(ingredient)))
                return arr
            }
            // if string
            return Ingredient.of(ingredients)
        }
    },
    /**
     * Helper function for JSON recipes that can take a chanced result
     * @param {String} id - Item ID
     * @param {Number} count - Amount of result
     * @param {Number} chance - Percent chance as a decimal
     * @returns {Object} JSON object
     */
    ChancedResult: function (id, count, chance) {
        return {id: id, count: count, chance: chance}
    },
    /**
     * @param {$RecipesKubeEvent} e 
     * @param {String} output 
     * @param {String} mainIngredient 
     * @param {Boolean} outputSameAsRecipeId - if the output's item id is the same as the recipe id
     */
    Cake: function (e, output, mainIngredient, outputSameAsRecipeId) {
        if (outputSameAsRecipeId) e.remove({ id: output })
        return e.shaped(output, [
            'ABA',
            'CDC',
            'EEE'
        ], {
            A: mainIngredient,
            B: '#c:milk',
            C: 'minecraft:sugar',
            D: '#c:eggs',
            E: '#c:flour'
        })
    },
    /**
     * @param {$RecipesKubeEvent} e 
     * @param {String} output 
     * @param {String} mainIngredient 
     * @param {Boolean} outputSameAsRecipeId - if the output's item id is the same as the recipe id
     */
    Cookie: function (e, output, mainIngredient, outputSameAsRecipeId) {
        if (outputSameAsRecipeId) e.remove({ id: output })
        return e.shaped(Item.of(output, 8), ['ABA'], { A: '#c:flour', B: mainIngredient })
    },
    /**
     * @param {$RecipesKubeEvent} e 
     * @param {Array<String> | String} outputs 
     * @param {Array<String> | String} inputs 
     * @returns {$KubeRecipe}
     */
    Workstone: function (e, outputs, inputs) {
        const recipeObj = {
            type: 'manual_labour:workstone',
            ingredients: [[], { tag: 'manual_labour:hammers' }],
            results: []
        }

        if (outputs instanceof Array) recipeObj.results = this.UTILS.ItemsToJson(outputs)
        else recipeObj.results.push(this.UTILS.ItemsToJson(outputs))

        if (inputs instanceof Array) recipeObj.ingredients[0] = this.UTILS.IngredientsToJson(inputs)
        else recipeObj.ingredients[0].push(this.UTILS.IngredientsToJson(inputs))

        return e.custom(recipeObj)
    }
}
