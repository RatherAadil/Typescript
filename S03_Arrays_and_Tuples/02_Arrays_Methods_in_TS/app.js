let a = [1, 2, 3];
//MAp
const result = a.map((el) => el.toString());
const result2 = a.map((el) => el % 2 === 0);
// console.log(result[0]);
//Filter
let arr = [1, 2, 3, 4, 5, 6];
const filteredArr = arr.filter((el) => el % 2 === 0);
let arr2 = [1, 2, 3, 'hi', 4, 'abc'];
const filtered2 = arr2.filter((el) => typeof el === 'number');
let arr3 = [1, 2, 3, 'hi', 4, 'abc', false];
const filtered3 = arr3.filter((el) => typeof el !== 'number');
//Reduce()
let arr4 = [1, 2, 3];
const res = arr4.reduce((curr, acc) => curr + acc);
console.log(res);
export {};
