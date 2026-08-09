/** @param {$KubeAssetGenerator} e */
function clientData_Quark(e) {
    e.json('quark:attribute_tooltips', {
        'minecraft:generic.max_health': {
            display: {
                mainhand: 'difference',
                offhand: 'difference',
                feet: 'difference',
                legs: 'difference',
                chest: 'difference',
                head: 'difference',
                potion: 'difference'
            },
            texture: 'quark:attribute/max_health',
            compare: 'higher_better'
        },
        'minecraft:generic.knockback_resistance': {
            display: {
                mainhand: 'percentage',
                offhand: 'percentage',
                feet: 'percentage',
                legs: 'percentage',
                chest: 'percentage',
                head: 'percentage',
                potion: 'percentage'
            },
            texture: 'quark:attribute/knockback_resistance',
            compare: 'higher_better'
        },
        'minecraft:generic.movement_speed': {
            display: {
                mainhand: 'multiplier',
                offhand: 'multiplier',
                feet: 'multiplier',
                legs: 'multiplier',
                chest: 'multiplier',
                head: 'multiplier',
                potion: 'multiplier'
            },
            texture: 'quark:attribute/speed',
            compare: 'higher_better'
        },
        'minecraft:generic.attack_damage': {
            display: {
                mainhand: 'flat',
                offhand: 'difference',
                feet: 'difference',
                legs: 'difference',
                chest: 'difference',
                head: 'difference',
                potion: 'difference'
            },
            texture: 'quark:attribute/attack_damage',
            compare: 'higher_better'
        },
        'oreganized:kinetic_damage': {
            display: {
                mainhand: 'flat',
                offhand: 'difference',
                feet: 'difference',
                legs: 'difference',
                chest: 'difference',
                head: 'difference',
                potion: 'difference'
            },
            texture: 'quark:attribute/kinetic_damage',
            compare: 'higher_better'
        },
        /*
        'sortilege:generic.staff_damage': {
            display: {
                mainhand: 'flat',
                offhand: 'difference',
                feet: 'difference',
                legs: 'difference',
                chest: 'difference',
                head: 'difference',
                potion: 'difference'
            },
            texture: 'quark:attribute/magic_damage',
            compare: 'higher_better'
        },
        */
        'caverns_and_chasms:magic_damage': {
            display: {
                mainhand: 'flat',
                offhand: 'difference',
                feet: 'difference',
                legs: 'difference',
                chest: 'difference',
                head: 'difference',
                potion: 'difference'
            },
            texture: 'quark:attribute/magic_damage',
            compare: 'higher_better'
        },
        'lodestone:magic_damage': {
            display: {
                mainhand: 'flat',
                offhand: 'difference',
                feet: 'difference',
                legs: 'difference',
                chest: 'difference',
                head: 'difference',
                potion: 'difference'
            },
            texture: 'quark:attribute/magic_damage',
            compare: 'higher_better'
        },
        'minecraft:generic.attack_knockback': {
            display: {
                mainhand: 'flat',
                offhand: 'difference',
                feet: 'difference',
                legs: 'difference',
                chest: 'difference',
                head: 'difference',
                potion: 'difference'
            },
            texture: 'quark:attribute/attack_knockback',
            compare: 'higher_better'
        },
        'minecraft:generic.attack_speed': {
            display: {
                mainhand: 'flat',
                offhand: 'difference',
                feet: 'difference',
                legs: 'difference',
                chest: 'difference',
                head: 'difference',
                potion: 'multiplier'
            },
            texture: 'quark:attribute/attack_speed',
            compare: 'higher_better'
        },
        /*
        'sortilege:generic.staff_pierce': {
            display: {
                mainhand: 'flat',
                offhand: 'difference',
                feet: 'difference',
                legs: 'difference',
                chest: 'difference',
                head: 'difference',
                potion: 'multiplier'
            },
            texture: 'quark:attribute/magic_pierce',
            compare: 'higher_better'
        },
        'sortilege:generic.staff_range': {
            display: {
                mainhand: 'flat',
                offhand: 'difference',
                feet: 'difference',
                legs: 'difference',
                chest: 'difference',
                head: 'difference',
                potion: 'multiplier'
            },
            texture: 'quark:attribute/magic_range',
            compare: 'higher_better'
        },
        */
        'minecraft:generic.armor': {
            display: {
                mainhand: 'flat',
                offhand: 'flat',
                feet: 'flat',
                legs: 'flat',
                chest: 'flat',
                head: 'flat',
                potion: 'flat'
            },
            texture: 'quark:attribute/armor',
            compare: 'higher_better'
        },
        'minecraft:generic.armor_toughness': {
            display: {
                mainhand: 'flat',
                offhand: 'flat',
                feet: 'flat',
                legs: 'flat',
                chest: 'flat',
                head: 'flat',
                potion: 'flat'
            },
            texture: 'quark:attribute/armor_toughness',
            compare: 'higher_better'
        },
        'galosphere:illager_resistance': {
            display: {
                mainhand: 'flat',
                offhand: 'flat',
                feet: 'flat',
                legs: 'flat',
                chest: 'flat',
                head: 'flat',
                potion: 'flat'
            },
            texture: 'quark:attribute/illager_resist',
            compare: 'higher_better'
        },
        'caverns_and_chasms:lifesteal': {
            display: {
                mainhand: 'percentage',
                offhand: 'percentage',
                feet: 'percentage',
                legs: 'percentage',
                chest: 'percentage',
                head: 'percentage',
                potion: 'percentage'
            },
            texture: 'quark:attribute/life_steal',
            compare: 'higher_better'
        },
        'caverns_and_chasms:magic_protection': {
            display: {
                mainhand: 'percentage',
                offhand: 'percentage',
                feet: 'percentage',
                legs: 'percentage',
                chest: 'percentage',
                head: 'percentage',
                potion: 'percentage'
            },
            texture: 'quark:attribute/spell_resist',
            compare: 'higher_better'
        },
        'caverns_and_chasms:experience_boost': {
            display: {
                mainhand: 'percentage',
                offhand: 'percentage',
                feet: 'percentage',
                legs: 'percentage',
                chest: 'percentage',
                head: 'percentage',
                potion: 'percentage'
            },
            texture: 'quark:attribute/bonus_exp',
            compare: 'higher_better'
        },
        'caverns_and_chasms:slowness_infliction': {
            display: {
                mainhand: 'flat',
                offhand: 'flat',
                feet: 'flat',
                legs: 'flat',
                chest: 'flat',
                head: 'flat',
                potion: 'flat'
            },
            texture: 'quark:attribute/slowness',
            compare: 'higher_better'
        },
        /*
        'caverns_and_chasms:weakness_aura': {
            display: {
                mainhand: 'flat',
                offhand: 'flat',
                feet: 'flat',
                legs: 'flat',
                chest: 'flat',
                head: 'flat',
                potion: 'flat'
            },
            texture: 'quark:attribute/aoe_effect',
            compare: 'higher_better'
        },
        */
        'malum:soul_ward_capacity': {
            display: {
                mainhand: 'flat',
                offhand: 'flat',
                feet: 'flat',
                legs: 'flat',
                chest: 'flat',
                head: 'flat',
                potion: 'flat'
            },
            texture: 'quark:attribute/soul_ward_capacity',
            compare: 'higher_better'
        },
        'malum:soul_ward_recovery_rate': {
            display: {
                mainhand: 'flat',
                offhand: 'flat',
                feet: 'flat',
                legs: 'flat',
                chest: 'flat',
                head: 'flat',
                potion: 'flat'
            },
            texture: 'quark:attribute/soul_ward_recovery_rate',
            compare: 'higher_better'
        },
        'malum:malignant_conversion': {
            display: {
                mainhand: 'flat',
                offhand: 'flat',
                feet: 'flat',
                legs: 'flat',
                chest: 'flat',
                head: 'flat',
                potion: 'flat'
            },
            texture: 'quark:attribute/malignant_conversion',
            compare: 'higher_better'
        },
        'lodestone:magic_proficiency': {
            display: {
                mainhand: 'flat',
                offhand: 'flat',
                feet: 'flat',
                legs: 'flat',
                chest: 'flat',
                head: 'flat',
                potion: 'flat'
            },
            texture: 'quark:attribute/magic_proficiency',
            compare: 'higher_better'
        },
        /*
        'irons_spellbooks:max_mana': {
            display: {
                mainhand: 'difference',
                offhand: 'difference',
                feet: 'difference',
                legs: 'difference',
                chest: 'difference',
                head: 'difference',
                potion: 'difference'
            },
            texture: 'quark:attribute/max_mana',
            compare: 'higher_better'
        },
        'irons_spellbooks:spell_power': {
            display: {
                mainhand: 'multiplier',
                offhand: 'multiplier',
                feet: 'multiplier',
                legs: 'multiplier',
                chest: 'multiplier',
                head: 'multiplier',
                potion: 'multiplier'
            },
            texture: 'quark:attribute/spell_power',
            compare: 'higher_better'
        },
        'irons_spellbooks:mana_regen': {
            display: {
                mainhand: 'multiplier',
                offhand: 'multiplier',
                feet: 'multiplier',
                legs: 'multiplier',
                chest: 'multiplier',
                head: 'multiplier',
                potion: 'multiplier'
            },
            texture: 'quark:attribute/mana_regen',
            compare: 'higher_better'
        },
        'irons_spellbooks:cooldown_reduction': {
            display: {
                mainhand: 'multiplier',
                offhand: 'multiplier',
                feet: 'multiplier',
                legs: 'multiplier',
                chest: 'multiplier',
                head: 'multiplier',
                potion: 'multiplier'
            },
            texture: 'quark:attribute/cooldown_reduction',
            compare: 'higher_better'
        },
        */
        'minecraft:generic.luck': {
            display: {
                mainhand: 'percentage',
                offhand: 'percentage',
                feet: 'percentage',
                legs: 'percentage',
                chest: 'percentage',
                head: 'percentage',
                potion: 'percentage'
            },
            texture: 'quark:attribute/luck',
            compare: 'higher_better'
        },
        'neoforge:swim_speed': {
            display: {
                mainhand: 'multiplier',
                offhand: 'multiplier',
                feet: 'multiplier',
                legs: 'multiplier',
                chest: 'multiplier',
                head: 'multiplier',
                potion: 'multiplier'
            },
            texture: 'quark:attribute/swim_speed',
            compare: 'higher_better'
        },
        'minecraft:generic.gravity': {
            display: {
                mainhand: 'multiplier',
                offhand: 'multiplier',
                feet: 'multiplier',
                legs: 'multiplier',
                chest: 'multiplier',
                head: 'multiplier',
                potion: 'multiplier'
            },
            texture: 'quark:attribute/gravity'
        },
        'minecraft:player.block_interaction_range': {
            display: {
                mainhand: 'flat',
                offhand: 'flat',
                feet: 'flat',
                legs: 'flat',
                chest: 'flat',
                head: 'flat',
                potion: 'flat'
            },
            texture: 'quark:attribute/reach_distance',
            compare: 'higher_better'
        },
        'minecraft:player.entity_interaction_range': {
            display: {
                mainhand: 'flat',
                offhand: 'flat',
                feet: 'flat',
                legs: 'flat',
                chest: 'flat',
                head: 'flat',
                potion: 'flat'
            },
            texture: 'quark:attribute/attack_range',
            compare: 'higher_better'
        },
        'minecraft:generic.step_height': {
            display: {
                mainhand: 'flat',
                offhand: 'flat',
                feet: 'flat',
                legs: 'flat',
                chest: 'flat',
                head: 'flat',
                potion: 'flat'
            },
            texture: 'quark:attribute/step_height',
            compare: 'higher_better'
        }
    })
}
