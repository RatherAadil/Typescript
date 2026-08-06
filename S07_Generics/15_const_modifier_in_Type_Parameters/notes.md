# `const` Type Parameter in TypeScript

The **`const` modifier** on a generic type parameter tells TypeScript to **preserve the most specific (literal) type** instead of widening it.

It is mainly useful for **objects, arrays, and tuples**.

## Syntax

```ts
function func<const T>(arg: T): T {
  return arg;
}
```

Here, `T` preserves literal types.

## Example

```ts
function echo<const T>(arg: T): T {
  return arg;
}
```

## Primitive Values

```ts
const result1 = echo('Hii');
const result2 = echo(2);
const result3 = echo(false);
```

Types:

```ts
result1; // "Hii"
result2; // 2
result3; // false
```

The literal types are preserved.

## Arrays

```ts
const result4 = echo([1, 2, 3]);
const result5 = echo(['a', 'b', 'c']);
```

Types:

```ts
result4; // readonly [1, 2, 3]
result5; // readonly ["a", "b", "c"]
```

Without `const`, these would become:

```ts
number[]
string[]
```

## Objects

```ts
const result6 = echo({
  name: 'Aadil',
  age: 10,
});
```

Type:

```ts
{
  readonly name: "Aadil";
  readonly age: 10;
}
```

Without `const`, it would become:

```ts
{
  name: string;
  age: number;
}
```

## Accessing Properties

```ts
const userName = result6.name;
```

Type:

```ts
const userName: 'Aadil';
```

Since the literal type is preserved, `userName` has the type `"Aadil"` instead of `string`.

## `as const` vs `const` Generic

### `as const`

```ts
const obj = {
  name: 'Aadil',
  age: 10,
} as const;
```

- Used when creating an object or array.
- Makes properties `readonly` and preserves literal types.

### `const` Generic

```ts
function echo<const T>(arg: T): T {
  return arg;
}
```

- Used inside generic functions.
- Automatically preserves literal types of arguments passed to the function.
- Eliminates the need for callers to write `as const`.

## Benefits

- Preserves literal types.
- Preserves tuple types instead of widening to arrays.
- Makes object properties `readonly`.
- Useful for configuration objects, routes, API schemas, and strongly typed utility functions.
