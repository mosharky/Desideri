/** @param {$TagKubeEvent} e */
function biomeTags_Malum(e) {
    e.add('malum:has_azure_runewood', [
        'natures_spirit:boreal_taiga',
        'natures_spirit:snowy_fir_forest',
        'windswept:snowy_pine_barrens',
        'windswept:snowy_chestnut_forest',
    ])

    e.removeAll('malum:has_rare_runewood')
    e.add('malum:has_rare_runewood', [
        'minecraft:flower_forest',
        'natures_spirit:wisteria_forest',
        'natures_spirit:floral_ridges'
    ])

    e.removeAll('malum:has_runewood')
    e.add('malum:has_runewood', [
        '#natures_spirit:is_autumn',
    ])
}