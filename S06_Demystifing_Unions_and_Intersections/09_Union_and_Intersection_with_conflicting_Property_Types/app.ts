// type Person1 = {
//   name: string;
//   age: string;
// };

// type Person2 = {
//   name: string;
//   age: number;
// };

// const obj: Person1 | Person2 = {
//   name: 'Aadil',
//   age: 2,
// };
// const obj2: Person1 & Person2 = {
//   name: 'Aadil',
//   age: 'Hello',
// };

interface Person1 {
  name: string;
  age: string;
}

interface Person2 {
  name: string;
  age: number;
}
// interface Person3 extends Person1 {
//   name: string;
//   age: number;
// }

const obj: Person1 | Person2 = {
  name: 'Aadil',
  age: 2,
};

function a(): never {
  throw new Error();
}

const obj2: Person1 & Person2 = {
  name: 'Aadil',
  age: a(),
};
