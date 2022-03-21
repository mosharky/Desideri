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
    const addTagToItem = [
        { tag: 'desideri:disabled', item: global.fullRemovals },
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
        { tag: 'desideri:berries', item: ['#rootsclassic:berries', 'minecraft:sweet_berries', 'minecraft:glow_berries']}
    ]

    // ForEach loop that adds tags to an item from constant addTagToItem
    addTagToItem.forEach((instance) => {
        event.add(instance.tag, instance.item)
    });
})