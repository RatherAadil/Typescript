type T0 = {};
type T1 = { length: number };
type T2 = { length: number; name: string };

type T4 = T0 & T1;
type T5 = T0 | T1;

type T6 = T1 | T2;
type T7 = T1 & T2;

type Person1 = {
  name: string;
  age: number;
};

type Person2 = {
  name: string;
  age: number;
  email: string;
  occupation: string;
};

const item: T4 = { length: 90 };

const obj1: T5 = { age: 4 };

const obj2: T6 = { length: 20, name: 'Hii' };
const obj3: T7 = { length: 34, name: 'hello' };

const person: Person1 & Person2 = {};
