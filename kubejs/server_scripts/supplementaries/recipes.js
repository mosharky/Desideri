/** @param {$RecipesKubeEvent} e */
function recipes_Supplementaries(e) {
    e.remove('supplementaries:rope')

    e.stonecutting('supplementaries:rope', '#supplementaries:ropes')
    e.shapeless('supplementaries:sconce_lever', ['nomansland:sconce_torch', 'minecraft:lever'])

    e.shapeless('supplementaries:candy', ['bountifulfares:candy', 'minecraft:paper']).id('supplementaries:candy')
}
