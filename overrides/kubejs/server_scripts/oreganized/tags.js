/** @param {$TagKubeEvent} e  */
function biomeTags_Oreganized(e) {
    e.removeAll('oreganized:has_structure/boulder')
    e.add('oreganized:has_structure/boulder', 'kubejs:classic_soil')
}
