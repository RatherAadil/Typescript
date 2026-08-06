function echo<const T>(arg: T): T {
  return arg;
}

const obj = {
  name: 'Aadil',
  age: 10,
} as const;

const result1 = echo('Hii');
const result2 = echo(2);
const result3 = echo(false);
const result4 = echo([1, 2, 3]);
const result5 = echo(['a', 'b', 'c']);
const result6 = echo({ name: 'Aadil', age: 10 });

const userName = result6.name;
