function removals_SnowySpirit() {
    global.REMOVALS.add([
        /snowyspirit:.*ginger.*/,
        /snowyspirit:gumdrop.*/,
        'snowyspirit:candy_cane',
        'snowyspirit:candy_cane_block',
        'snowyspirit:wreath',
    ])

    global.ENTITY_REMOVALS.push(
        'snowy_spirit:gingerbread_golem'
    )
}