# Built-in Generics in TypeScript

TypeScript provides several built-in generic types that make code reusable and type-safe.

## 1. `Array<T>`

Represents an array of a specific type.

```ts id="5lxvkr"
const arr: Array<string> = new Array();

arr.push('hello');
// arr.push(1); // ❌ Error
```

Equivalent syntax:

```ts id="0njlwm"
const arr: string[] = [];
```

Here, `Array<string>` means the array can store only strings.

## 2. `Map<K, V>`

Represents key-value pairs.

```ts id="1zjcc0"
const myMap = new Map<string, number>();

myMap.set('Age', 26);
// myMap.set('isStudent', false); // ❌ Error
```

- `K` → Key type (`string`)
- `V` → Value type (`number`)

Only string keys and number values are allowed.

## 3. `Set<T>`

Stores unique values of a specific type.

```ts id="gnkcc5"
const mySet = new Set<number>();

mySet.add(2);
mySet.add(3);
mySet.add(2);
mySet.add(2);

console.log(mySet); // Set {2, 3}
```

- `Set<number>` allows only numbers.
- Duplicate values are automatically removed.

## 4. `Readonly<T>`

Makes all properties of an object read-only.

```ts id="84ksvw"
interface User {
  name: string;
  age: number;
}

const user: Readonly<User> = {
  name: 'Aadil',
  age: 25,
};

// user.name = 'Zubair'; // ❌ Error
```

After applying `Readonly`, properties cannot be modified.

## 5. `ReadonlyArray<T>`

Creates a read-only array.

```ts id="rnn2l6"
const numbers: ReadonlyArray<number> = [1, 2, 3];

// numbers.push(2); // ❌ Error
```

The array can be read but cannot be modified.

## Summary

| Generic            | Purpose                                 |
| ------------------ | --------------------------------------- |
| `Array<T>`         | Creates a typed array                   |
| `Map<K, V>`        | Stores typed key-value pairs            |
| `Set<T>`           | Stores unique values of a specific type |
| `Readonly<T>`      | Makes all object properties read-only   |
| `ReadonlyArray<T>` | Creates a read-only array               |
