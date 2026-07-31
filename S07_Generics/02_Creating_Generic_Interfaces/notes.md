# Using Generics with Interfaces

Generics can also be used with **interfaces**. Instead of creating separate interfaces with the same structure, we create one generic interface and pass the required data type when using it.

```ts
interface FormData<Data> {
  isValid: boolean;
  data: Data;
}
```

Here, `Data` is a generic type parameter. The type of `data` is decided when an instance of `FormData` is created.

---

### Form Data Types

```ts
interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

interface LoginFormData {
  email: string;
  password: string;
}

interface PostFormData {
  postContent: string;
}
```

Each interface defines only the fields required for that specific form.

---

### Usage

#### Register Form

```ts
const registerForm: FormData<RegisterFormData> = {
  isValid: true,
  data: {
    name: 'Aadil',
    email: 'abcd@example.com',
    password: 'abcd',
  },
};
```

- `Data` becomes `RegisterFormData`.
- `data` must contain `name`, `email`, and `password`.

---

#### Login Form

```ts
const loginForm: FormData<LoginFormData> = {
  isValid: true,
  data: {
    email: 'abcd@example.com',
    password: 'abcd',
  },
};
```

- `Data` becomes `LoginFormData`.
- `data` must contain only `email` and `password`.

---

#### Post Form

```ts
const postForm: FormData<PostFormData> = {
  isValid: false,
  data: {
    postContent: 'Hello, how are you.',
  },
};
```

- `Data` becomes `PostFormData`.
- `data` must contain only `postContent`.
