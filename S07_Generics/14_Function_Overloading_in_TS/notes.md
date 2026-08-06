# Function Overloading in TypeScript

**Function overloading** allows a function to have **multiple call signatures** with different parameter and return types, while sharing a single implementation.

## Syntax

```ts
function myFunc(a: string): string;
function myFunc(a: number): number;
function myFunc(a: boolean): boolean;

function myFunc(a: any) {
  // implementation
}
```

- The first three declarations are **overload signatures**.
- The last function is the **implementation signature**.
- Only the implementation contains the function body.

## Example

```ts id="zb3n9p"
function myFunc(a: string): string;
function myFunc(a: number): number;
function myFunc(a: boolean): boolean;

function myFunc(a: any) {
  if (typeof a === 'string') return a.toUpperCase();
  if (typeof a === 'number') return a ** 2;
  if (typeof a === 'boolean') return true;
  return false;
}
```

The implementation checks the argument type and returns the appropriate value.

## Usage

### String

```ts
const result = myFunc('Hello');
```

Type:

```ts
const result: string;
```

Output:

```text
"HELLO"
```

### Number

```ts
const result2 = myFunc(5);
```

Type:

```ts
const result2: number;
```

Output:

```text
25
```

### Boolean

```ts
const result3 = myFunc(false);
```

Type:

```ts
const result3: boolean;
```

Output:

```text
true
```

## Why Use Function Overloading?

- Supports multiple parameter types.
- Allows different return types for different inputs.
- Provides better IntelliSense and type checking.

# Function Overloading vs Generics

| Function Overloading                   | Generics                                   |
| -------------------------------------- | ------------------------------------------ |
| Multiple function signatures           | One reusable function                      |
| Different behavior for different types | Same behavior for all types                |
| Return type may vary based on input    | Return type is based on the generic type   |
| Used when logic changes for each type  | Used when logic is the same for every type |

## When to Use Which?

- **Use function overloading** when the implementation **differs** for different types.
- **Use generics** when the implementation is **the same**, but should work with multiple types.
