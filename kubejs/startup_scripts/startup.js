onEvent('worldgen.remove', event => {
    event.removeOres(ores => {
        ores.blocks = ['darkerdepths:silver_ore', 'darkerdepths:aridrock_silver_ore', 'darkerdepths:limestone_silver_ore', 'galosphere:silver_ore', 'galosphere:deepslate_silver_ore',]
    })
})