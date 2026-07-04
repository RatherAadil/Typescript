type T1 = { length: number }; // it represents a SET of all JS values that have length property
type T2 = { length: number; name: string }; // it represents a SET of all JS values that have length and name property
type T3 = { toString: () => string }; // it represents a SET of all JS values that have toString method.

const obj1: T1 = ''; //  string has length property
const obj2: T1 = []; //  array has length property
const obj3: T1 = () => {}; //  function has length property
const obj4: T1 = { length: 1 }; //  object has length property

const Obj1: T2 = () => {}; //  function has length AND name property
const Obj2: T2 = window; //  window has length AND name property
const Obj3: T2 = { length: 2, name: 'xyz' }; //  object has both

const a: T3 = ''; // string has toString
const b: T3 = 1; // number has toString
const c: T3 = true; // boolean has toString
const d: T3 = []; // array has toString
const e: T3 = {}; // object has toString
const f: T3 = () => {}; // function has toString

type T0 = {};
const x: T0 = 'hello';
const y: T0 = { name: 'Aadil', isStudent: true };
const z: T0 = 90;
