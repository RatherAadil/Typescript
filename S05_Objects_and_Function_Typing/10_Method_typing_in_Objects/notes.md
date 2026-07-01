# Typing Method in Objects

```
-> Typing methods in objects is same as we type normal functions.
```

```ts
interface User {
  firstName: string;
  lastName: string;
  getFullName: () => string;
  getUserCredentials(email: string, password: string): string;
}

const user: User = {
  firstName: 'Aadil',
  lastName: 'Ahamd',
  getFullName() {
    return this.firstName + this.lastName;
  },
  getUserCredentials(email, password) {
    return `My email is ${email} and password ${password}`;
  },
};

console.log(user.getUserCredentials('abc@example.com', 'abcd'));
```
