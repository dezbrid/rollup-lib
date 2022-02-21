# Make a Librery REact with Rollup

# create

1. create new folder
2. use command yarn init in terminal inside the new folder and answer the question

```bash
yarn init
question name (rollup-lib):@your_username_github/rollup-lib
question version (1.0.0):
question description: example the how create  rollup lib
question entry point (index.js):
question repository url:
question author: Dez
question license (MIT):
question private:
success Saved package.json
```

3. install dependencies

```bash
yarn add -D react react-dom typescript @types/react @types/react-dom
```

4. initialize typescript

```bash
yarn tsc --init
```

5. install rollup dependecies
   basic dep:
   rollup @rollup/plugin-node-resolve @rollup/plugin-typescript @rollup/plugin-commonjs rollup-plugin-dts tslib
   css:
   rollup-plugin-postcss postcss
   optimization:
   rollup-plugin-peer-deps-external rollup-plugin-terser

```bash
yarn add -D rollup @rollup/plugin-node-resolve @rollup/plugin-typescript @rollup/plugin-commonjs rollup-plugin-dts tslib rollup-plugin-postcss postcss rollup-plugin-peer-deps-external rollup-plugin-terser
```

6. create a rollup.config.js

```tsx
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss"; //css
import { terser } from "rollup-plugin-terser"; //minify our bundle and reduce the overall file size.
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(), //css
      terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/], //css
  },
];
```
