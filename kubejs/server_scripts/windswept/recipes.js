/** @param {$RecipesKubeEvent} e */
function recipes_Windswept(e) {
    // e.replaceInput({}, 'windswept:icicles', 'immersive_weathering:icicle')
    // e.replaceOutput({}, 'windswept:icicles', 'immersive_weathering:icicle')

    e.replaceInput({id: 'windswept:christmas_pudding'}, 'minecraft:wheat', '#c:flour')
    
    shaped_EasyCookie(e, 'windswept:gingerbread_cookie', 'windswept:ginger_root', true)
}
