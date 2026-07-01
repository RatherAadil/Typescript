# Interfaces vs Types

- If we create two interfaces with same name TS does not show error, instead it merges the properties of both the interfaces and we call that `Decleration Merging or Reopening the Interface.`

**Example**

```ts
interface User {
  name: string;
  age: number;
}

interface User {
  address: {
    street: string;
    pinCode: number;
  };
}
```

```
Once we use it, it will become a single Interface with all the properties
```

```ts
interface User {
  name: string;
  age: number;
  address: {
    street: string;
    pinCode: number;
  };
}
```

```
-> If we do the same thing with type alias it will throw error and will not allow us to create the duplicate type.
```

```ts
type TUser = {
  name: string;
  age: number;
};
type TUser = {
  street: string;
  pinCode: number;
};

// ❌ Error
```

### Extend

```
-> Interfaces can be extended using extends keyword.
```

```ts
interface User {
  name: string;
  age: number;
}
interface Student extends User {
  schoolName: string;
  class: string;
}
interface Employee extends User {
  companyName: string;
  designation: string;
}
```

```
-> types can also be combined but not with extends keyword, instead we need to use intersection (&)
```

```ts
type Usr = {
  name: string;
  age: number;
};
type Std = {
  schoolName: string;
  class: string;
} & Usr;
```

### Note

```
-> Never use intersection (&) to combine objects as it degrades the performance 2.5 time.
-> Always use interfaces while working with objects.
```

---

### Short Notes

Differences that discuss in the video-

1. Icons of both interface and Type Aliases are different.
2. cannot make duplication identifiers of Type Aliases
3. if we duplicate identifiers of interface its becomes combines
4. interfaces are built primarly for structure object data SVGUnitTypes
5. using "extend" keyword we can combine to different interfaces
6. Using AND(&) operator we can combine two Type Aliases
