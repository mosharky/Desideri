/** @param {$KubeAssetGenerator} e */
function clientData_SnowRealMagic(e) {

    // creating snowy variants of various foliage
    // source/example: https://github.com/Snownee/SnowRealMagic/blob/1.21-neoforge/src/main/resources/assets/minecraft/srm_variants/block/short_grass.json
    // https://github.com/Snownee/SnowRealMagic#customization

    const registerCross = (block, blockModel, blockTexture, overlayTexture) => {
        const [blockNamespace, blockId] = block.split(':')
        const [blockModelNamespace, blockModelId] = blockModel.split(':')
        const [blockTextureNamespace, blockTextureId] = blockTexture.split(':')
        const [overlayTextureNamespace, overlayTextureId] = overlayTexture.split(':')

        e.json(`snowrealmagic:models/block/snowy_${blockId}`, {
            parent: 'snowrealmagic:block/snowy_cross',
            textures: {
                cross: `${blockTextureNamespace}:block/${blockTextureId}`,
                snow: `${overlayTextureNamespace}:block/${overlayTextureId}`
            }
        })

        // todo: how do i write an mcmeta file with kubejs??
        // e.json(`${blockModelNamespace}:models/block/${blockModelId}.json.mcmeta`, {
            // srm: { model: `snowrealmagic:block/snowy_${blockId}` }
        // })

        e.json(`${blockNamespace}:srm_variants/block/${blockId}`, {
            model: `snowrealmagic:block/snowy_${blockId}`
        })
    }

    registerCross('minecraft:short_grass', 'minecraft:short_grass', 'nomansland:plants/frosted_grass_snowy', 'nomansland:plants/frosted_grass_snowy')
    registerCross('nomansland:grass_sprouts', 'nomansland:plants/grass_sprouts', 'windswept:snowy_sprouts', 'windswept:snowy_sprouts')
}