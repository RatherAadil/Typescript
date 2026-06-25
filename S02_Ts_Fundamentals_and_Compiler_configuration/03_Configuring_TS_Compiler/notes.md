# Configuring TS Compiler

### Difference between tsconfig.json and jsconfig.json:

    Both files are used to configure a project for VS Code and the TypeScript language service. The main difference is that tsconfig.json is used for TypeScript projects and controls how the TypeScript compiler (tsc) behaves, including compilation of .ts files into JavaScript. On the other hand, jsconfig.json is used for JavaScript projects and mainly helps VS Code provide better IntelliSense, auto completion, and navigation features. It does not compile JavaScript files.

```json
{
  "compilerOptions": {
    "target": "es6",
    "removeComments": false,
    "noEmitOnError": true,
    "pretty": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

### target Property:

    The target property specifies the version of JavaScript that TypeScript should generate after compilation. For example, if the target is set to ES5, modern TypeScript features will be converted into older JavaScript syntax that can run in older browsers. If the target is set to a newer version such as ES6, TypeScript will preserve modern JavaScript features in the output. In simple terms, target tells TypeScript which JavaScript version to produce.

### removeComments Property:

    The removeComments property determines whether comments from TypeScript source files should be included in the generated JavaScript files. When it is set to true, all comments are removed from the output code. When it is set to false, comments are preserved. This helps reduce the size of the generated files and keeps the production code cleaner.

### noEmitOnError Property:

    The noEmitOnError property controls whether TypeScript should generate JavaScript files when there are compilation errors. If it is set to true, TypeScript will stop the compilation process and will not create any JavaScript output until all errors are fixed. If it is set to false, JavaScript files will still be generated even if TypeScript reports errors. This option helps prevent buggy code from being produced.

### pretty Property:

    The pretty property improves the appearance of TypeScript compiler messages in the terminal. When enabled, error messages are displayed with better formatting, colors, and indentation, making them easier to read and understand. It does not affect the generated code and is only used to improve the developer experience.

### outDir Property:

    The outDir property specifies the folder where TypeScript should place the generated JavaScript files. Instead of creating JavaScript files alongside the TypeScript files, all compiled output is stored in the specified directory. For example, setting "outDir": "./dist" will place all generated JavaScript files inside the dist folder.

### rootDir Property:

    The rootDir property specifies the root folder that contains the TypeScript source files. It tells TypeScript where the project's source code is located. When used together with outDir, TypeScript maintains the same folder structure while copying compiled files to the output directory. In simple terms, rootDir is where the source files live, and outDir is where the compiled files are stored.
