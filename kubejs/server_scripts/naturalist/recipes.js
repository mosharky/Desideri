/** @param {$RecipesKubeEvent} e */
function recipes_Naturalist(e) {
    e.replaceInput({}, 'naturalist:snail_shell', 'spawn:snail_shell')
    e.remove({ id: 'naturalist:pumpkin_pie' })
    e.remove({ id: 'naturalist:cake' })
}