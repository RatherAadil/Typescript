// const arr = new Array<string>();
const arr: Array<string> = new Array();
// const arr: string[] = [];
arr.push('hello');
// arr.push(1);

const myMap = new Map<string, number>();
myMap.set('Age', 26);
// myMap.set('isStudent', false);

console.log(myMap);

const mySet = new Set<number>();
// mySet.add('Hello');
mySet.add(2);
mySet.add(3);
mySet.add(2);
mySet.add(2);
console.log(mySet);

interface User {
  name: string;
  age: number;
}

const user: Readonly<User> = {
  name: 'Aadil',
  age: 25,
};
// user.name = 'Zubair';

const numbers: ReadonlyArray<number> = [1, 2, 3];
// numbers.push(2);
