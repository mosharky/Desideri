// priority: 1000
// Item Tags
onEvent('tags.items', event => {

    // Remove all tags from fullRemovals items in array
    event.removeAllTagsFrom(global.fullRemovals)

    // Add (and create) tag to item
    const addTagToItem = [
        {
            tag: 'desideri:raw_fish_fillets',
            item: [
                'aquaculture:fish_fillet_raw',
                'farmersdelight:salmon_slice',
                'farmersdelight:cod_slice'
            ]
        },
        { tag: 'forge:raw_fishes', item: 'aquaculture:fish_fillet_raw' },
        { tag: 'forge:cooked_fishes', item: 'aquaculture:fish_fillet_cooked' },
    ]

    // ForEach loop that adds tags to an item from constant addTagToItem
    addTagToItem.forEach((instance) => {
        event.add(instance.tag, instance.item)
    });
})