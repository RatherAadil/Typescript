interface User {
  name: string;
  age: number;
}
interface Job {
  role: string;
  salary: number;
}
const user: User = {
  name: 'Aadil',
  age: 27,
};
const job: Job = {
  role: 'SDE',
  salary: 100000,
};
function merge<T, U>(a: T, b: U): T & U {
  return { ...a, ...b };
}
const mergeResult = merge(user, job);

//CUSTOM MAP FUNCTION

function map<T, U>(arr: T[], cb: (value: T) => U): U[] {
  let output: U[] = [];
  for (const el of arr) {
    output.push(cb(el));
  }
  return output;
}

const mapResult = map([1, 2, 3], (el) => el.toString());

//CUSTOM FILTER FUNCTION
function filter<T>(arr: T[], cb: (el: T) => boolean): T[] {
  const output: T[] = [];
  for (const el of arr) {
    if (cb(el)) {
      output.push(el);
    }
  }
  return output;
}

const filteredResult = filter([1, 2, 3, 4, 5], (el) => el > 2);
