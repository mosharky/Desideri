# How 2 Remix
Remix is a WIP modpack!

## Getting Started
1. Use [Visual Studio Code](https://code.visualstudio.com/)! Here are some very helpful extensions:
    - [JSON to JS converter](https://marketplace.visualstudio.com/items?itemName=renatorodrigues.json-to-js) - Very handy for converting JSON data into a JS object
    - [ProbeJS](https://marketplace.visualstudio.com/items?itemName=Prunoideae.probejs) - Integrates VSCode with KubeJS/ProbeJS
    - [Even Better TOML](https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml)
    - [NBT Viewer](https://marketplace.visualstudio.com/items?itemName=Misodee.vscode-nbt)
2. Get access to the `mods` subrepo ([RemixMods](https://github.com/mosharky/RemixMods)) from momo
3. Clone this repo using:
```
git clone --recursive https://github.com/mosharky/Remix
```

## Ground Rules
- **ALWAYS pull before you commit or push!**
- Non-optional assets (things that we don't want users to disable) should be in `kubejs/assets/`
- Optional assets should be in `resourcepacks/`
- Datapack stuff should be in `kubejs/data`
    - Ideally, I want as many things as possible to be done in KubeJS scripts for organization and cleanliness' sake, so try to avoid doing stuff in JSON!
- Configs that might be personalized by the player, like Sodium settings, shouldn't be in the repo and should be ignored by Git in `.gitignore`. There's definitely exceptions to this.


***


## Links
- [Remix](https://github.com/mosharky/Remix)
- [RemixMods](https://github.com/mosharky/RemixMods)
- [RemixCore](https://github.com/mosharky/RemixCore)
- [Design/Todo Doc](https://docs.google.com/document/d/1hka_Jc9ERbga4rCrYldCqWPgjGGWzk_xVklEtIDDh74)