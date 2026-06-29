let a!: string;

let b = a;
let c = a;

console.log(b, c); //Undefined
console.log(a.toLowerCase()); //Error: Cannot read properties of undefined (reading 'toLowercase')
