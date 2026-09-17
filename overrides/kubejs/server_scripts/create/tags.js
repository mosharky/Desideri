/** @param {$TagKubeEvent} e */
function blockTags_Create(e) {
    e.removeAll('create:fan_processing_catalysts/haunting')
    e.removeAll('create:fan_processing_catalysts/smoking')
    e.removeAll('create:fan_processing_catalysts/blasting')
}

/** @param {$TagKubeEvent} e */
function fluidTags_Create(e) {
    e.removeAll('create:fan_processing_catalysts/blasting')
}