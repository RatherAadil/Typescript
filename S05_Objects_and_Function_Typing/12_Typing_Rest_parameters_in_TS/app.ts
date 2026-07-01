function test(...params: number[]) {
  console.log(params);
}

test(1, 2, 34, 5);

function paramsAndNumbersArray(a: string, b: boolean, ...params: number[]) {
  console.log(params);
}

paramsAndNumbersArray('hello', true, 1, 2, 34, 5);

function numbersAndString(...params: (number | string)[]) {
  console.log(params);
}

numbersAndString(1, 2, 'Hello', 34, 5, 'Hii');
