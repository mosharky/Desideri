/** * @param {import("com.almostreliable.morejs.features.villager.events.VillagerTradingEventJS").$VillagerTradingEventJS$$Original} e */
function villagerTrades_NumismaticOverhaul(e) {
    const currency = new Set(['numismaticoverhaul:bronze_coin', 'numismaticoverhaul:silver_coin', 'numismaticoverhaul:gold_coin'])

    /*
    VillagerUtils.getProfessions().forEach(profession => {
        VillagerUtils.getVillagerTrades(profession).forEach(trade => {
            console.log(Object.keys(trade))
            console.log(Object.keys(trade).includes('offer'))
            console.log(
                `
                PROFESSION: ${profession}, ${profession.toString()}
                TRADE: ${trade}
                    1: ${trade.price}
                    2: ${trade.price2}
                      -> ${trade.forSale}
                `
            )
        })
    })
    */

    /*
    e.forEachTrades(trade => {
        trade.forEach(off => {
            let offer = off.getOffer()
            let costA = offer.getFirstCost()
            let costB = offer.getSecondCost()
            let output = offer.getOutput()

            // if trade is already handled by Numismatic Overhaul, continue to next iteration
            if (currency.has(costA) || currency.has(costB) || currency.has(output)) return

            // else, convert emeralds to currency (1 emerald = 125 bronze)
            if (costA.getId() == 'minecraft:emerald') offer.setFirstCost(currencyItem(costA.count * 125))
            if (costB.getId() == 'minecraft:emerald') offer.setSecondCost(currencyItem(costB.count * 125))
            if (output.getId() == 'minecraft:emerald') offer.setOutput(currencyItem(output.count * 125))

            if (global.DEBUG_MODE) {
                console.log(
                    `
                    TRADING AUTO-CONVERT:
                        ${costA};
                        ${costB};
                        -> ${output}
                    TO:
                        ${offer.getFirstCost()};
                        ${offer.getSecondCost()};
                        -> ${offer.getOutput()};
                    `
                )
            }
        })
    })
    */
}