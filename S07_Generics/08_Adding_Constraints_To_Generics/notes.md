# Generic Constraints (`extends`) in TypeScript

Generic constraints allow you to **restrict the types** that can be used with a generic. This is done using the `extends` keyword.

**Syntax:**

```ts
<T extends SomeType>
```

This means:

> `T` must be `SomeType` or a subtype of `SomeType`.

## 1. Constraining a Generic with an Object Type

First, create a type that defines the minimum required properties.

```ts
type HasName = {
  name: string;
};
```

Now use it as a generic constraint.

```ts
type PersonType<T extends HasName> = T;
```

Here,

- `T` must contain at least a `name` property of type `string`.
- `T` can have additional properties.

### Example

```ts
type User = {
  name: string;
  age: number;
};

let user: PersonType<User> = {
  name: 'Aadil',
  age: 25,
};
```

This is valid because `User` contains the required `name` property.

### Invalid Example

```ts
type Student = {
  age: number;
};

let student: PersonType<Student>;
```

❌ Error

Reason:

`Student` does not have the required `name` property.

## 2. Constraining with Primitive Types

The `extends` keyword is not limited to objects. It can also be used with primitive types.

```ts
type NewType<T extends string> = T;

let a: NewType<'Hi'> = 'Hi';
```

Here,

- `T` must be a `string`.
- String literals like `"Hi"` are valid because they are subtypes of `string`.

### Invalid Example

```ts
let b: NewType<100>;
```

❌ Error

Reason:

`number` does not extend `string`.

## 3. Dynamic Constraints (`T extends U`)

A generic can also be constrained using another generic type.

```ts
type DynamicValue<T extends U, U> = T;
```

Here,

- `U` can be any type.
- `T` must be compatible with `U`.

Example:

```ts
let c: DynamicValue<false, boolean>;
```

TypeScript checks:

```
Does false extend boolean?
```

Yes.

Therefore, this is valid.

### More Examples

```ts
type A = DynamicValue<5, number>;
```

✔ Valid

```ts
type B = DynamicValue<'Hello', string>;
```

✔ Valid

```ts
type C = DynamicValue<number, string>;
```

❌ Invalid

Reason:

`number` does not extend `string`.

## 4. Generic Constraints with Functions

Constraints work the same way in functions.

```ts
function myFunc<T extends U, U>(a: T) {
  return a;
}
```

Example:

```ts
myFunc({ name: 'Aadil' });
```

TypeScript infers:

```ts
T = { name: string };

U = { name: string };
```

Since `T` extends `U`, the call is valid.

## Why Use Generic Constraints?

Without constraints, a generic can be **any type**.

```ts
function print<T>(value: T) {
  return value.name;
}
```

❌ Error

Reason:

`T` could be `number`, `string`, `boolean`, etc., which may not have a `name` property.

Using a constraint fixes this.

```ts
function print<T extends HasName>(value: T) {
  return value.name;
}
```

Now TypeScript knows that every `T` has a `name` property.

## Important Points

- `extends` restricts the types that can be used with a generic.
- A constrained type must satisfy the required structure.
- Object constraints require at least the specified properties.
- Constraints can be applied to objects, primitive types, interfaces, classes, and other generic parameters.
- `T extends U` means **`T` must be assignable to `U`**.
