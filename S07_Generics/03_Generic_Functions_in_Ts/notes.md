# Generic Functions

A **generic function** works with different data types while preserving type safety. The type is decided when the function is called.

## Syntax

```ts
function functionName<T>(parameter: T): T {
  return parameter;
}
```

- `T` is a generic type parameter.
- The parameter and return type are both `T`.

## Example

```ts
function echo<T>(a: T): T {
  return a;
}
```

This function returns the same value with the same type.

### Example 1: Literal Type

```ts
let value1 = echo<'a'>('a');
```

Here, `T` is `'a'`.

```ts
value1 = 'a'; // ✅
value1 = 'b'; // ❌ Error
```

Since the type is the literal `'a'`, no other value is allowed.

### Example 2: Type Inference

```ts
const value2 = echo(6);
```

TypeScript automatically infers:

```ts
const value2: number;
```

No need to write `<number>` explicitly.

### Example 3: Explicit Type

```ts
const value3 = echo<boolean>(true);
```

Here, `T` is explicitly set to `boolean`.

```ts
const value3: boolean;
```
