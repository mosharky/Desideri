// Entity events
/*
EntityEvents.checkSpawn(global.ENTITY_REMOVALS, e => {
    console.log(`Preventing spawn of ${e.entity.type} at ${e.entity.x}, ${e.entity.y}, ${e.entity.z}`)
    e.success(false)
})
*/

EntityEvents.spawned(e => {
    // TEST WITH:
    // /summon zombie ~ ~1 ~ {PersistenceRequired:1,ArmorItems:[{Count:1,id:"caverns_and_chasms:silver_boots"},{Count:1,id:"caverns_and_chasms:silver_leggings"},{Count:1,id:"caverns_and_chasms:silver_chestplate"},{Count:1,id:"caverns_and_chasms:silver_helmet"}]}
    if (e.entity.type == 'minecraft:skeleton' || e.entity.type == 'minecraft:zombie') {
        if (global.ITEM_SWAPPER.has(`${Item.of(e.entity.headArmorItem).getId()}`)) {
            e.entity.headArmorItem = Item.of(global.ITEM_SWAPPER.get(`${Item.of(e.entity.headArmorItem).getId()}`))
        }
        if (global.ITEM_SWAPPER.has(`${Item.of(e.entity.chestArmorItem).getId()}`)) {
            e.entity.chestArmorItem = Item.of(global.ITEM_SWAPPER.get(`${Item.of(e.entity.chestArmorItem).getId()}`))
        }
        if (global.ITEM_SWAPPER.has(`${Item.of(e.entity.legsArmorItem).getId()}`)) {
            e.entity.legsArmorItem = Item.of(global.ITEM_SWAPPER.get(`${Item.of(e.entity.legsArmorItem).getId()}`))
        }
        if (global.ITEM_SWAPPER.has(`${Item.of(e.entity.feetArmorItem).getId()}`)) {
            e.entity.feetArmorItem = Item.of(global.ITEM_SWAPPER.get(`${Item.of(e.entity.feetArmorItem).getId()}`))
        }
        if (global.ITEM_SWAPPER.has(`${Item.of(e.entity.mainHandItem).getId()}`)) {
            e.entity.mainHandItem = Item.of(global.ITEM_SWAPPER.get(`${Item.of(e.entity.mainHandItem).getId()}`))
        }
        if (global.ITEM_SWAPPER.has(`${Item.of(e.entity.offHandItem).getId()}`)) {
            e.entity.offHandItem = Item.of(global.ITEM_SWAPPER.get(`${Item.of(e.entity.offHandItem).getId()}`))
        }
    }
})


// Player events
global.COMMON_SWAPPER.forEach((replaceWith, toReplace) => {
    PlayerEvents.inventoryChanged(toReplace, e => {
        const slot = e.player.inventory.find(toReplace)
        const stack = e.player.inventory.getStackInSlot(slot)
        if (!global.DEBUG_MODE) {
            e.player.inventory.setStackInSlot(slot, Item.of(replaceWith, stack.count))
            e.player.tell([
                Text.gray('An item in your inventory, '),
                Text.red(prettyItem(toReplace)),
                Text.gray(' has been replaced with '),
                Text.green(prettyItem(replaceWith)),
                Text.gray('!')
            ])
        }
    })
})

PlayerEvents.loggedIn(e => {
    // if (!e.player.stages.has('starter_items')) {
        // e.player.stages.add('starter_items')
        // e.player.addItem(AKASHIC_TOME)
    // }
})