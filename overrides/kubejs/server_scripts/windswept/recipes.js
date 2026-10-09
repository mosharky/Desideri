/** @param {$RecipesKubeEvent} e */
function recipes_Windswept(e) {
    // e.replaceInput({}, 'windswept:icicles', 'immersive_weathering:icicle')
    // e.replaceOutput({}, 'windswept:icicles', 'immersive_weathering:icicle')

    // lavender
    e.replaceOutput({ id: 'windswept:lavender_bale_revert' }, 'windswept:lavender', 'nomansland:lavender_bush')
    e.replaceInput({ or: [
        { id: 'windswept:lavender_bale' },
        { id: 'windswept:lavender_crown' },
        { id: 'windswept_delights:lavender_salad' },
    ] }, 'windswept:lavender', 'nomansland:lavender_bush')


    e.replaceInput({ id: 'windswept:christmas_pudding' }, 'minecraft:wheat', '#c:flour')

    e.replaceInput({ id: 'windswept:snow_bricks' }, 'minecraft:snow', 'blockbox:packed_snow')
    e.replaceInput({ id: 'windswept:chiseled_packed_ice_bricks_from_packed_ice_bricks' }, 'windswept:packed_ice_bricks', 'blockbox:blockbox:packed_ice_bricks')

    RECIPES.Cookie(e, 'windswept:gingerbread_cookie', 'windswept:ginger_root', true)
}
