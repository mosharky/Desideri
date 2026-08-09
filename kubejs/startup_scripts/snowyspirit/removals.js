function removals_SnowySpirit() {
    global.REMOVALS.add([
        /snowyspirit:.*gingerbread.*/,
        /snowyspirit:gumdrop.*/,
        'snowyspirit:candy_cane',
        'snowyspirit:candy_cane_block',
    ])

    global.ENTITY_REMOVALS.push(
        'snowy_spirit:gingerbread_golem'
    )
}