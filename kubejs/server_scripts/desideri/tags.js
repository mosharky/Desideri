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
        { tag: 'sprout:peanuts', item: 'thermal:peanut' },
        { tag: 'immersive_weathering:soot', item: 'immersive_weathering:soot_block' },
    )

    addTagToItem.forEach((instance) => event.add(instance.tag, instance.item))
})