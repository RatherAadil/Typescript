type HasName = {
  name: string;
};
type PersonType<T extends HasName> = T;

type User = { name: string; age: number };

let user: PersonType<User> = {
  name: 'Aadil',
  age: 25,
};

type NewType<T extends string> = T;
let a: NewType<'Hi'> = 'Hi';

//DEFINE EXTENDS DYNAMICALLY: T is subType of U
type DynamicValue<T extends U, U> = T;

let c: DynamicValue<false, boolean>;

//WITH FUNCTIONS
function myFunc<T extends U, U>(a: T) {
  return a;
}
myFunc({ name: 'Aadil' });

// WHAT WE DID
/*
We created a object type named HasName with a name property and extended in the Generic. Now when we defined the type for Generic, that should have atleast name property on it.

As we created a User object which has name property on it so it is valid.


We can use any type after extends but when we use it that should be present
*/
