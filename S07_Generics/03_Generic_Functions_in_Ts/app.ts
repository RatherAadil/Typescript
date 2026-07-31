/* Generics can be used with:

1. Type Aliases
2. Interfaces
3. Functions
4. Classses
*/

function echo<T>(a: T): T {
  return a;
}
let value1 = echo<'a'>('a'); // Now we cannot assign any other value to this value1 variable other than 'a'
// value1 = 'b';

const value2 = echo(6);
const value3 = echo<boolean>(true);
