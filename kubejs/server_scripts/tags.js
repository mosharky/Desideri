// priority: 1000
// Item Tags
onEvent('tags.items', event => {

    // Remove all tags from fullRemovals items in array
    event.removeAllTagsFrom(global.fullRemovals)

    // Add (and create) tag to item
    const addTagToItem = [
    ]

    // ForEach loop that adds tags to an item from constant addTagToItem
    addTagToItem.forEach((instance) => {
        event.add(instance.tag, instance.item)
    });
})