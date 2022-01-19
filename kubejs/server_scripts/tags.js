// priority: 750
// Item Tags
onEvent('tags.items', event => {

    // Remove all tags from item(s)
    event.removeAllTagsFrom(global.fullRemovals)

    // Add (and create) tag to item
    const addTagToItem = [
        { tag: 'forge:plates', item: '#beyond_earth:compresseds' },
        { tag: 'forge:plates/steel', item: 'beyond_earth:compressed_steel' },
        { tag: 'forge:plates/silicon', item: 'beyond_earth:compressed_silicon' },
    ]

    // ForEach loop that adds tags to an item from constant addTagToItem
    addTagToItem.forEach((instance) => {
        event.add(instance.tag, instance.item)
    });
})