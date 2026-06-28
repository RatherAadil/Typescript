# TypeScript: Explicit vs Implicit Typing

### 1. Explicit Typing

When we manually specify a type.

```ts
let username: string = 'Aadil';
let age: number = 22;
```

**Interview Definition**

Explicit typing means manually declaring a type using TypeScript type annotations.

### 2. Implicit Typing (Type Inference)

When TypeScript automatically determines the type from the assigned value.

```ts
let username = 'Aadil';
let age = 22;
```

TypeScript infers:

```
let username: string;
let age: number;
```

**Interview Definition**

Implicit typing means TypeScript automatically infers the type based on the assigned value.

# Arrays in TypeScript

Explicitly Typed String Array

```ts
let arr: string[] = ['Hello', 'World', '!'];

arr.push('This is a string array');
// arr.push(123); ❌ Error
```

**Explanation**

- string[] means an array can contain only strings.
- Adding a number will cause a TypeScript error.

Array of Any Type (Implicit any[])

```ts
let arr2 = [];

arr2[0] = 5;
arr2[1] = 'Hello';
arr2[2] = true;
arr2[3] = { name: 'John', age: 30 };
```

Explanation

TypeScript infers:

```ts
let arr2: any[];
```

- Since it is any[], any type of value can be stored.

⚠️ Not recommended because type safety is lost.

Number Array (Implicit number[])

```ts
let arr3 = [1, 2, 3];

arr3.push(4);
arr3.push(Infinity);
arr3.push(NaN);
arr3.push(-Infinity);

// arr3.push("Hello"); ❌ Error
```

### Union Type Array

```ts
let arr5: (string | number)[] = ['Hello', 123, 'World', 456];

arr5.push('New String');
arr5.push(789);

// arr5.push(true); ❌ Error
```

**Explanation**

```
(string | number)[]
```

Means:

- Strings allowed ✅
- Numbers allowed ✅
- Boolean not allowed ❌

```ts
let b: (string | number | boolean)[] = [1, 2, '3', undefined];
```

- Undefined is not allowed.
