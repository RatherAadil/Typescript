# Promise Generics in TypeScript

`Promise<T>` is a built-in generic where **`T` represents the type of the value the promise resolves with**.

## Syntax

```ts
Promise<T>;
```

- `T` → Type of the resolved value.

## Example 1: Promise as a constructor

```ts
const myPromise = new Promise<string>((resolve, reject) => {
  resolve('Promise resolved!');
});
```

Here,

- `Promise<string>` means the promise resolves with a `string`.
- Therefore, `resolve()` can only accept a string.

```ts
resolve('Promise resolved!'); // ✅
resolve(10); // ❌ Error
```

---

## Using `await`

```ts id="yh8o5s"
const result = await myPromise;

console.log(result);
```

TypeScript infers:

```ts
const result: string;
```

Since `myPromise` is `Promise<string>`, `await` returns a `string`.

## Example 2: Promise as Generic

- Works same

```ts
const myPromise: Promise<string> = new Promise((resolve, reject) => {
  resolve('Promise resolved!');
});
```

## `Promise.resolve()`

```ts
const myPromise2 = await Promise.resolve('Hello');
```

TypeScript automatically infers:

```ts
Promise<string>;
```

After `await`:

```ts
const myPromise2: string;
```

No need to explicitly write `Promise<string>` because TypeScript infers it.

## Summary

| Code                             | Type                                |
| -------------------------------- | ----------------------------------- |
| `Promise<string>`                | Promise that resolves to a `string` |
| `await Promise<string>`          | `string`                            |
| `Promise.resolve('Hello')`       | `Promise<string>`                   |
| `await Promise.resolve('Hello')` | `string`                            |

**Key Point:**
The generic type `T` in `Promise<T>` always represents the **resolved value type** of the promise.
