onEvent('recipes', (event) => {

    // nice future-proofing in case i decide to use Unearthed
    function strataOreCrushingWheel(modId, strata, material, outputNum, extraOutput, recipeId) {
        let oreBlock = `${modId}:${strata}_${material}_ore`
        let strataBlock = `${modId}:${strata}_sand` // change definiton when more strata stuff is added
        let crushedOre = `kubejs:crushed_${material}_ore`
        if (strata == 'stone') {
            oreBlock = `${modId}:${material}_ore`
            strataBlock = 'minecraft:cobblestone'
        }
        if (strata == 'deepslate') {
            oreBlock = `${modId}:deepslate_${material}_ore`
            strataBlock = 'minecraft:cobbled_deepslate'
        }
        if (strata == 'glacio' || strata == 'mercury') {
            strataBlock = `${modId}:${strata}_stone`
        }
        if (modId == 'immersiveengineering') {
            if (strata == 'deepslate') {
                oreBlock = `immersiveengineering:deepslate_ore_${material}`
            }
            if (strata == 'stone') {
                oreBlock = `immersiveengineering:ore_${material}`
            }
        }
        if (global.createSupportedOres.includes(material)) {
            crushedOre = `create:crushed_${material}_ore`
        }
        let output = [
            `${outputNum}x ${crushedOre}`,
            Item.of(crushedOre).withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of(strataBlock).withChance(0.12)
        ]
        if (extraOutput != undefined) {
            output.push(extraOutput)
        }
        if (recipeId != undefined) {
            return event.recipes.createCrushing(output, oreBlock).id(recipeId)
        } else {
            return event.recipes.createCrushing(output, oreBlock)
        }
    }

    function strataGemCrushingwheel(strata, gemItem, outputNum, extraOutput, recipeId) {
        let gemSplit = gemItem.split(':')
        let materialModId = gemSplit[0]
        let material = gemSplit[1]
        if (material.includes('_') && materialModId == 'minecraft') { // check for underscore, because lapis and redstone are different
            material = material.split('_')[0]
        }
        let oreBlock = `${strata}_${material}_ore`
        let strataBlock = `${strata}_sand` // change definiton when more strata ores are added or add more if statements
        if (strata == 'minecraft:stone') {
            oreBlock = `minecraft:${material}_ore`
            strataBlock = 'minecraft:cobblestone'
        }
        if (strata == 'minecraft:deepslate') {
            strataBlock = 'minecraft:cobbled_deepslate'
        }
        if (strata == 'beyond_earth:glacio' || strata == 'beyond_earth:mercury') {
            strataBlock = `${modId}:${strata}_stone`
        }
        // finalization
        let output = [
            `${outputNum}x ${gemItem}`,
            Item.of(gemItem).withChance(0.50),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of(strataBlock).withChance(0.12)
        ]
        if (extraOutput != undefined) {
            output.push(extraOutput)
        }
        if (recipeId != undefined) {
            return event.recipes.createCrushing(output, oreBlock).id(recipeId)
        } else {
            return event.recipes.createCrushing(output, oreBlock)
        }
    }

    function customOreCrushingWheel(oreBlock, crushedOre, strataBlock, outputNum) {
        return event.recipes.createCrushing([
            `${outputNum}x ${crushedOre}`,
            Item.of(crushedOre).withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75),
            Item.of(strataBlock).withChance(0.12)
        ], oreBlock)
    }

    strataOreCrushingWheel('beyond_earth', 'moon', 'iron', 2)
    strataOreCrushingWheel('beyond_earth', 'mars', 'iron', 2, Item.of('immersiveengineering:dust_saltpeter').withChance(0.50))
    strataOreCrushingWheel('beyond_earth', 'mercury', 'iron', 5)
    strataOreCrushingWheel('beyond_earth', 'glacio', 'iron', 2)
    strataOreCrushingWheel('beyond_earth', 'glacio', 'copper', 3)
    strataOreCrushingWheel('beyond_earth', 'venus', 'gold', 2, Item.of('immersiveengineering:dust_sulfur').withChance(0.25))
    strataOreCrushingWheel('immersiveengineering', 'stone', 'silver', 2)
    strataOreCrushingWheel('immersiveengineering', 'deepslate', 'silver', 2)
    strataOreCrushingWheel('immersiveengineering', 'stone', 'aluminum', 2)
    strataOreCrushingWheel('immersiveengineering', 'deepslate', 'aluminum', 2)
    strataOreCrushingWheel('minecraft', 'stone', 'copper', 2, undefined, 'create:crushing/copper_ore')
    strataOreCrushingWheel('minecraft', 'deepslate', 'copper', 2, undefined, 'create:crushing/deepslate_copper_ore')
    strataOreCrushingWheel('minecraft', 'stone', 'iron', 2, undefined, 'create:crushing/iron_ore')
    strataOreCrushingWheel('minecraft', 'stone', 'gold', 2, undefined, 'create:crushing/gold_ore')
    strataOreCrushingWheel('create', 'stone', 'zinc', 2, undefined, 'create:crushing/zinc_ore')
    // strataOreCrushingWheel('beyond_earth', 'moon', 'desh', 2)
    // strataOreCrushingWheel('beyond_earth', 'venus', 'calorite', 2, Item.of('immersiveengineering:dust_sulfur').withChance(0.75))
    // strataOreCrushingWheel('beyond_earth', 'mars', 'ostrum', 2, Item.of('immersiveengineering:dust_saltpeter').withChance(0.50))

    strataGemCrushingwheel('beyond_earth:mars', 'minecraft:diamond', 2, Item.of('immersiveengineering:dust_saltpeter').withChance(0.50))
    strataGemCrushingwheel('beyond_earth:venus', 'minecraft:diamond', 2), Item.of('immersiveengineering:dust_sulfur').withChance(0.25)
    strataGemCrushingwheel('beyond_earth:glacio', 'minecraft:lapis_lazuli', 12)
    strataGemCrushingwheel('beyond_earth:glacio', 'minecraft:coal', 2, Item.of('immersiveengineering:dust_sulfur').withChance(0.10))
    strataGemCrushingwheel('beyond_earth:venus', 'minecraft:coal', 2, Item.of('immersiveengineering:dust_sulfur').withChance(0.75))
    strataGemCrushingwheel('minecraft:stone', 'minecraft:coal', 1, Item.of('immersiveengineering:dust_sulfur').withChance(0.15), 'create:crushing/coal_ore')
    strataGemCrushingwheel('minecraft:deepslate', 'minecraft:coal', 2, Item.of('immersiveengineering:dust_sulfur').withChance(0.25), 'create:crushing/deepslate_coal_ore')

    customOreCrushingWheel('malum:blazing_quartz_ore', 'malum:blazing_quartz', 'minecraft:netherrack', 2)
    customOreCrushingWheel('malum:soulstone_ore', 'malum:soulstone_cluster', 'minecraft:stone', 2)
    customOreCrushingWheel('malum:soulstone_ore', 'malum:soulstone_cluster', 'minecraft:deepslate', 2)

    event.recipes.createCrushing('4x minecraft:string', '#minecraft:wool').id('create:crushing/wool')
    // event.recipes.createCrushing(['kubejs:crushed_desh_ore', Item.of('create:experience_nugget').withChance(0.75)], 'beyond_earth:raw_desh')
    // event.recipes.createCrushing(['kubejs:crushed_ostrum_ore', Item.of('create:experience_nugget').withChance(0.75)], 'beyond_earth:raw_ostrum')
    // event.recipes.createCrushing(['kubejs:crushed_calorite_ore', Item.of('create:experience_nugget').withChance(0.75)], 'beyond_earth:raw_calorite')
})