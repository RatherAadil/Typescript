# Compiling Ts to Js

- Install the ts compiler (globally or as dev dependency):

```bash
npm i -g typescript
```

- Now we can compile ts files to js using

```ts
tsc app.ts
```

In TypeScript, a file is treated as a script and placed in the global scope if it does not contain any import or export statements. This can lead to variable conflicts across files. However, when a file uses ES module syntax (import/export), it becomes a module with its own isolated scope, preventing global conflicts.

#### EXAMPLE:

```ts
import data from './data.json' with { type: 'json' };
let num: number = 5;
num = 10;

let name = 'xyz';

console.log(num);
```

### About Ts Compiler

tsc is called a compiler because it does much more than just convert TypeScript into JavaScript. Before generating code, it performs lexical analysis, parsing, type checking, semantic validation, module resolution, and error reporting. A transpiler only translates code from one high-level language to another, whereas tsc analyzes and validates the program before producing output. Since transpilation is only one phase of its overall compilation process, tsc is more accurately described as a source to source compiler rather than just a transpiler.

### Contineous Compilation

In order to compile contineously we must have `tsconfig.json` file in our project (it can be empty as well) as it creates a module scope.

```bash
tsc --watch
```
