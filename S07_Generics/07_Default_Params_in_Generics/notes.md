# Default Generic Types in TypeScript

Default generic types allow you to specify a **default type** for a generic parameter. If no type argument is provided, TypeScript automatically uses the default type.

**Syntax:**

```ts
<T = DefaultType>
```

## 1. Default Generic with Type Aliases

A type alias can have one or more generic parameters with default values.

### Example 1

```ts
type DynamicType<T = string> = T;
```

- If no type is provided, `T` defaults to `string`.

```ts
let a: DynamicType;
```

Equivalent to:

```ts
let a: string;
```

### Example 2

```ts
type DynamicType2<T = string, U = number> = T;
```

Here,

- `T` defaults to `string`
- `U` defaults to `number`

Although `U` is declared, it is not used in the type alias.

### Example 3

```ts
type DynamicType3<T, U = number> = {
  first: T;
  second: U;
};
```

Here,

- `T` has **no default**, so it must be provided.
- `U` defaults to `number`.

```ts
let b: DynamicType3<boolean> = {
  first: true,
  second: 2,
};
```

TypeScript interprets it as:

```ts
type DynamicType3<boolean, number>
```

So,

- `first` → `boolean`
- `second` → `number`

## 2. Default Generic with Interfaces

Interfaces also support default generic types.

```ts
interface DynamicType4<T, U = number> {
  first: T;
  second: U;
}
```

Here,

- `T` must be provided.
- `U` defaults to `number`.

Example:

```ts
let c: DynamicType4<number> = {
  first: 5,
  second: 4,
};
```

Equivalent to:

```ts
DynamicType4<number, number>;
```

## 3. Default Generic with Functions

Functions can also have default generic types.

```ts
function myFunc<T = string>(a: T) {
  return a;
}
```

If the generic type is not explicitly provided, TypeScript first tries to **infer** it from the argument.

Example:

```ts
const result = myFunc(43);
```

TypeScript infers:

```ts
T = number;
```

Therefore,

```ts
result; // number
```

The default type (`string`) is **not used** because the compiler successfully inferred `number`.

## When is the Default Type Used?

The default type is used **only if TypeScript cannot infer the generic type and no type argument is explicitly provided.**

Example:

```ts
function identity<T = string>(value?: T) {
  return value;
}

const x = identity();
```

Here, TypeScript cannot infer `T` because no argument is passed.

Therefore,

```ts
T = string;
```

## Rules for Default Generic Types

- Use `=` to assign a default type.
- A generic parameter with a default value becomes optional.
- Required generic parameters must come before optional (defaulted) generic parameters.

✔ Correct:

```ts
type Example<T, U = number> = {};
```

✖ Incorrect:

```ts
type Example<T = string, U> = {};
```

This produces an error because a required generic (`U`) cannot follow an optional one.

## Summary

- Default generic types provide a fallback type when none is supplied.
- They can be used with **type aliases**, **interfaces**, **classes**, and **functions**.
- TypeScript always tries to **infer the generic type first**.
- The default type is used only when inference is not possible.
- Required generic parameters must always appear before default (optional) generic parameters.
