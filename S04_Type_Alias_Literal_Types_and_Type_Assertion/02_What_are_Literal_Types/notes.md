# Type Literals in TypeScript

```
-> Type Literals allow us to create our own types.
-> It could be a single type or union of multiple types.
-> Usually we use type Literals when we have fixed values and we want to keep the value among the available values.
```

**Example:**

```ts
let a: 'Mango' = 'Mango';
```

```
-> Now the type of 'a' would be 'Mango'. And we cannot assign any other value to 'a' except Mango.
```

```ts
let a: 'Mango' = 'Mango';
a='Grapes' ❌ //Not allowed
```

```
-> We can create multiple types or a union of multiple custom types.
-> We can write them while assigning variable value of crate a reusable type using type alias.
```

```ts
let fruit: 'Apple' | 'Mango' | 'Grapes' | 'Pear' = 'Apple';

fruit = 'Grapes';
console.log(fruit);
```

```
-> The value of fruit could be among Apple, Mango, Grapes, or Pear.
-> If we try to assing any other value say 'Peach' it will result in an error.
```

```ts
type AvailableFruits = 'Apple' | 'Mango' | 'Grapes' | 'Pear';

let fruit: AvailableFruits = 'Apple';

fruit = 'Mango';
console.log(fruit);
```

**Const**

```
-> Variables created using const have literal types automatically as we cannot reassign them
```

```ts
const x = 'Hi';
const c = true;
```

```
-> Here type of X will be Hi.
-> Type of c will be true.
```
