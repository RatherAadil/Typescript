//Normal function
function echo<T>(a: T): T {
  return a;
}

//Function Expression
const echo2 = function <T>(a: T): T {
  return a;
};

//Arrow Function
const echo3 = <T>(a: T): T => {
  return a;
};

type EchoFuncType = <T>(a: T) => T;
const echo4: EchoFuncType = function (a) {
  return a;
};

interface EchoFuncType2 {
  <T>(a: T): T;
}
const echo5: EchoFuncType2 = function (a) {
  return a;
};
