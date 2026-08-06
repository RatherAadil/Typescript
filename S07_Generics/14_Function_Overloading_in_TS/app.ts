function myFunc(a: string): string;
function myFunc(a: number): number;
function myFunc(a: boolean): boolean;

function myFunc(a: any) {
  if (typeof a === 'string') return a.toUpperCase();
  if (typeof a === 'number') return a ** 2;
  if (typeof a === 'boolean') return true;
  return false;
}

const result = myFunc('Hello');
const result2 = myFunc(5);
const result3 = myFunc(false);
