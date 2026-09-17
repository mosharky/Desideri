/** @param {$RemoveEntriesKubeEvent} e  */
function hideItem_CavernsAndChasms(e) {
    e.remove(/caverns_and_chasms:.*ingot_placed/)
    e.remove(/caverns_and_chasms:.*brick_placed/)
}