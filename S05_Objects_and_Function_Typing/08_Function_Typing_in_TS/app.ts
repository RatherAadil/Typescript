function add(a: number, b: number): number {
  return a + b;
}
const result = add(2, 3);

function sub(a: number, b: number): number {
  return a - b;
}

function printUppercase(str: string): void {
  console.log(str.toUpperCase());
  // return 'hi';
}
printUppercase('hello');

function throwError(): never {
  throw new Error('Error');
}
let a = throwError();
console.log(a);
