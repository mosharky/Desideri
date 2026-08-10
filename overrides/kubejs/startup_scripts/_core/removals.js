function removals_Core() {
    for (const [woodType, woodTypeObj] of Object.entries(global.WOOD_TYPES.minecraft)) {
        if (woodType == 'oak') continue  // special case for oak chest in worldgen_Core
        structureSwapChest(`#kubejs:minecraft/has_${woodType}_chest`, 'minecraft:' + woodType)
    }

    global.REMOVALS.add([
        'minecraft:sunflower'  // spawn has a replacement block
        // 'minecraft:short_dry_grass',
        // 'minecraft:tall_dry_grass',
        // 'minecraft:leaf_litter',
    ])

    global.BLOCK_SWAPPER.set('minecraft:sunflower', 'spawn:sunflower')
}

const $SpawnEggItem = Java.loadClass('net.minecraft.world.item.SpawnEggItem')
function removals_Core_Final() {
    global.ENTITY_REMOVALS.forEach(entity => {
        const spawnEgg = $SpawnEggItem.byId(entity)
        if (spawnEgg != null) global.REMOVALS.add(spawnEgg)
    })
}