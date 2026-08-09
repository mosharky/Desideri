/** @param {$RecipesKubeEvent} e */
function recipes_Core(e) {
    // removing recipe types that will be added to later
    e.remove({ type: 'manual_labour:workstone' })

    e.replaceInput({ not: { id: 'woodworks:trapped_chest' } }, 'minecraft:chest', '#c:chests/wooden')

    // e.shapeless(AKASHIC_TOME, ['minecraft:book', 'minecraft:dirt'])

    // fixes a bug
    e.replaceInput({}, '#c:dough', '#c:foods/dough')
    e.replaceInput({}, '#c:doughs', '#c:foods/dough')

    // milk tags
    e.replaceInput({}, 'minecraft:milk_bucket', '#c:milk')
    e.replaceInput({}, '#c:drinks/milk', '#c:milk')
    e.replaceInput({}, '#c:buckets/milk', '#c:milk')

    // duplicates
    e.remove({ id: 'minecraft:lodestone' })

    // cooking overhaul
    e.remove({ id: 'minecraft:bread' })
    e.remove({ id: 'minecraft:pumpkin_pie' })
    e.remove({ id: 'minecraft:cake' })
    shaped_EasyCookie(e, 'minecraft:cookie', 'neapolitan:chocolate_bar', true)

    // Logs into chests
    for (const [mod, woodTypes] of Object.entries(global.WOOD_TYPES)) {
        for (const [woodType, woodTypeObj] of Object.entries(woodTypes)) {
            if (woodTypeObj.minecraft.log == undefined) break
            if (woodTypeObj.woodworks.chest == undefined) break
            if (woodTypeObj.woodworks.trapped_chest == undefined) break
            e.shaped(Item.of(woodTypeObj.woodworks.chest, 4), [
                'AAA',
                'A A',
                'AAA'],
                { A: woodTypeObj.minecraft.log })

            e.shaped(Item.of(woodTypeObj.woodworks.trapped_chest, 4), [
                'AAA',
                'ABA',
                'AAA'],
                {
                    A: woodTypeObj.minecraft.log,
                    B: 'minecraft:tripwire_hook'
                })
        }
    }
}
