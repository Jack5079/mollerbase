# mollerbase

somehow stupider than trollsmile
meant for stuff like requires i guess:

say this was at path.to.your.model

```ts
import mollerbase from '@rbxts/mollerbase'
export = mollerbase((name: string) => {
  print(name, 'is a good dog')
})
```

and after compiling you'd be able to use it like

```lua
-- all of these will print "molly is a good dog"
local module = require(path.to.your.model)
module('molly')
module.load('molly')
module:Fire('molly')
module.dog('molly')
```
