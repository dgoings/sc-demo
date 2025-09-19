## Generate bindings for the WIT world:

`componentize-py --wit-path wit --world multiplier bindings .`

## Compiling the wasm component:

```bash
componentize-py \
    --wit-path wit/world.wit \
    --world multiplier \
    componentize \
    app \
    -o multiplier.wasm
```
