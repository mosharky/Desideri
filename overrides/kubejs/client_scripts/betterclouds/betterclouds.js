// const $BcConfigManager = Java.loadClass("com.qendolin.betterclouds.config.ConfigManager")
// const $BetterClouds = Java.loadClass("com.qendolin.betterclouds.BetterClouds")
// const $MinecraftClient = Java.loadClass("net.minecraft.client.Minecraft")

// function dimensionalBetterClouds(dimension) {
//     /** @type {import("@package/com/qendolin/betterclouds/config").$Config} */
//     const config = $BcConfigManager.instance()

//     const reloadBetterClouds = () => {
//         if (!config.enabled) return
//         const mc = $MinecraftClient.getInstance()
//         mc.execute(() => {
//             const renderer = $BetterClouds.getCloudsRenderer()
//             if (renderer != null) {
//                 renderer.reload(mc.getResourceManager())
//             }
//         })
//     }

//     const overworldClouds = () => {
//         config.selectedPreset = 1
//         config.selectedNoisePreset = 2
//         config.distance = 4
//         config.fuzziness = 1
//         config.yRange = 265
//         config.yOffset = 0
//         config.spacing = 5.25
//         config.sizeXZ = 32
//         config.sizeY = 16
//         config.colorVariationFactor = 0.8
//         config.samplingScale = 1
//         config.scaleFalloffMin = 0.25
//         config.fogEndFactor = 1

//         reloadBetterClouds()
//     }

//     const aetherClouds = () => {
//         config.selectedPreset = 0
//         config.selectedNoisePreset = 0
//         config.distance = 3.3
//         config.fuzziness = 0.75
//         config.yRange = 100
//         config.yOffset = -60
//         config.spacing = 2.75
//         config.sizeXZ = 20
//         config.sizeY = 15
//         config.colorVariationFactor = 1.5
//         config.samplingScale = 1.1
//         config.scaleFalloffMin = 0.005
//         config.fogEndFactor = 0.575

//         reloadBetterClouds()
//     }

//     const defaultClouds = () => {
//         // overworldClouds()
//     }

//     switch (dimension) {
//         case 'minecraft:overworld':
//             overworldClouds()
//             break
//         case 'aether:the_aether':
//             aetherClouds()
//             break
//         default:
//             defaultClouds()
//             break
//     }
// }


// const $PlayerChangedDimensionEvent = Java.loadClass("net.neoforged.neoforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent")
// NativeEvents.onEvent($PlayerChangedDimensionEvent, e => {
//     dimensionalBetterClouds(e.to.location())
//     if (global.DEBUG_MODE) console.log(`Player "${e.entity.getName().string}" changed dimension to "${e.to.location()}"`)
// })

// const $PlayerRespawnEvent = Java.loadClass('net.neoforged.neoforge.event.entity.player.PlayerEvent$PlayerRespawnEvent')
// NativeEvents.onEvent($PlayerRespawnEvent, e => {
//     dimensionalBetterClouds(e.entity.level.dimension)
//     if (global.DEBUG_MODE) console.log(`Player "${e.entity.getName().string}" respawned in dimension "${e.entity.level.dimension}"`)
// })

// ClientEvents.loggedIn(e => {
//     dimensionalBetterClouds(e.player.level.dimension)
//     if (global.DEBUG_MODE) console.log(`Player "${e.player.getName().string}" logged into dimension "${e.player.level.dimension}"`)
// })