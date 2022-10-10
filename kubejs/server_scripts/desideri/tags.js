// priority: 1000
// Item Tags
onEvent('tags.items', event => {

    // Remove all tags from fullRemovals items in array
    event.removeAllTagsFrom(global.fullRemovals)
    event.removeAllTagsFrom([
        'valhelsia_structures:metal_framed_glass',
        'valhelsia_structures:metal_framed_glass_pane',
    ])

    // Add (and create) tag to item
    addTagToItem.push(
        { tag: 'desideri:disabled', item: global.fullRemovals },
        { tag: 'desideri:berries', item: ['minecraft:sweet_berries', 'minecraft:glow_berries', 'windswept:wild_berries']},
        { tag: 'sprout:peanuts', item: ['thermal:peanut', 'alexsmobs:acacia_blossom'] },
        { tag: 'desideri:bowls', item: ['minecraft:bowl', 'ecologics:coconut_husk'] },
        { tag: 'alexsmobs:bananas', item: 'neapolitan:banana_bunch' },
        { tag: 'alexsmobs:elephant_foodstuffs', item: 'neapolitan:banana_bunch' },
        { tag: 'alexsmobs:gorilla_foodstuffs', item: 'neapolitan:banana_bunch' },
        { tag: 'desideri:brown_mushrooms', item: ['minecraft:brown_mushroom', 'biomesoplenty:toadstool'] },
        { tag: 'forge:slimeballs', item: 'autumnity:snail_goo' },
    )

    removeTagFromItem.push(
        { tag: 'forge:ores/quartz', item: ['malum:natural_quartz_ore', 'malum:deepslate_quartz_ore'] }
    )

    addTagToItem.forEach(instance => event.add(instance.tag, instance.item))
    removeTagFromItem.forEach(instance => event.remove(instance.tag, instance.item))
})