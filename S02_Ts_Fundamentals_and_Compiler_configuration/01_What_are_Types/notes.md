# 📘 What Are Types?

Types in TypeScript are similar to the data types we already have in JavaScript.

### Primitive Types

- string
- number
- boolean
- null
- undefined
- symbol
- bigint

---

- When we execute Ts with nodejs it strips off the types and runs the plain js

```bash
node app.ts
```

## ✍️ Type Annotation Syntax

We can explicitly define the type of a variable.

```ts
let num: number = 26;
```

This tells TypeScript that `num` must always contain a number value.

---

## 🎯 Why Define Types?

When working with:

- API responses
- Database data
- User input
- Complex objects

we can define types to catch errors during development instead of at runtime.
