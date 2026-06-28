let user: readonly string[] = ['Aadil'];

user.push('Rather');
user.pop();

console.log(user);

//Named Tuple
const arr: readonly [name: string, roll: number, isStudent: boolean] = [
  'Aadil',
  8,
  true,
];

arr.pop();
arr.pop();
arr.pop();
console.log(arr);
