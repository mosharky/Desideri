/** @param {$RecipesKubeEvent} e  */
function recipes_Spawn(e) {
    // e.replaceInput({ id: 'spawn:potted_sweet_berries' }, 'spawn:snail_shell', 'autumnity:snail_shell_piece')
    // e.replaceInput({ id: 'spawn:escargot' }, 'spawn:snail_shell', 'autumnity:snail_shell_piece')

    RECIPES.Cookie(e, 'spawn:date_cookie', 'spawn:dates', true)
}