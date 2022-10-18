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
        { tag: 'desideri:berries', item: ['minecraft:sweet_berries', 'minecraft:glow_berries', 'windswept:wild_berries'] },
        { tag: 'sprout:peanuts', item: ['thermal:peanut', 'alexsmobs:acacia_blossom'] },
        { tag: 'desideri:bowls', item: ['minecraft:bowl', 'ecologics:coconut_husk'] },
        { tag: 'alexsmobs:bananas', item: 'neapolitan:banana_bunch' },
        { tag: 'alexsmobs:elephant_foodstuffs', item: 'neapolitan:banana_bunch' },
        { tag: 'alexsmobs:gorilla_foodstuffs', item: 'neapolitan:banana_bunch' },
        { tag: 'desideri:brown_mushrooms', item: ['minecraft:brown_mushroom', 'biomesoplenty:toadstool', 'missingwilds:brown_polypore_mushroom'] },
        { tag: 'forge:slimeballs', item: 'autumnity:snail_goo' },
        { tag: 'comforts:sleeping_bags', item: /comforts:sleeping_bag.*/ },
        { tag: 'comforts:hammocks', item: /comforts:hammock.*/ },
        { tag: 'minecraft:wool_carpets', item: /minecraft:.*carpet/ },
    )

    removeTagFromItem.push(
        { tag: 'forge:ores/quartz', item: /malum:.*quartz_ore/ }
    )

    addTagToItem.forEach(instance => event.add(instance.tag, instance.item))
    removeTagFromItem.forEach(instance => event.remove(instance.tag, instance.item))


    event.add('comforts:sleeping_bags', /comforts:sleeping_bag.*/)
})