// const myPromise = new Promise<string>((resolve, reject) => {
//   resolve('Promise resolved!');
// });

/* OR USING PROMISE INTERFACE */

const myPromise: Promise<string> = new Promise((resolve, reject) => {
  resolve('Promise resolved!');
});

const result = await myPromise;
console.log(result);

const myPromise2 = await Promise.resolve('Hello');
