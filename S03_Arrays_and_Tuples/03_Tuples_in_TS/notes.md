# Tuples in TS

Tuples are a special type of array in TypeScript with a fixed number of elements, where each element has a specific type at a specific position. Unlike regular arrays, tuples enforce both the type and the order of their elements.
Why do tuples exist?
suppose we have user information like this:

```ts
let userInfo = ['bob', 20];
```

TS only knows : `(string| number)[]`

TS doesn't know that index 0 is always a string, index 1 is always a number. so here we lose the type safety

with touples we can solve this problem easily,

```ts
let user: [string, number] = ['Aadil', 45];
```

Now, Ts knows that 0 index is string and 1 index is number. And if we try to change the type of items it will result in error.

```ts
let user: [string, number] = [45, 'Aadil'];
```

**Error:**

```
Type number is not assignable to type string.
```

**Named Touples:** It provide use better readability, self-documenting (anyone reading immediately understand meaning) and better IntelliSense

```ts
const arr: [name: string, roll: number, isStudent: boolean] = [
  'Aadil',
  8,
  true,
];
```

#### Issues with Ts Tuples

If we try to use array mutating methods on tuples it allows it easily.

```ts
const arr: [name: string, roll: number, isStudent: boolean] = [
  'Aadil',
  8,
  true,
];

arr.pop();
arr.pop();
arr.pop();
arr[0].toUpperCase();
```

This will not show any error but at Runtime it js will throw an error:

```
Cannot Read Properties of Undefined
```

```
-> Tuples can be dangerous because At runtime, it's just a JavaScript array.This means methods like push() and pop() can still modify their length and contents, potentially breaking the intended tuple structure. To prevent this, use readonly tuples or as const when the tuple should not be modified.

-> TypeScript tuples are implemented on top of JavaScript arrays. The TypeScript team has discussed removing mutating array methods from tuples, but doing so would introduce breaking changes and reduce JavaScript compatibility. Therefore tuples still inherit array methods like push() and pop(). If strict immutability is required, readonly tuples should be used instead.


```
