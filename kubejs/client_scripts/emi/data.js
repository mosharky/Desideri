/** @param {$KubeAssetGenerator} e */
function clientData_EMI(e) {
    // Higher order = later
    // Modded recipes are order 0 by default
    const propertiesJson = {}
    const beforeDefault = [
        'emi:info',
        'minecraft:crafting',
        'minecraft:smelting',
        'minecraft:blasting',
        'minecraft:smoking',
        'minecraft:campfire_cooking',
        'clayworks:baking',
        'minecraft:stonecutting',
        'emi:world_interaction',
        'minecraft:smithing',
        'minecraft:brewing',
        'farmersdelight:cutting',
        'farmersdelight:cooking',
        'minersdelight:copper_pot_cooking',
        'malum:spirit_infusion',
        'malum:spirit_transmutation',
        'malum:spirit_focusing',
        'malum:runeworking',
        'malum:weeping_well',
        'eidolon_repraised:crucible',
        'eidolon_repraised:worktable',
        'eidolon_repraised:rituals',
    ]
    const afterDefault = [
        'create:automatic_shapeless',
        'create:automatic_packing',
        'create:automatic_brewing',
        'create:automatic_shaped',
        'emi:anvil_repairing',
        'malum:spirit_repair',
        'embers:dawnstone_anvil',
        'emi:grinding',
        'emi:fuel',
        'emi:composting',
        'emi_loot:mob_drops',
        'emi_loot:chest_loot',
        'emi_loot:gameplay_drops',
        'emi_loot:archaeology_drops',
        'emi_loot:block_drops',
        'remi:item_tags',
        'remi:block_tags',
        'remi:fluid_tags',
        'remi:entity_type_tags',
    ]
    for (let i = 0; i < beforeDefault.length; i++) propertiesJson[beforeDefault[i]] = { order: i - 1000 }
    for (let i = 0; i < afterDefault.length; i++) propertiesJson[afterDefault[i]] = { order: i + 1000 }
    e.json('emi:category/properties/emi', propertiesJson)
}


// Reliable EMI (REMI)
/** @param {$KubeAssetGenerator} e */
function clientData_REMI(e) {
    function createTagGroup(tag) {
        e.json(`kubejs:stack_groups/${tag.split(':')[1]}`, {
            type: 'remi:tag',
            tag: tag
        })
    }

    function createItemGroup(itemsArray) {
        let obj = {
            type: 'remi:group',
            contents: []
        }
        itemsArray.forEach(item => {
            let contentObj = { type: '', id: '' }
            if (item.charAt(0) == '#') contentObj.type = 'tag'  // idk if this would even work
            else contentObj.type = 'item'
            contentObj.id = item
            obj.contents.push(contentObj)
        })

        e.json(`kubejs:stack_groups/${itemsArray[0].split(':')[1]}`, obj)
    }

    /*
    createTagGroup('quark:vertical_slabs')
    createTagGroup('quark:hollow_logs')
    createTagGroup('quark:hedges')
    createTagGroup('quark:posts')
    createTagGroup('forge:ladders')
    createTagGroup('forge:chests/wooden')
    createTagGroup('blueprint:wooden_beehives')
    createTagGroup('blueprint:wooden_bookshelves')
    createTagGroup('blueprint:wooden_chiseled_bookshelves')
    createTagGroup('suppsquared:item_shelves')
    createTagGroup('supplementaries:sign_posts')
    createTagGroup('snowyspirit:sleds')
    createTagGroup('immersive_weathering:bark')
    createTagGroup('decorative_blocks:seats')
    createTagGroup('decorative_blocks:supports')
    createTagGroup('decorative_blocks:palisades')
    createTagGroup('another_furniture:flower_boxes')
    createTagGroup('another_furniture:shutters')
    createTagGroup('another_furniture:tables')
    createTagGroup('another_furniture:chairs')
    createTagGroup('another_furniture:shelves')
    createTagGroup('another_furniture:drawers')
    createTagGroup('another_furniture:bench')
    createTagGroup('dramaticdoors:short_wooden_doors')
    createTagGroup('dramaticdoors:tall_wooden_doors')
    */
    // Items
    createItemGroup(['caverns_and_chasms:trail_potion'])
    createItemGroup(['caverns_and_chasms:tether_potion'])
    createItemGroup(['caverns_and_chasms:impact_potion'])
    // createItemGroup(['aetherworks:potion_gem'])
    // createItemGroup(['quark:seed_pouch'])
    createItemGroup(['supplementaries:bamboo_spikes'])
}
