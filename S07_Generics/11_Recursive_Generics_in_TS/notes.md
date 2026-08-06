# Recursive Generics

## Practical Use cases

### Example 1

```ts
/* Nested comments Types */
interface Comments<T, U> {
  id: U;
  author: T;
  message: T;
  replies: Comments<T, U>[];
}

const comments: Comments<string, number> = {
  id: 1,
  author: 'Sanjay',
  message: 'TypeScript is awesome!',
  replies: [
    {
      id: 2,
      author: 'Rahul',
      message: 'Absolutely!',
      replies: [
        {
          id: 3,
          author: 'Aman',
          message: 'I agree.',
          replies: [],
        },
      ],
    },

    {
      id: 4,
      author: 'Neha',
      message: "I'm learning it now.",
      replies: [],
    },
  ],
};
```

### Example 2

```ts
// /* Nested Folders Types */
interface File<T, U> {
  name: T;
  size: U;
}

interface Folder<T, U> {
  name: string;
  files: File<T, U>[];
  folders: Folder<T, U>[];
}

const root: Folder<string, number> = {
  name: 'Root',
  files: [],
  folders: [
    {
      name: 'Documents',
      files: [
        {
          name: 'Resume.pdf',
          size: 1200,
        },
      ],
      folders: [],
    },
  ],
};
```
