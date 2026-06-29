# Type Assertions

```
Type assertion is used when TypeScript cannot correctly infer a type, and we explicitly tell the compiler to treat a value as a specific type. It overrides TypeScript's type checking only at compile time without changing the actual runtime value.
```

## 📌 Use Case 1 — Type Assertion (as)

```
While accessing values, if you are sure about the type of value which you are accessing but the TS compiler is confused between two or more types — you explicitly tell the compiler:

💬 "Trust me, if I am saying this is a type of value, consider it without any single doubt."

Here TS don't need to guess — we will help it out to identify the type during compile time.
```

```ts
const num = ['Aadil', 7];
const userName = num[0] as string; // Type Assertion Syntax
const age = num[0] as number; // Type Assertion Syntax

console.log(userName.toUpperCase());
console.log(age.toFixed());
```

### Try to think about what problem is here?

```ts
const num = ['Aadil', 7];
const userName = num[0] as string;
console.log(userName.toUpperCase());
```

```
We can clearly see that at position 0 it is string so we have to explicitly tell the TS Compiler:

💬 "Believe me it is string"
```

### But what if I say at position 1 (num[1]) it is also a string?

```
➡️ TS compiler will NEVER complain about it at compile time because we are explicitly telling it and enforcing it to stop guessing from itself.

🔴 Keep in mind — whenever you are using Type Assertions, use it carefully, don't use it blindly.

As a developer whatever you are using, everything should be clear for you rather than a Blackbox
( means you are just using the things but don't know how it works )
```

## 📌 Use Case 2 — as const

`as const` is a special type assertion in TypeScript that:

```
🔒 Prevents type widening
🔍 Infers the most specific literal types
📖 Makes object properties and array/tuple elements readonly at compile time
⚙️ Provides compile-time immutability but does NOT freeze the value at runtime
```

```ts
const user1 = ['Sahil', 5] as const;
const user2 = { name: 'Aadil', age: 7 } as const;
const lang = 'typescript';
```

❌ Mutability is not allowed during compile time

```ts
user1[0] = 'Rahul'; // ❌ Error
user2.name = 'Akash'; // ❌ Error
```

```
🔥 as vs as const — Final Difference

🔹 as → general type assertion used to override TypeScript's inferred type and treat a value as a specific type, without changing runtime behavior.

🔹 as const → special type assertion that prevents type widening, preserves literal types, and makes objects and arrays readonly at compile time.

➡️ Therefore, as is used for type casting, while as const is used for making values deeply immutable at the type level.
```
