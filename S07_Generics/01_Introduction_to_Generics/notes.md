# Generics in TypeScript

**Generics** allow you to create reusable types, functions, interfaces, and classes that work with different data types while maintaining type safety.

* A generic is a **dynamic type placeholder**.
* Its actual type is decided **when it is used**.
* By convention, **`T`** is used as the generic type parameter, but any valid name can be used.

> Think of generics like **function parameters**. A function parameter accepts different values, and a generic accepts different **types**.

---

## Syntax

```ts
type DynamicType<T> = T;
```

Here, `T` is a placeholder for any type.

---

## Example 1: Generic Type Alias

```ts
type DynamicType<Test> = Test;

const name: DynamicType<string> = 'Hello';
const age: DynamicType<number> = 60;
const num: DynamicType<70> = 70;
```

* `DynamicType<string>` → `string`
* `DynamicType<number>` → `number`
* `DynamicType<70>` → literal type `70`

---

## Example 2: Generic Object

```ts
type DynamicType2<T> = {
  value: T;
};

const User: DynamicType2<string> = {
  value: 'Hello',
};
```

`value` takes the type passed to the generic.

---

## Example 3: Generic Array

```ts
type DynamicType3<Test> = Test[];

const fruits: DynamicType3<string> = ['Apple', 'Banana', 'Cherry'];
const numbers: DynamicType3<number> = [1, 2, 3, 4, 5];
```

* `DynamicType3<string>` → `string[]`
* `DynamicType3<number>` → `number[]`

---

# Use Case

## Without Generics

A separate interface is created for every form.

```ts
interface RegisterForm {
  isValid: boolean;
  data: {
    name: string;
    email: string;
    password: string;
  };
}

interface LoginForm {
  isValid: boolean;
  data: {
    email: string;
    password: string;
  };
}

interface PostForm {
  isValid: boolean;
  data: {
    postContent: string;
  };
}
```

**Problem:** `isValid` is repeated in every interface.

---

## With Generics

```ts
type FormData<Data> = {
  isValid: boolean;
  data: Data;
};
```

Now only the `data` type changes.

```ts
type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

type LoginFormData = {
  email: string;
  password: string;
};

type PostFormData = {
  postContent: string;
};
```

Usage:

```ts
const registerForm: FormData<RegisterFormData> = {
  isValid: true,
  data: {
    name: 'Aadil',
    email: 'abcd@example.com',
    password: 'abcd',
  },
};

const loginForm: FormData<LoginFormData> = {
  isValid: true,
  data: {
    email: 'abcd@example.com',
    password: 'abcd',
  },
};

const postForm: FormData<PostFormData> = {
  isValid: false,
  data: {
    postContent: 'Hello, how are you.',
  },
};
```

**Benefit:** Reusable code with no duplication.

---

## Advantages of Generics

* Reusable code
* Type safety
* Reduces duplicate code
* Makes types flexible and maintainable
