# Union (`|`) and Intersection (`&`) with Primitive Data Types

Union (`|`) and Intersection ('6') for primitve data types works same as it works in Maths.

**Properties**

```
A= {1,2,3}
B= {2}
C ={}


A U B = {1,2,3} --> A
A ∩ B = B

A U C = A
A ∩ C = {}
```

### `T1` - Union with a Literal Type

```ts
type T1 = string | 'Hi';
```

Since `'Hi'` is already a valid `string`, string U Hi is still string.

**Result:**

```ts
type T1 = string;
```


### `T2` - Intersection with a Literal Type

```ts
type T2 = string & 'HI';
```

`'HI'` is a string literal, Common in `string` and `'HI'` is `HI` only.

**Result:**

```ts
type T2 = 'HI';
```


### `T3` - Intersection with Boolean Literal

```ts
type T3 = boolean & false;
```

The only common value between `boolean` and `false` is `false`.

**Result:**

```ts
type T3 = false;
```


### `T4` - Union with Boolean Literal

```ts
type T4 = boolean | false;
```

`false` is already part of `boolean`.

**Result:**

```ts
type T4 = boolean;
```


### `T5` and `T6` - Using `Exclude`

```ts
type T5 = Exclude<boolean, true>;
type T6 = Exclude<boolean, false>;
```

`Exclude<T, U>` removes the values of `U` from `T`.

**Results:**

```ts
type T5 = false;
type T6 = true;
```


### `T7` - Union with a Template Literal Type

```ts
type T7 = string | `Hi, ${string}`;
```

Every template literal like `Hi, John` is already a `string`.

**Result:**

```ts
type T7 = string;
```


### `T8` - Intersection with a Template Literal Type

```ts
type T8 = string & `Hi, ${string}`;
```

Common between string and template literal is `Template Literal` Only.

**Result:**

```ts
type T8 = `Hi, ${string}`;
```


### `T9` - Union with a Number Literal

```ts
type T9 = number | 90;
```

`90` is already a `number`.

**Result:**

```ts
type T9 = number;
```


### `T10` - Intersection with a Number Literal

```ts
type T10 = number & 90;
```

The only common value is `90`.

**Result:**

```ts
type T10 = 90;
```


### `T11` - Intersection with a Union

```ts
type T11 = (string | number) & string;
```

Only `string` exists in both types.

**Result:**

```ts
type T11 = string;
```


### `T12` - Intersection of Two Unions

```ts
type T12 = (string | number) & (string | boolean);
```

The only common type is `string`.

**Result:**

```ts
type T12 = string;
```


### `T13` - Union of Two Unions

```ts
type T13 = (string | number) | (string | boolean);
```

Union combines all unique types.

**Result:**

```ts
type T13 = string | number | boolean;
```


### `T14` - Intersection of Larger Unions

```ts
type T14 = (string | number | boolean) & (string | boolean);
```

The common types are `string` and `boolean`.

**Result:**

```ts
type T14 = string | boolean;
```


### `T15` - Intersection with `unknown`

```ts
type T15 = unknown & string;
```

`unknown` accepts every type, so the intersection becomes the other type.

**Result:**

```ts
type T15 = string;
```


### `T16` - Union with `unknown`

```ts
type T16 = unknown | string;
```

`unknown` already represents any possible type.

**Result:**

```ts
type T16 = unknown;
```


### `T17` - Intersection of Different Primitive Types

```ts
type T17 = number & string;
```

A value cannot be both a `number` and a `string`.

**Result:**

```ts
type T17 = never;
```


### `T18` - Intersection of Different Literal Types

```ts
type T18 = 5 & 9;
```

A value cannot be both `5` and `9`.

**Result:**

```ts
type T18 = never;
```


## Summary

- **Union (`|`)** combines all possible types.
- **Intersection (`&`)** keeps only the common part of both types.
- If one type already includes the other (e.g., `string | 'Hi'`), the broader type is kept.
- If two types have no common values (e.g., `number & string`), the result is `never`.
- `unknown & T` becomes `T`.
- `unknown | T` becomes `unknown`.
- `Exclude<T, U>` removes the values of `U` from `T`.
