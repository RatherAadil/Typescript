type DynamicType<T, U> = T | U;
type DynamicType2<T, U> = {
  first: T;
  second: U;
};
interface DynamicType3<T, U> {
  first: T;
  second: U;
}

let a: DynamicType<string, number> = 5;

let b: DynamicType2<string, number> = {
  first: 'Hello',
  second: 89,
};

let c: DynamicType3<number, string> = {
  first: 8,
  second: 'Hi',
};

function getTuple<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}
const result1 = getTuple('a', 8);
const result2 = getTuple(true, 8);
