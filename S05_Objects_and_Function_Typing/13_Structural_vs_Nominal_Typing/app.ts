interface Person {
  name: string;
  age: number;
}
interface User {
  name: string;
}

const person: Person = {
  name: 'Adnan',
  age: 50,
};

const user: User = person;

function a(x: User) {
  console.log(x);
}

const test = { name: 'Jhon', age: 30, email: 'abc@gmail.com' };
a(test);
