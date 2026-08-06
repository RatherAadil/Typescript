# Nested Generics

**Nested generics** are generics used inside another generic. They allow you to build complex and reusable data structures while maintaining type safety.

## Example

```ts
type DynamicType<T> = {
  data: T;
};

type Test<U> = {
  name: U;
};

let a: DynamicType<Test<string>> = {
  data: {
    name: 'Aadil',
  },
};
```

## How It Works

### Step 1

```ts
Test<string>;
```

becomes

```ts
{
  name: string;
}
```

### Step 2

Now substitute it into `DynamicType<T>`:

```ts
DynamicType<Test<string>>;
```

becomes

```ts
{
  data: {
    name: string;
  }
}
```

So the object

```ts
let a: DynamicType<Test<string>> = {
  data: {
    name: 'Aadil',
  },
};
```

is completely type-safe.

# Practical Use Case

## Paginated API Response

```ts
type Page<T> = {
  items: T[];
  total: number;
};

type ApiResponse<T> = {
  success: boolean;
  data: T;
};

type User = {
  id: number;
  name: string;
};

const users: ApiResponse<Page<User>> = {
  success: true,
  data: {
    items: [
      { id: 1, name: 'Aadil' },
      { id: 2, name: 'John' },
    ],
    total: 2,
  },
};
```

Here:

- Page<User> is a generic.
- ApiResponse<Page<User>> passes one generic into another generic.

## Benefits

- Creates reusable and modular types.
- Builds complex data structures easily.
- Maintains type safety.
- Commonly used for API responses, wrappers, and nested objects.
