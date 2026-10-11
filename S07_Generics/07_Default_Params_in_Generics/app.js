// const user = {
//   name: 'Aadil',
//   age: 27,
// };
// const job = {
//   role: 'SDE',
//   salary: 100000,
// };
// function merge<T, U>(a: T, b: U): T & U {
//   return { ...a, ...b };
// }
// const result = merge(user, job);
function map(arr, cb) {
    let result = [];
    for (const el of arr) {
        result.push(cb(el));
    }
    return result;
}
const cb = (el) => el * 2;
const result = map([1, 2, 3], cb);
console.log(result);
export {};
