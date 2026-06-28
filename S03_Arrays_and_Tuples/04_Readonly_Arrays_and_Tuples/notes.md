# Readonly Arrays and Tuples

Readonly in TS only enforces immutability at compile time. It prevents methods like push and pop from being used on the array. however, at runtime, JS arrays are still mutable. It is a type-level safety feature, not a runtime guarantee

### Readonly Array

```ts
let user: readonly string[] = ['Aadil'];

user.push('Rather');
user.pop();

console.log(user);
```

### Readonly Tuple

```ts
//Named Tuple
const arr: readonly [name: string, roll: number, isStudent: boolean] = [
  'Aadil',
  8,
  true,
];

arr.pop();
arr.pop();
arr.pop();
console.log(arr);
```
