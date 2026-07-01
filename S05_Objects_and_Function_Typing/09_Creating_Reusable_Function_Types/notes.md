# Type Alias for Functions

```
Instead of writing the function type repeatedly, you can create a type alias.
```

```ts
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = function (a, b) {
  return a + b;
};

const sub: MathOperation = function (a, b) {
  return a - b;
};
```

## Why use this?

If many functions have the same signature, you write it only once.

## Restricting Function Input values

```
In TypeScript we can restrict inputs of a function  to a fixed set of valid values.
```

### Example of an e-commerce application where customers can only select certain sizes for a T-shirt.

```ts
type TShirtSize = 'S' | 'M' | 'L' | 'XL';

function orderTShirt(size: TShirtSize) {
  console.log(`Order placed for size ${size}`);
}

orderTShirt('M'); // ✅ Valid
orderTShirt('XL'); // ✅ Valid

orderTShirt('XXL'); // ❌ Error
```

**How it works**

```ts
type TShirtSize = 'S' | 'M' | 'L' | 'XL';
```

This tells TypeScript that a T-shirt size can only be one of these four values.

```
TShirtSize
│
├── "S"
├── "M"
├── "L"
└── "XL"
```

The function:

```ts
function orderTShirt(size: TShirtSize) {
  console.log(`Order placed for size ${size}`);
}
```

accepts only valid sizes. So these are allowed:

```ts
orderTShirt('S');
orderTShirt('M');
orderTShirt('L');
orderTShirt('XL');
```

But these are not:

```ts
orderTShirt('XXL'); // ❌ Not assignable
orderTShirt('Small'); // ❌ Not assignable
orderTShirt('Medium'); // ❌ Not assignable
```

### Another Example

```ts
type UserRole = 'admin' | 'editor' | 'user';

function deletePost(role: UserRole) {
  if (role === 'admin') {
    console.log('Post deleted.');
  } else {
    console.log('You do not have permission.');
  }
}

deletePost('admin'); // ✅ Post deleted.
deletePost('user'); // ✅ You do not have permission.
deletePost('guest'); // ❌ Error
```
