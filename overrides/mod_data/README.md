# An assortment of silly python scripts
Most of this probably could've been done better..

## Structure swaps - `structure_swap.py`
- Example usage in https://github.com/mosharky/ModedMinecraf
- Might only work on Windows
- It can currently handle the following swaps:
    - Blocks swaps
        - Including blocks in NBTs, like Create's copycat blocks
        - Jigsaw blocks
        - Spawners (swap the entity that's supposed to spawn)
    - Entity swaps
        - Swaps items in Armor Stands
        - Swaps items in item frames (and quark item frames)
    - Block Entities (swap items contained in them)
- Notifies when a block or item that was supposed to be swapped is still in a structure
- All events are logged in `mod_data/mod_data.log`
- Takes ~5-10 minutes to run; there's many ways this script could be optimized

### Requirements
- Requires Python 3.13+
- Requires (and made possible by) NBTLib (https://github.com/vberlier/nbtlib)
```
pip install "nbtlib==1.12.1"
```

### Usage
- The script is set up to work with directories defined as variables in the script. By default, these are:
    - Script in `PrismLauncher/instances/[modpack]/mod_data/`
    - Mods in `PrismLauncher/instances/[modpack]/minecraft/mods/`
    - `swaps.json` in `PrismLauncher/instances/[modpack]/minecraft/kubejs/config/`
    - Output in `PrismLauncher/instances/[modpack]/kubejs/data/structures.zip`
- The script should be run from `PrismLauncher/instances/[modpack]`
- If you want to change vanilla structures, a vanilla datapack of your version needs to be provided in `mod_data/extras/`. You can get this for your version at [misode/mcmeta](https://github.com/misode/mcmeta). Here's an example of it: https://github.com/mosharky/ModedMinecraf/blob/dev/mod_data/extras/vanilla-1.20.1.zip
- If you have a mod/datapack that's supposed to override another mod/datapack, put it in `mod_data/overrides/`

### How it works
Desired swaps/removals should be in `swaps.json` (by default expected in `minecraft/kubejs/config/swaps.json`). It should have the following fields:
```jsonc
{
    "removals": [],             // a list of blocks or items that are supposed to be removed
    "item_swapper": {},         // key should be the item to swap, value is the item to swap with
    "block_swapper": {},        // key should be the block to swap, value is the block to swap with
    "entity_swapper": {},       // key should be the entity to swap, value is the entity to swap with
    "structure_swapper": {},    // see details section
    "state_swapper": [],        // list of dictionaries; same format as Block Swap mod. See details
}
```

#### Detailed `swaps.json` field descriptions
- `removals` - A list of blocks and items that either have been removed in your kubejs scripts or w/e, or ones that you want to remove. This script doesn't actually remove anything, only swaps stuff out. The script will use the removals list to notify you in `mod_data.log` when a removed item was found but doesn't have a swap.
- `[item/block/entity]_swapper` - Key-value pairs, where the key is what you want to swap and the value is what it should be swapped with. It's very important that the value doesn't have typos and actually exists in the game, otherwise the game won't place any block in its place.
- `structure_swapper` - Used for swapping blocks on a per-structure basis. The key can be a string or a regex string that point to where the structure **.nbt file** is, not the actual structure (this is different from the structure path you'll see in-game with `/locate structure`)
- `state_swapper` - For mapping a block with a specific blockstate to a different block with a specific blockstate. This uses the same format as the Block Swap mod.

Highly recommend that you check [how I used it](https://github.com/mosharky/ModedMinecraf/blob/dev/minecraft/kubejs/config/swaps.json). I filled my `swaps.json` with KubeJS scripts; check my startup scripts.

#### Script loop
This script loops through every mod/datapack file (`.jar` or `.zip`) found in (with this order/priority):
- `mod_data/extras/`
- `minecraft/mods/`
- `mod_data/overrides/`

It'll then check for structure files in each mod. The script will check every block, entity, and BlockEntity in every structure and perform a swap if it was in `swaps.json`