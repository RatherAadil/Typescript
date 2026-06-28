# Type Aliases in TypeScript

```
-> A Type Alias is a way to give an existing type a custom name using the `type` keyword.

-> It doesn't create a new type—it simply gives another name (alias) to an existing type.
```

### Syntax

```ts
type User = string;

const username: User = 'Aadil';
```

## Why use Type Aliases?

```
✅ Avoid repeating the same type (DRY principle)
✅ Improve readability
✅ Make code easier to maintain
✅ Give meaningful names to types
```

## Examples

```ts
type Age = number;
type Status = 'loading' | 'success' | 'error';
type User = string | number | boolean;

const user: User[] = ['Aadil', true, 8];
```

## Behind the Scenes

Type aliases exist only in **TypeScript**. They are removed when the code is compiled to JavaScript.

**TypeScript**

```ts
type User = string;
const username: User = 'Aadil';
```

**JavaScript**

```js
const username = 'Kaushik';
```

## Naming Convention

Use **PascalCase** for type aliases.

✅ Good

```ts
type User = string;
```

❌ Avoid

```ts
type user = string;
```

## Key Points

- A type alias gives a custom name to an existing type.
- It can represent primitives, objects, arrays, functions, unions, tuples, and more.
- It improves readability and code reuse.
- It exists only during compilation and is removed from JavaScript.

> **Remember:** A **Type Alias** is simply a reusable name for an existing type.
