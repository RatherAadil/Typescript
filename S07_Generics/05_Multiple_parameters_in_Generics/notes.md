# Multiple Generic Type Parameters

A generic can have **more than one type parameter**. Each type parameter represents a different type.

## Generic Type Alias

```ts
type DynamicType<T, U> = T | U;
```

- `T` and `U` are generic type parameters.
- The resulting type can be either `T` or `U`.

### Example

```ts
let a: DynamicType<string, number> = 5;
```

Here,

- `T = string`
- `U = number`

So the type becomes:

```ts
string | number;
```

## Generic Object Type

```ts
type DynamicType2<T, U> = {
  first: T;
  second: U;
};
```

### Example

```ts
let b: DynamicType2<string, number> = {
  first: 'Hello',
  second: 89,
};
```

- `first` → `string`
- `second` → `number`

## Generic Interface

```ts
interface DynamicType3<T, U> {
  first: T;
  second: U;
}
```

### Example

```ts
let c: DynamicType3<number, string> = {
  first: 8,
  second: 'Hi',
};
```

- `first` → `number`
- `second` → `string`

# Generic Function with Multiple Type Parameters

A function can also have multiple generic type parameters.

```ts
function getTuple<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}
```

- `T` is the type of the first parameter.
- `U` is the type of the second parameter.
- Returns a tuple `[T, U]`.

## Example 1

```ts
const result1 = getTuple('a', 8);
```

TypeScript infers:

```ts
const result1: [string, number];
```

Value:

```ts
['a', 8];
```

## Example 2

```ts
const result2 = getTuple(true, 8);
```

TypeScript infers:

```ts
const result2: [boolean, number];
```

Value:

```ts
[true, 8];
```

## Advantages

- Supports multiple data types in a single type or function.
- Increases code reusability.
- Maintains type safety.
- TypeScript can infer the generic types automatically.
