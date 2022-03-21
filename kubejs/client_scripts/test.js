/*
This is a script that'll probably be partially used in the future.
There's another script used alongside this in server_scripts called "test.js"

// Client
let thing = false
onEvent('player.data_from_server.test_packet', event => {
    thing = true
})

onEvent('item.tooltip', tooltip => {
    tooltip.addAdvanced('minecraft:potato', (item, advanced, text) => {
        if (thing) {
            text.add(1, [Text.of('POWERFUL').red().bold()])
        }
    })
})
*/