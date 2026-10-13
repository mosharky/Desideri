/** @param {$KubeAssetGenerator} e */
function clientData_Polytone(e) {
    e.json('desideri:polytone/biome_modifiers/cave_fog', {
        targets: ['#c:is_underground'],
        fog_radius: 0.35,
        fog_fade: 10.5
    })

    e.json('desideri:polytone/biome_modifiers/generic_fog', {
        targets: ['#minecraft:is_overworld'],
        fog_end: '(1 - max(0, min(0.5 * ((RENDER_DISTANCE / 32) * 0.5), (DAY_TIME%24000 > 11500) * (DAY_TIME%24000 < 13000) + ((RAIN * 0.5) * ((RENDER_DISTANCE / 32) * 0.5)) - max(0, 11 - SKY_LIGHT))))',
        fog_start: '(10.5 + max(-1.25, min(1.25, (DAY_TIME%24000 > 11500) * (DAY_TIME%24000 < 13000) + (RAIN * 1.25) - max(0, 11 - SKY_LIGHT) * 100))) * max(1, (1 + (((RENDER_DISTANCE / 32) - 1) * 0.75)))',
        fog_fade: 8
    })
}