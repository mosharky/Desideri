function removals_Twigs() {
    global.REMOVALS.add([
        /twigs:.*(basalt|cobblestone|amethyst|tuff|calcite).*/,
        'twigs:rocky_dirt',
        /twigs:.*_table/,
        /twigs:.*column/,
        'twigs:twig',
        'twigs:pebble',
        /twigs:.*silt.*/,
    ])
}