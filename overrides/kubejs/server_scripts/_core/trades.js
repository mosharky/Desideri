MoreJS.playerStartTrading(e => {
    // ⚠️ AUTO CONVERTING ⚠️ (an attempt)
    /*
    if (global.DEBUG_MODE) console.log('TRADING WITH: ' + e.getMerchant().getClass().getName())
    e.forEachOffers((o, i) => {
        let currencyItems = ['numismaticoverhaul:bronze_coin', 'numismaticoverhaul:silver_coin', 'numismaticoverhaul:gold_coin']
        let firstInputId = o.getFirstInput().getId()
        let firstInputCount = o.getFirstInput().getCount()
        let secondInputId = o.getSecondInput().getId()
        let secondInputCount = o.getSecondInput().getCount()
        let outputId = o.getOutput().getId()
        let outputCount = o.getOutput().getCount()
        // numismatic has a rate of 1 Emerald = 125 Bronze: https://github.com/seymourimadeit/numismatic-overhaul-reforged-again/blob/1.20.1/src/main/java/tallestred/numismaticoverhaul/villagers/data/RemappingTradeWrapper.java#L41
        if (firstInputId == 'minecraft:emerald' && !currencyItems.includes(secondInputId) && !currencyItems.includes(outputId)) {
            if (global.DEBUG_MODE) console.log(`TRADING AUTO-CONVERT: Converted ${o.getFirstInput().toItemString()} to ${currencyItem(firstInputCount * 125).toItemString()} with output ${outputId} from ${e.getMerchant().getClass().getName()}`)
            o.setFirstInput(currencyItem(firstInputCount * 125))
        }
        if (secondInputId == 'minecraft:emerald' && !currencyItems.includes(outputId) && !currencyItems.includes(firstInputId)) {
            if (global.DEBUG_MODE) console.log(`TRADING AUTO-CONVERT: Converted ${o.getOutput().toItemString()} to ${currencyItem(firstInputCount * 125).toItemString()} with output ${outputId} from ${e.getMerchant().getClass().getName()}`)
            o.setSecondInput(currencyItem(secondInputCount * 125))
        }
        if (outputId == 'minecraft:emerald' && !currencyItems.includes(secondInputId) && !currencyItems.includes(firstInputId)) {
            if (global.DEBUG_MODE) console.log(`TRADING AUTO-CONVERT: Converted ${o.getOutput().toItemString()} to ${currencyItem(firstInputCount * 125).toItemString()} with input ${firstInputId} from ${e.getMerchant().getClass().getName()}`)
            o.setOutput(currencyItem(outputCount * 125))
        }

        // TODO: doesnt work on wandering trader? maybe just for the alexs mobs elephant trader?
        if (global.REMOVALS.set.has(outputId)) o.setDisabled(true)
    })
    */
})
