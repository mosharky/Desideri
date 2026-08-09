function processBlockswapConfig() {
    // Processing regex keys and turning the map into an object
    let swapperObj = {}
    global.BLOCKSWAP_CONFIG.swapper.forEach((value, key, map) => {
        if (key instanceof RegExp) {
            Ingredient.of(key).itemIds.forEach(match => {
                if (Item.of(match).isBlock()) swapperObj[match] = value
            })
        } else {
            swapperObj[key] = value
        }
    })
    global.BLOCKSWAP_CONFIG.swapper = swapperObj

    JsonIO.write('config/blockswap/block_swap.json5', global.BLOCKSWAP_CONFIG)
}


function processSwappers() {
    global.BLOCK_SWAPPER.forEach((value, key) => {
        if (key instanceof RegExp) {
            Ingredient.of(key).itemIds.forEach(match => global.BLOCK_SWAPPER.set(match, value))
            global.BLOCK_SWAPPER.delete(key)
        }
        if (key == undefined || value == undefined) return
    })

    const swapExists = (toReplace, replaceWith) => {
        if (Item.exists(toReplace) && Item.exists(replaceWith) || 
            !Block.getBlock(toReplace).defaultBlockState().air && !Block.getBlock(replaceWith).defaultBlockState().air
        ) return true
        return false
    }

    global.BLOCK_SWAPPER.forEach((value, key) => global.COMMON_SWAPPER.set(key, value))
    global.ITEM_SWAPPER.forEach((value, key) => global.COMMON_SWAPPER.set(key, value))
    global.COMMON_SWAPPER.forEach((value, key) => {
        if (!Item.exists(value) || !Item.exists(key)) global.COMMON_SWAPPER.delete(key)
    })

    if (global.DEBUG_MODE) {
        console.log('Processing swappers...')
        let configObj = {
            removals: global.REMOVALS.arr.sort(),
            item_swapper: {},
            block_swapper: {},
            entity_swapper: {},
            structure_swapper: {},
            state_swapper: global.STATE_SWAPPER
        }
        // Convert maps to objects
        global.ITEM_SWAPPER.forEach((value, key) => {
            configObj.item_swapper[key] = value
            if (!swapExists(key, value)) {
                console.warn(`Item Swap has items that don't exist: "${key}": "${value}"`)
            }
        })
        global.BLOCK_SWAPPER.forEach((value, key) => {
            configObj.block_swapper[key] = value
            if (!swapExists(key, value)) {
                console.warn(`Block Swap has blocks that don't exist: "${key}": "${value}"`)
            }
        })
        global.ENTITY_SWAPPER.forEach((value, key) => configObj.entity_swapper[key] = value)
        global.STRUCTURE_BLOCK_SWAPPER.forEach((value, key) => {
            configObj.structure_swapper[key] = {}
            value.forEach((v, k) => {
                configObj.structure_swapper[key][k] = v
                if (!swapExists(k, v)) {
                    console.warn(`Structure Block Swap has blocks that don't exist: "${key}": "${value}" in structure "${key}"`)
                }
            })
        })

        // JsonIO.write('kubejs/config/swaps.json', configObj)
        console.log('Finished processing swappers!')
    }
}
