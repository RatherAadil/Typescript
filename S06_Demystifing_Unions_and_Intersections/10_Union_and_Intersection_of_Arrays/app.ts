type T1 = number[];
type T2 = string[];

type T3 = T1 | T2;
type T4 = T1 & T2;

// number[] | string[] --> Provides Homogenous Array
// (number | string)[] --> Provides Heterogenous Array

// const arr: T3 = [2, 45, 5];
const arr: T3 = ['A', 'Hello'];

let a!: never;
let b!: never;
const arr2: T4 = [a, b];

type T5 = number[] & { test: string };
const arr3 = [1] as T5;
arr3.test = 'Hello';
