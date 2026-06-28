# 📚 Array Methods in TypeScript

Array methods are powerful because TypeScript can often **infer the return type automatically** based on what you return from the callback.

---

# 🗺️ `map()`

`map()` creates a **new array**.

The type of the new array depends on **what you return** from the callback.

```ts
const array = [1, 2, 3, 4, 5, 6];

const result = array.map((el) => el % 2 === 0);
```

### Return Type

```ts
boolean[]
```

Because:

```ts
el % 2 === 0;
```

returns a boolean (`true` or `false`).

Result:

```ts
[false, true, false, true, false, true];
```

---

### Another Example

```ts
const numbers = [1, 2, 3];

const result = numbers.map((el) => el.toString());
```

Return Type:

```ts
string[]
```

💡 Rule:

> `map()` returns an array whose type is determined by the callback's return value.

---

# 🔍 `filter()`

`filter()` creates a new array containing only the elements that pass a condition.

```ts
const array = [1, 2, 3, 4, 5, 6];

const result = array.filter((el) => el % 2 === 0);
```

### Return Type

```ts
number[]
```

Result:

```ts
[2, 4, 6];
```

The callback returns a boolean:

```ts
el % 2 === 0;
```

But the final array still contains the original elements.

💡 Rule:

> `filter()` returns the same element type as the original array, just with some values removed.

---

### Example

```ts
const users = ['Aadil', 'Adnan', 'Asrar'];

const result = users.filter((user) => user.length > 5);
```

Return Type:

```ts
string[]
```

Another Example:

```ts
let arr2 = [1, 2, 3, 'hi', 4, 'abc'];
const filtered2 = arr2.filter((el) => typeof el === 'number');

let arr3 = [1, 2, 3, 'hi', 4, 'abc', false];
const filtered3 = arr3.filter((el) => typeof el !== 'number');
```

Return Type:

```ts
filtered2 -> number[]
filtered3 -> (string | boolean)[]
```

---

# ➕ `reduce()`

`reduce()` combines all elements into a single value.

The return type depends on:

1. The initial value.
2. What you return from the accumulator (`acc`).

---

### Sum Example

```ts
const array = [1, 2, 3, 4];

const total = array.reduce((acc, curr) => acc + curr, 0);
```

Return Type:

```ts
number;
```

Because:

```ts
0;
```

is a number and we keep returning numbers.
