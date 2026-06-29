# Object Literal Types

```
It is a way to define the exact shape of an object, its property names and their types at the time of declaration. After that we can't add extra properties within it.
```

```ts
const user = {};
user.name = 'Aadil'; //Error
```

```
-> Whenever we create an empty object in ts, its type becomes {} and if we try to assign any property to it, ts will not allow that.
```

```ts
const user = {
  name: 'Aadil',
  age: 4,
  email: 'hello@gmail.com',
};
```

```
-> Whenever we create an object with a properties in it, TS automatically infers type of it, and that type is known as Object Literal

-> Ts automatically infers the type.
```

```ts
const user: {
  name: string;
  age: number;
  email: string;
};
```

```
-> We can explicitly define the Object Literal as well.
```

```ts
const user: {
  name: string;
  age: number;
  email: string;
} = {
  name: 'Aadil',
  age: 4,
  email: 'hello@gmail.com',
};
```

```
-> Once our object has too many properties it becomes messy and not reusable. To solve that we already learned about type alias.
```

```ts
type User = {
  name: string;
  age: number;
  email: string;
  address: {
    street: string;
    pinCode: number;
  };
  isStudent: boolean;
};

const user1: User = {
  name: 'Aadil',
  age: 4,
  email: 'hello@gmail.com',
  address: {
    street: 'Hardu Aboora',
    pinCode: 12345,
  },
  isStudent: true,
};
```

## Optional Properties

```
-> To make a property optional in an object i,e we may or may not add the property in object. ,  we use ? symbol.

-> In the below code example address and isStudent properties are optional.
```

```ts
type User = {
  name: string;
  age: number;
  email: string;
  address?: {
    street: string;
    pinCode: number;
  };
  isStudent?: boolean;
};

const user2: User = {
  name: 'Aadil',
  age: 4,
  email: 'hello@gmail.com',
};
```
