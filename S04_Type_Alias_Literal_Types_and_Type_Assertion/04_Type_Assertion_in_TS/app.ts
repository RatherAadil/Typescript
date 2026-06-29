type Fruit = 'Apple' | 'Mango';

let a = ['Aadil', 20];

(a[0] as string).toUpperCase();

let b = a[1] as number;

const fruits = ['Papaya', 'Grapes'] as const;

//cannot change any value now.
// fruits[0] = 'Apple';

let fruitItem = fruits[0] as Fruit;
fruitItem = 'Apple';

//OBJECTS
const user = {
  username: 'Aadil',
  age: 3,
  address: {
    city: 'Baramulla',
  },
} as const;

//cannot change the value of property now as it became readonly now.
// user.name = 'Zubair';
