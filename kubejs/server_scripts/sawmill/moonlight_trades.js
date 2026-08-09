/** @param {$KubeDataGenerator} e  */
function moonlightTrades_Sawmill(e) {
    const biomeWoods = {
        'minecraft:plains': ['oak', 'birch'],
        'minecraft:jungle': ['jungle', 'bamboo'],
        'minecraft:snowy_plains': ['minecraft:spruce'],
        'minecraft:taiga': ['spruce'],
        'minecraft:dark_forest': ['dark_oak'],
        'minecraft:desert': ['cactus', { fallback: 'jungle' }],
        'minecraft:swamp': ['mangrove', 'cypress', 'willow'],
        'minecraft:beach': ['palm', { fallback: 'jungle' }]
    }

    e.json('sawmill:moonlight/villager_trade/carpenter/armor_stand', {
        type: 'simple',
        max_trades: 12,
        price: { id: 'numismaticoverhaul:silver_coin', count: 1 },
        offer: { id: 'minecraft:armor_stand', count: 1 },
        level: 2
    })
    e.json('sawmill:moonlight/villager_trade/carpenter/axe', {
        type: 'simple',
        max_trades: 12,
        price_multiplier: 0.2,
        price: { id: 'minecraft:iron_axe', count: 1 },
        offer: { id: 'numismaticoverhaul:silver_coin', count: 2 },
        level: 3
    })
    e.json('sawmill:moonlight/villager_trade/carpenter/boat', {
        type: 'sawmill:wood_item_to_emerald',
        buys: false,
        max_trades: 16,
        wood_block: 'chest_boat',
        wood_block_amount: 1,
        emeralds: { id: 'numismaticoverhaul:silver_coin', count: 1 },
        level: 4,
        biome_woods: biomeWoods
    })
    e.json('sawmill:moonlight/villager_trade/carpenter/diamond_axe', {
        type: 'simple',
        max_trades: 12,
        price_multiplier: 0.2,
        price: { id: 'minecraft:diamond_axe', count: 1 },
        offer: { id: 'numismaticoverhaul:silver_coin', count: 15 },
        level: 4
    })
    e.json('sawmill:moonlight/villager_trade/carpenter/hanging_sign', {
        type: 'sawmill:wood_item_to_emerald',
        buys: false,
        max_trades: 16,
        wood_block: 'hanging_sign',
        wood_block_amount: 1,
        emeralds: { id: 'numismaticoverhaul:silver_coin', count: 1 },
        level: 5,
        biome_woods: biomeWoods
    })
    e.json('sawmill:moonlight/villager_trade/carpenter/hat_stand', {
        type: 'simple',
        max_trades: 12,
        price: { id: 'numismaticoverhaul:silver_coin', count: 1 },
        offer: { id: 'supplementaries:hat_stand', count: 1 },
        level: 4
    })
    e.json('sawmill:moonlight/villager_trade/carpenter/log', {
        type: 'sawmill:wood_item_to_emerald',
        max_trades: 16,
        wood_block: 'log',
        wood_block_amount: 4,
        emeralds: { id: 'numismaticoverhaul:silver_coin', count: 1 },
        level: 1,
        wood_blacklist: []
    })
    e.json('sawmill:moonlight/villager_trade/carpenter/piston', {
        type: 'simple',
        max_trades: 6,
        price: { id: 'numismaticoverhaul:silver_coin', count: 1 },
        offer: { id: 'minecraft:piston', count: 1 },
        level: 5
    })
    e.json('sawmill:moonlight/villager_trade/carpenter/planks', {
        type: 'sawmill:wood_item_to_emerald',
        buys: false,
        max_trades: 16,
        wood_block: 'planks',
        wood_block_amount: 12,
        emeralds: { id: 'numismaticoverhaul:silver_coin', count: 1 },
        level: 3,
        biome_woods: biomeWoods
    })
    e.json('sawmill:moonlight/villager_trade/carpenter/sapling', {
        type: 'sawmill:wood_item_to_emerald',
        buys: true,
        max_trades: 16,
        wood_block: 'sapling',
        wood_block_amount: 8,
        emeralds: { id: 'numismaticoverhaul:silver_coin', count: 1 },
        level: 3,
        wood_blacklist: []
    })
    e.json('sawmill:moonlight/villager_trade/carpenter/stripping', {
        type: 'sawmill:log_stripping',
        max_trades: 16,
        amount: 4,
        price: { id: 'numismaticoverhaul:silver_coin', count: 1 },
        level: 3,
        biome_woods: biomeWoods
    })
    e.json('sawmill:moonlight/villager_trade/carpenter/torch', {
        type: 'simple',
        max_trades: 16,
        price: { id: 'numismaticoverhaul:silver_coin', count: 1 },
        offer: { id: 'minecraft:torch', count: 24 },
        level: 1
    })
    e.json('sawmill:moonlight/villager_trade/carpenter/wood', {
        type: 'sawmill:random_wood_item_to_emerald',
        max_trades: 16,
        wood_block: 'wood',
        wood_block_amount: 4,
        emeralds: { id: 'numismaticoverhaul:silver_coin', count: 1 },
        level: 2,
        wood_blacklist: []
    })
}
