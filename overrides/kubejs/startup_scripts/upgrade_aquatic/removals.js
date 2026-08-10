function removals_UpgradeAquatic() {
    global.REMOVALS.add([
        // /upgrade_aquatic:.*leaf_pile/,
        /upgrade_aquatic:river.*/,
        /upgrade_aquatic:.*mulberry.*/,
    ])
}
