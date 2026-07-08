## Union and Intersection with Array Types

### 1. Array Types

```ts
type T1 = number[];
type T2 = string[];
```

- `number[]` → Array containing only numbers.
- `string[]` → Array containing only strings.

---

### 2. Union of Array Types

```ts
type T3 = T1 | T2;
```

A union of array types means the array can be **either**:

- `number[]`, or
- `string[]`

It **cannot** contain both numbers and strings together.

**Example**

```ts
const arr1: T3 = [2, 45, 5]; // ✅ number[]
const arr2: T3 = ['A', 'Hello']; // ✅ string[]
const arr3: T3 = [1, 'Hello']; // ❌ Error
```

**Difference**

```ts
number[] | string[]    // Homogeneous array
(number | string)[]    // Heterogeneous array
```

- `number[] | string[]` → Entire array must contain only one type.
- `(number | string)[]` → Array can mix numbers and strings.

---

### 3. Intersection of Array Types

```ts
type T4 = T1 & T2;
```

This becomes:

```ts
number[] & string[]
```

For an element to be both a `number` and a `string`, its type becomes:

```ts
number & string = never
```

So the array is effectively:

```ts
never[]
```

**Example**

```ts
let a!: never;
let b!: never;

const arr: T4 = [a, b];
```

Only `never` values can exist in this array.

---

### 4. Intersection with an Object

```ts
type T5 = number[] & { test: string };
```

This creates a type that is:

- A `number[]`
- **and** has a property `test` of type `string`.

**Example**

```ts
const arr = [1] as T5;

arr.test = 'Hello';
```

Here:

- `arr` behaves like a normal number array.
- It also has an additional property:

```ts
arr.test; // string
```
