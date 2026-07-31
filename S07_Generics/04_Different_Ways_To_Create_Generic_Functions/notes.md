# Different Ways to Create Generic Functions

Generic functions can be written in multiple ways. All of them behave the same; only the syntax differs.

## 1. Normal Function

```ts
function echo<T>(a: T): T {
  return a;
}
```

- Standard function declaration.
- `T` is the generic type parameter.

## 2. Function Expression

```ts
const echo2 = function <T>(a: T): T {
  return a;
};
```

- Generic function assigned to a variable.
- Works the same as a normal function.

## 3. Arrow Function

```ts
const echo3 = <T>(a: T): T => {
  return a;
};
```

- Generic arrow function.
- Commonly used in modern TypeScript.

## 4. Using a Generic Function Type Alias

```ts
type EchoFuncType = <T>(a: T) => T;

const echo4: EchoFuncType = function (a) {
  return a;
};
```

- The generic function signature is defined once using a type alias.
- Any function assigned to `EchoFuncType` must follow that signature.

## 5. Using a Generic Interface

```ts
interface EchoFuncType2 {
  <T>(a: T): T;
}

const echo5: EchoFuncType2 = function (a) {
  return a;
};
```

- The generic function signature is defined inside an interface.
- Any function implementing the interface must match the generic signature.

## Summary

| Method              | Syntax                           |
| ------------------- | -------------------------------- |
| Normal Function     | `function echo<T>() {}`          |
| Function Expression | `const echo = function <T>() {}` |
| Arrow Function      | `const echo = <T>() => {}`       |
| Type Alias          | `type Func = <T>() => T`         |
| Interface           | `interface Func { <T>(): T }`    |
