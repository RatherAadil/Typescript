## ❗Non-Null Assertion Operator in TypeScript

The **non-null assertion operator** is written using `!`.

It tells TypeScript:

> “Trust me, this value is not `null` or `undefined` here.”

```ts
value!;
```

It only affects **TypeScript checking**.
It does **not** add any runtime safety.

---

## ✅ Basic Example

```ts
let username: string | undefined;

function setUsername() {
  username = 'Anurag';
}

setUsername();

console.log(username.toUpperCase());
```

TypeScript gives an error:

```txt
'username' is possibly 'undefined'
```

Why?

Because TypeScript does not deeply analyze that `setUsername()` definitely assigns a value to `username`.

So we can write:

```ts
let username: string | undefined;

function setUsername() {
  username = 'Anurag';
}

setUsername();

console.log(username!.toUpperCase());
```

Here:

```ts
username!;
```

means:

```txt
Trust me, username is not undefined here.
```

---

## ⚠️ Important

This is safe only when **you are 100% sure** the value exists.

```ts
let username: string | undefined;

console.log(username!.toUpperCase());
```

This will compile, but at runtime it can crash:

```txt
Cannot read properties of undefined
```

So `!` removes TypeScript’s warning, not the actual problem.

```
Difference between Optional Chaining(?.) and non-null assertion Operator(!)?

--> Optional Chaining (?.)

Optional chaining (?.) safely accesses properties or methods on a value. If the value is null or undefined, it stops the evaluation and returns undefined instead of throwing a runtime error.

Non-null Assertion (!)

The non-null assertion operator (!) tells TypeScript to treat a value as non-null and non-undefined. It only affects compile-time type checking and performs no runtime validation.

IN Short:
?. = "Check first, then access."
! = "Don't check, trust me."

When to use each?
Use ?. when: You are not sure if the value exists.

Use ! when: You are 100% sure the value exists
```
