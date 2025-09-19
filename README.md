# Introduction

This is a simple demonstration based heavily on the WASI component model composition tutorials found here: https://component-model.bytecodealliance.org/language-support.html

## Setup

Install cargo binstall:

`curl -L --proto '=https' --tlsv1.2 -sSf https://raw.githubusercontent.com/cargo-bins/cargo-binstall/main/install-from-binstall-release.sh | bash`

Install wac:

`cargo binstall wac-cli`

Install jco:

`npm install -g @bytecodealliance/jco`

Install componentize-py:

`pip install componentize-py`

Install cargo-component:

`cargo install --locked cargo-component`

Install wasm-tools:

`cargo install --locked wasm-tools`

Install wasmtime:

`curl https://wasmtime.dev/install.sh -sSf | bash`

## Build

`npm run build`
