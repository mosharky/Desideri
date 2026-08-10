/** @param {$KubeDataGenerator} e  */
function numismaticTrades_Core(e) {
    const wanderingTraderJson = {
        profession: 'wandering_trader', trades: {
            novice: [
                { type: SELL_STACK, price: 1600, sell: { item: 'farmersdelight:cabbage_seeds', count: 2 }, max_uses: 8, villager_experience: 5 },
                { type: SELL_STACK, price: 1600, sell: { item: 'farmersdelight:tomato_seeds', count: 2 }, max_uses: 8, villager_experience: 5 },
                { type: SELL_STACK, price: 1600, sell: { item: 'farmersdelight:onion', count: 2 }, max_uses: 8, villager_experience: 5 },
                { type: SELL_STACK, price: 1600, sell: { item: 'farmersdelight:rice', count: 2 }, max_uses: 8, villager_experience: 5 },
                { type: SELL_STACK, price: 1600, sell: { item: 'minersdelight:cave_carrot', count: 2 }, max_uses: 8, villager_experience: 5 },
                { type: SELL_STACK, price: 1600, sell: { item: 'supplementaries:flax_seeds', count: 2 }, max_uses: 8, villager_experience: 5 },
                { type: SELL_STACK, price: 2999, sell: { item: 'supplementaries:sack', count: 1 }, max_uses: 3, villager_experience: 5 },
                { type: SELL_STACK, price: 1800, sell: { item: 'supplementaries:globe', count: 1 }, max_uses: 3, villager_experience: 5 },
                { type: SELL_STACK, price: 2600, sell: { item: 'supplementaries:globe_sepia', count: 1 }, max_uses: 3, villager_experience: 5 },
            ],
            apprentice: [
                { type: 'numismaticoverhaul:enchant_item', base_price: 3000, allow_treasure: true, level: 60, item: { item: 'book' }, max_uses: 5, villager_experience: 15 },
                { type: SELL_STACK, price: 2000, sell: { item: 'backpacked:backpack', count: 1 }, max_uses: 1, villager_experience: 5 },
            ]
        }
    }

    const whitelist = [
        /atmospheric:.*/,
        /natures_spirit:.*/,
        /environmental:.*/,
        /upgrade_aquatic:.*/,
        /neapolitan:.*/,
        /autumnity:.*/,
        /windswept:.*/,
        /nomansland:.*/,
    ]
    let flowers = Ingredient.of('#minecraft:flowers').getItemIds().toArray().filter(flower => whitelist.some(regex => regex.test(flower)))
    // flowers.push()  // push strings if needed
    flowers.forEach(flower => wanderingTraderJson.trades.novice.push({ type: SELL_STACK, price: 120, sell: { item: flower, count: 1 }, max_uses: 12, villager_experience: 5 }))

    let saplings = Ingredient.of('#minecraft:saplings').getItemIds().toArray().filter(sapling => whitelist.some(regex => regex.test(sapling)))
    // saplings.push()  // push strings if needed
    saplings.forEach(sapling => wanderingTraderJson.trades.novice.push({ type: SELL_STACK, price: 1600, sell: { item: sapling, count: 1 }, max_uses: 8, villager_experience: 5 }))

    e.json('kubejs:villager_trades/wandering_trader', wanderingTraderJson)
}