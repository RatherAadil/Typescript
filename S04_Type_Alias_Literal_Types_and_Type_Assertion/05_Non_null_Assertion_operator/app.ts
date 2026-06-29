let a: string | undefined;
let username: string = a!;
username.toUpperCase();

function setValue() {
  a = 'Hii';
}
setValue();
let result = a!;
console.log(result.toUpperCase());
