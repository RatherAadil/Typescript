# Interfaces in TS

```
-> An interface is used to define the shape (structure) of an object.

-> It tells TypeScript what properties an object should have and what their types should be.
```

### Syntax

```ts
interface interfaceName {
  property: type;
}
```

### Example

```ts
interface User {
  name: string;
  age: number;
  email: string;
  address?: {
    street: string;
    pinCode: number;
  };
  isStudent?: boolean;
}

const user2: User = {
  name: 'Aadil',
  age: 4,
  email: 'hello@gmail.com',
};
```

### Key Points

- An interface defines the structure of an object.
- It is similar to using an object type, but it is not a type alias.
- interface does not use =.
- Interfaces are primarily used for object shapes.
- Both interface and type disappear after TypeScript is compiled to JavaScript.
