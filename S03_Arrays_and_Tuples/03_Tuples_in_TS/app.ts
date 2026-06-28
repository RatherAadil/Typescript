let user: [string, number] = ['Aadil', 45];
console.log(user);

//Named Tuple
const arr: [name: string, roll: number, isStudent: boolean] = [
  'Aadil',
  8,
  true,
];

arr[0] = arr[0].toUpperCase();

arr.pop();
arr.pop();
arr.pop();
arr[0].toUpperCase();

//Destructuring
const [x, y, z] = arr;
console.log(arr);
