# Including and Excluding Files in TS

### include: specifies which files or folders should be part of the compilation.

### exclude: specifies which files should be ignored.

Common glob patterns matching:

```
* --> Matches any characters in a single file or folder name (current level only)
```

Example:

```ts
include: ['src/*.test.ts'];
```

```
** --> Matches any number of directories recursively
```

```
/*.ts --> Matches all .ts files in the root directory only
```

```
/**/*.ts --> Matches all .ts files in all folders and subfolders
```

Example: Excludes all the `.test.ts` files in nested directories at any level.

```json
 "exclude": ["src/**/*.test.ts"]
```
