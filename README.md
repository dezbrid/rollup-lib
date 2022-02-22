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
question author: dezbrid
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
import peerDepsExternal from "rollup-plugin-peer-deps-external"; //resollve peer deps external

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
      peerDepsExternal(), //optimization
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(), //css
      terser(), //optimization
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

## Build

1. in package.json

```json
 "scripts": {
    "rollup": "rollup -c"
  },
```

2. run

```bash
yarn run rollup
```

# publish

1. Your are need to generate a [personal access token](https://github.com/settings/tokens/new) on Github in your account with ` write:packages and read:packages` permissions. Make sure to copy your new personal access token now. You won’t be able to see it again! For more information, you can check [Github documentation](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).

2. in your .npmrc file in your root pc in mac or linux (`/Users/<user-name>/.npmrc`) or windows (`C:\Users\{YOUR_WINDOWS_USERNAME}`). You can use `npm config ls -l` for show all the implicit settings for npm

```txt
registry=https://registry.npmjs.org/
@YOUR_GITHUB_USERNAME:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_AUTH_TOKEN
```

3.  in packge.json

```json
"publishConfig": {
    "registry": "https://npm.pkg.github.com/YOUR_GITHUB_USERNAME"
  },
```

4. run

```bash
npm publish
```

# Adding Tools

1. install test an babel deps

```bash
yarn add -D @testing-library/react jest @types/jest @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-jest identity-obj-proxy
```

2. create `jest.config.js` in root of project

```tsx
module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
};
```

3. create `babel.config.js` in root of project

```tsx
module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
};
```

4. in package.json add

```json
{
  "scripts": {
    "test": "jest"
  }
}
```
