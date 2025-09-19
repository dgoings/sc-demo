## Setup

Install cargo-component:

`cargo install --locked cargo-component`

Install wasm-tools:

`cargo install --locked wasm-tools`

Install wasmtime:

`curl https://wasmtime.dev/install.sh -sSf | bash`


## Generate bindings

`cargo component bindings`

## Compiling the wasm component

`cargo component build --release`
