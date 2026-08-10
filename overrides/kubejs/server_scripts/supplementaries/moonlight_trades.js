/** @param {$KubeDataGenerator} e  */
function moonlightTrades_Supplementaries(e) {
    e.json('supplementaries:moonlight/villager_trade/red_merchant/blue_bomb', {
        'neoforge:conditions': [{ flag: 'bomb', type: 'supplementaries:flag' }],
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'simple',
            max_trades: 3,
            price_multiplier: 0.2,
            price: { id: 'numismaticoverhaul:gold_coin', count: 1 },
            price_secondary: { id: 'supplementaries:bomb', count: 1 },
            offer: { id: 'supplementaries:bomb_blue', count: 1 }
        }
    })
    e.json('supplementaries:moonlight/villager_trade/red_merchant/bomb', {
        'neoforge:conditions': [{ flag: 'bomb', type: 'supplementaries:flag' }],
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'simple',
            max_trades: 12,
            price: { id: 'numismaticoverhaul:silver_coin', count: 3 },
            offer: { id: 'supplementaries:bomb', count: 1 }
        }
    })
    e.json('supplementaries:moonlight/villager_trade/red_merchant/cannon', {
        'neoforge:conditions': [{ flag: 'cannon', type: 'supplementaries:flag' }],
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'simple',
            max_trades: 12,
            price: { id: 'numismaticoverhaul:silver_coin', count: 6 },
            offer: { id: 'supplementaries:cannon', count: 1 }
        }
    })
    e.json('supplementaries:moonlight/villager_trade/red_merchant/cannonball', {
        'neoforge:conditions': [{ flag: 'cannonball', type: 'supplementaries:flag' }],
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'simple',
            max_trades: 12,
            price: { id: 'numismaticoverhaul:silver_coin', count: 5 },
            offer: { id: 'supplementaries:cannonball', count: 1 }
        }
    })
    e.json('supplementaries:moonlight/villager_trade/red_merchant/copper_lantern', {
        'neoforge:conditions': [{ modid: 'suppsquared', type: 'neoforge:mod_loaded' }],
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'simple',
            max_trades: 12,
            price: { id: 'numismaticoverhaul:bronze_coin', count: 40 },
            offer: { id: 'suppsquared:copper_lantern', count: 1 }
        }
    })
    e.json('supplementaries:moonlight/villager_trade/red_merchant/firework_star', {
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'supplementaries:random_firework_star',
            max_trades: 12,
            price: { id: 'numismaticoverhaul:silver_coin', count: 2 },
            amount: 1
        }
    })
    e.json('supplementaries:moonlight/villager_trade/red_merchant/gunpowder', {
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'simple',
            max_trades: 8,
            price: { id: 'numismaticoverhaul:silver_coin', count: 2 },
            offer: { id: 'minecraft:gunpowder', count: 2 }
        }
    })
    e.json('supplementaries:moonlight/villager_trade/red_merchant/lantern', {
        'neoforge:conditions': [{ type: 'neoforge:not', value: { modid: 'suppsquared', type: 'neoforge:mod_loaded' } }],
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'simple',
            max_trades: 12,
            price: { id: 'numismaticoverhaul:bronze_coin', count: 60 },
            offer: { id: 'minecraft:lantern', count: 1 }
        }
    })
    e.json('supplementaries:moonlight/villager_trade/red_merchant/rocket', {
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'supplementaries:random_firework',
            max_trades: 12,
            price: { id: 'numismaticoverhaul:silver_coin', count: 3 },
            price_secondary: { id: 'minecraft:paper', count: 1 },
            amount: 3
        }
    })
    e.json('supplementaries:moonlight/villager_trade/red_merchant/rope', {
        'neoforge:conditions': [{ flag: 'rope', type: 'supplementaries:flag' }],
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'simple',
            max_trades: 16,
            price: { id: 'numismaticoverhaul:silver_coin', count: 1 },
            offer: { id: 'supplementaries:rope', count: 4 }
        }
    })
    e.json('supplementaries:moonlight/villager_trade/red_merchant/rope_arrow', {
        'neoforge:conditions': [{ flag: 'rope_arrow', type: 'supplementaries:flag' }],
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'simple',
            max_trades: 12,
            price: { id: 'numismaticoverhaul:silver_coin', count: 5 },
            offer: { id: 'supplementaries:rope_arrow', count: 1, components: { damage: 16 } }
        }
    })
    e.json('supplementaries:moonlight/villager_trade/red_merchant/spiky_bomb', {
        'neoforge:conditions': [
            { flag: 'bomb', type: 'supplementaries:flag' },
            { type: 'neoforge:mod_loaded', modid: 'oreganized' }
        ],
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'simple',
            max_trades: 3,
            price: { id: 'numismaticoverhaul:silver_coin', count: 24 },
            offer: { id: 'supplementaries:bomb_spiky', count: 1 }
        }
    })
    e.json('supplementaries:moonlight/villager_trade/red_merchant/tnt', {
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'simple',
            max_trades: 8,
            price: { id: 'numismaticoverhaul:silver_coin', count: 6 },
            offer: { id: 'minecraft:tnt', count: 1 }
        }
    })
}
