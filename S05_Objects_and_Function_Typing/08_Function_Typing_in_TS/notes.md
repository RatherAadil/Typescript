# Function Typing in TS

```
Function typing means defining:

-> The type of each parameter
-> The return type of the function
```

### Syntax

```ts
function functionName(parameter: type): returnType {
  // code
}
```

### Example 1: Function with Parameters

```ts
function greet(name: string): void {
  console.log(`Hello ${name}`);
}

greet('Aadil');
```

### Explanation

```
-> name: string → parameter must be a string.
-> : void → function doesn't return anything.
```

### Example 2: Function Returning a Value

```ts
function add(a: number, b: number): number {
  return a + b;
}

const result = add(10, 20);
```

## Void Return Type

```
Functions that do not return a value use void.
```

```ts
function printMessage(message: string): void {
  console.log(message);
}
```

## Never Return Type

```
never is used for functions that never successfully finish.
```

### Example:

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

- Or an infinite loop:

```ts
function infiniteLoop(): never {
  while (true) {}
}
```
