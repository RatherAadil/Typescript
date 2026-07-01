# Optional Parameters in TypeScript

An **optional parameter** is a function parameter that **does not have to be passed** when calling the function.

In TypeScript, you make a parameter optional by adding a **question mark (`?`)** after its name.

### Syntax

```typescript
function functionName(parameter1: type, parameter2?: type) {
  // function body
}
```

Here:

- `parameter1` is required.
- `parameter2` is optional.

---

## Example 1: Basic Optional Parameter

```typescript
function greet(name?: string) {
  console.log(`Hi, ${name || ''}
How are you.`);
}

greet('Aadil');
greet();
```

### Output

```
Hi, Aadil
How are you.

Hi,
How are you.
```

### Explanation

- In the first call, the parameter (`name`) is passed.
- In the second call, no argument was passed.

---

## Example 2: Optional Number Parameter

```typescript
function square(num: number, power?: number) {
  if (power !== undefined) {
    console.log(num ** power);
  } else {
    console.log(num * num);
  }
}

square(5);
square(5, 3);
```

### Output

```
25
125
```

### Explanation

- `square(5)` calculates the square.
- `square(5, 3)` calculates 5³.

## Rules for Optional Parameters

### 1. Required parameters must come before optional parameters.

✅ Correct

```typescript
function display(name: string, age?: number) {
  console.log(name, age);
}
```

❌ Incorrect

```typescript
function display(age?: number, name: string) {
  console.log(name, age);
}
```

TypeScript Error:

```
A required parameter cannot follow an optional parameter.
```

---

### 2. Optional parameters have the type `type | undefined`.

For example:

```typescript
function demo(value?: string) {
  console.log(value);
}
```

TypeScript treats `value` as:

```typescript
value: string | undefined;
```

That's why it's good practice to check for `undefined` before using it.

```typescript
function demo(value?: string) {
  if (value !== undefined) {
    console.log(value.toUpperCase());
  }
}
```

---

## Optional Parameters vs Default Parameters

### Optional Parameter

```typescript
function greet(name: string, message?: string) {
  console.log(message, name);
}

greet('Aadil');
```

Output

```
undefined Aadil
```

---

### Default Parameter

```typescript
function greet(name: string, message: string = 'Hello') {
  console.log(message, name);
}

greet('Aadil');
```

Output

```
Hello Aadil
```

**Difference:**

- **Optional parameter (`?`)** → Value becomes `undefined` if not passed.
- **Default parameter (`=`)** → Uses the default value if not passed.

---

## Real-World Example

```typescript
type Role = 'Admin' | 'User';

function createUser(name: string, email: string, role?: Role) {
  console.log({
    name,
    email,
    role: role ?? 'User',
  });
}

createUser('Aadil', 'aadil@example.com');

createUser('John', 'john@example.com', 'Admin');
```

### Output

```
{
  name: 'Aadil',
  email: 'aadil@example.com',
  role: 'User'
}

{
  name: 'John',
  email: 'john@example.com',
  role: 'Admin'
}
```

Here, `role` is optional. If it isn't provided, the **nullish coalescing operator (`??`)** assigns `"User"` as the default role.

---

# Key Points

- Use `?` to make a parameter optional.
- Optional parameters can be omitted when calling the function.
- Internally, an optional parameter has the type `T | undefined`.
- Required parameters must always come **before** optional parameters.
- Use **optional parameters** when a value is truly optional, and **default parameters** when you want a fallback value automatically.
