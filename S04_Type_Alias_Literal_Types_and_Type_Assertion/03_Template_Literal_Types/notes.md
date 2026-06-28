# Template Literal Types in TypeScript

**Template Literal Types** allow you to create string types using template literal syntax (`` ` ` ``), just like JavaScript template strings.

They help TypeScript ensure that a string follows a specific format.

## Why use Template Literal Types?

- ✅ Restrict strings to a specific pattern.
- ✅ Reduce typing mistakes.
- ✅ Improve type safety.
- ✅ Useful for API routes, URLs, CSS class names, event names, etc.

---

## Example

```ts
// type Endpoints = 'user' | 'posts' | 'comments';
type Endpoints = `/api/${'user' | 'posts' | 'comments'}`;

type DiceNumber = 1 | 2 | 3 | 4 | 5 | 6;

// let api: `/api/${string}` = '/api/user';
let api: Endpoints = '/api/comments';

let dice: `My dice number is ${DiceNumber}` = 'My dice number is 5';
```

### Explanation

- `Endpoints` allows only these values:
  - `/api/user`
  - `/api/posts`
  - `/api/comments`

So this is valid:

```ts
let api: Endpoints = '/api/comments';
```

But this is **not** valid:

```ts
let api: Endpoints = '/api/profile'; // ❌ Error
```

`DiceNumber` contains only the numbers `1` to `6`.

Using it inside a template literal creates a string type like:

```ts
`My dice number is ${DiceNumber}`;
```

So these are valid:

```ts
'My dice number is 1';
'My dice number is 4';
'My dice number is 6';
```

But this is **not** valid:

```ts
'My dice number is 8'; // ❌ Error
```

## Behind the Scenes

Template Literal Types exist **only in TypeScript**. During compilation, they are removed, and JavaScript only keeps the actual string values.

## Key Points

- Template Literal Types create string types using template literals.
- They allow only strings that match a specific pattern.
- They work well with union types.
- They improve type safety and prevent invalid string values.
- They exist only during TypeScript compilation.

> **Remember:** **Template Literal Types** let you define the **format** of a string, so TypeScript accepts only strings that match that format.
