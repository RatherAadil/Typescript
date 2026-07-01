type MathOperation = (a: number, b: number) => number;

const add: MathOperation = function (a, b) {
  return a + b;
};

const sub: MathOperation = function (a, b) {
  return a - b;
};

type Fruit = 'Apple' | 'Mango' | 'Grapes';

function printFruit(fruit: Fruit) {
  console.log(fruit);
}
printFruit('Grapes');
