# Generic Methods in TS

An interface can have its own generic type (`T`), and its methods can define additional generic types (`U`).

```ts
interface Store<T> {
  list: T[];
  transformString<U>(index: number, cb: (item: T) => U): U;
}
```

- `T` → Type of items stored in the `list`.
- `U` → Return type of the callback function.

## String Store

```ts
const strStore: Store<string> = {
  list: ['Aadil', 'Zubair', 'Danish'],
  transformString(index, cb) {
    return cb(this.list[index]);
  },
};
```

```ts
const result = strStore.transformString(1, (item) => item.toUpperCase());
```

TypeScript infers:

- `T = string`
- `U = string`

So, `result` is of type `string`.

## Number Store

```ts
const numStore: Store<number> = {
  list: [1, 2, 3, 4, 5],
  transformString(index, cb) {
    return cb(this.list[index]);
  },
};
```

```ts
const result2 = numStore.transformString(1, (item) => item.toFixed());
```

TypeScript infers:

- `T = number`
- `U = string`

So, `result2` is of type `string`.

## Why Use `U`?

If the method were:

```ts
cb: (item: T) => T;
```

the callback would have to return the same type as the stored item. By using a separate generic `U`, the callback can return **any type**, making the method more flexible.

### Summary

- `T` → Type of items stored in the interface.
- `U` → Return type of the callback.
- `T` is fixed for a `Store`.
- `U` is inferred each time the method is called.
