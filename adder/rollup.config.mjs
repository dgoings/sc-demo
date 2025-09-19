import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";

export default {
  input: "adder.ts",
  external: /wasi:.*/,
  output: {
    file: "dist/adder.js",
    format: "esm",
  },
  plugins: [
    typescript({
      noEmitOnError: true,

      compilerOptions: {
        target: "esnext",
        module: "esnext",
        moduleResolution: "bundler",
        esModuleInterop: true,
      },

      exclude: ["generated/types/*"],
    }),
    nodeResolve(),
  ],
};
