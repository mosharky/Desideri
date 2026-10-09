/** @param {$RecipesKubeEvent} e  */
function recipes_BountifulFares(e) {
    // bountiful fares flour > create
    e.recipes.create.milling([
        'bountifulfares:flour',
        CreateItem.of('2x bountifulfares:flour', 0.25),
        CreateItem.of('minecraft:wheat_seeds', 0.25)
    ], 'minecraft:wheat')

    // coconut
    // e.replaceInput({}, 'bountifulfares:coconut', 'natures_spirit:coconut')
    // e.remove({ id: 'bountifulfares:coconut_half_from_coconut' })
    // e.recipes.farmersdelight.cutting('natures_spirit:coconut', '#c:tools/knife', '2x bountifulfares:coconut_half')

    // recipes should use flour!
    const replaceWheatRecipes = [
        'farmersdelight:pie_crust',
        'neapolitan:adzuki_bun',
        'nomansland:food/pear_cobbler',
        'minersdelight:nutritional_bar',
        'nomansdelight:crafting/pesto_pizza',
        'nomansdelight:crafting/nut_bun',
    ].forEach(recipe => e.replaceInput({ id: recipe }, 'minecraft:wheat', '#c:flour'))
    e.replaceInput({ output: /.*(cake|gateau|tart|pie|scones|cookie)/ }, 'minecraft:wheat', '#c:flour')

    RECIPES.Cookie(e, 'bountifulfares:walnut_cookie', 'bountifulfares:walnut', true)

    // removing cringe milling recipes
    e.remove({ id: 'bountifulfares:coconut_coir_from_coconut_milling' })  // for natures spirit coconut recipe
    e.remove({ id: 'bountifulfares:palm_mulch_from_palm_frond_milling' })  // i removed palm fronds!!!
    // these should be relegated to Create's milling
    e.remove({ id: 'minecraft:amethyst_shard_from_amethyst_block_milling' })
    e.remove({ id: 'bountifulfares:amethyst_shard_from_amethyst_milling' })
    e.remove({ id: /minecraft:.*_ore_milling/, type: 'bountifulfares:milling' })

    // halve all outputs
    e.forEachRecipe({ type: 'bountifulfares:milling' }, recipe => {
        const json = global.json2json(recipe.originalJson)
        json.result_count = Math.ceil(json.result_count / 2)  // round up
        e.custom(json).id(recipe.getId())
    })

    // e.custom({
    //     type: 'bountifulfares:milling',
    //     ingredient: { item: 'natures_spirit:coconut' },
    //     result: { id: 'bountifulfares:coconut_coir' },
    //     result_count: 2
    // })
}
