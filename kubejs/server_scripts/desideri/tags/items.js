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
        { tag: 'sprout:peanuts', item: 'thermal:peanut' }
    )

    // ForEach loop that adds tags to an item from constant addTagToItem
    addTagToItem.forEach((instance) => {
        event.add(instance.tag, instance.item)
    })
})