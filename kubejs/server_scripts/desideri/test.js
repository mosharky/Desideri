/*
This is a script that'll probably be partially used in the future.
There's another script used alongside this in client_scripts called "test.js"

// Server
onEvent('player.logged_in', event => {
    // remove after testing
    if (!event.player.stages.has('potato')) {
        event.player.stages.add('potato')
    }

    if (event.player.stages.has('potato')) {
        event.player.sendData('test_packet', {})
    }
})

onEvent('server.custom_command', event => {
    if (event.id == 'send_packet') {
        event.player.sendData('test_packet', {})
    }
})

const itemRestrictions = ['minecraft:potato', 'minecraft:stick'];
// use this if we figure out mods
const modRestrictions = ['minecraft', 'origins'];
//  && event.player.hasStage('potato')
onEvent('item.crafted', event => {
    itemRestrictions.forEach((item) => {
        if (event.item.id == item) {
            for (let i = 0; i < event.inventory.size; i++) {
                event.player.give(event.inventory.get(i))
                event.inventory.set(i, 'air')
            }
            event.player.runCommand(`/clear @s ${item}`) 
        }
    })
})
*/