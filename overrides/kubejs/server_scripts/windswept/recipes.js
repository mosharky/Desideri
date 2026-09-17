/** @param {$RecipesKubeEvent} e */
function recipes_Windswept(e) {
    // e.replaceInput({}, 'windswept:icicles', 'immersive_weathering:icicle')
    // e.replaceOutput({}, 'windswept:icicles', 'immersive_weathering:icicle')

    e.replaceInput({ id: 'windswept:christmas_pudding' }, 'minecraft:wheat', '#c:flour')

    e.replaceInput({ id: 'windswept:snow_bricks' }, 'minecraft:snow', 'blockbox:packed_snow')
    e.replaceInput({ id: 'windswept:chiseled_packed_ice_bricks_from_packed_ice_bricks' }, 'windswept:packed_ice_bricks', 'blockbox:blockbox:packed_ice_bricks')

    shaped_EasyCookie(e, 'windswept:gingerbread_cookie', 'windswept:ginger_root', true)
}
