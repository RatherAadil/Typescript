//WITH TYPE ALIASES

type DynamicType<T = string> = T;
type DynamicType2<T = string, U = number> = T;
type DynamicType3<T, U = number> = {
  first: T;
  second: U;
};

//WITH INTERFACES
interface DynamicType4<T, U = number> {
  first: T;
  second: U;
}

let a: DynamicType;
let b: DynamicType3<boolean> = {
  first: true,
  second: 2,
};

let c: DynamicType4<number> = {
  first: 5,
  second: 4,
};

// WITH FUNCTIOINS

function myFunc<T = string>(a: T) {
  return a;
}
const result = myFunc(43);
