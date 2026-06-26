let a: any = 5;
let b: unknown = 2;

a = 'Hii';
b = 'Byee';

a.toUpperCase();
// b.toFixed();

if (typeof b === 'number') {
  console.log(a.toString());
}
if (typeof b === 'string') {
  console.log(b.toUpperCase());
}

//Unknown
let c = 5;
c = 'Hii';

if (typeof a === 'number') {
  console.log(c);
} else {
  console.log(c);
  console.log('This should never run.');
}
