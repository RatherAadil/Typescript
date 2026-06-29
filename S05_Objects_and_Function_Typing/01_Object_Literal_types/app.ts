type User = {
  name: string;
  age: number;
  email: string;
  address?: {
    street: string;
    pinCode: number;
  };
  isStudent?: boolean;
};

const user = { name: 'Aadil', age: 4, email: 'hello@gmail.com' };
// user.name = 'Aadil';

const user1: User = {
  name: 'Aadil',
  age: 4,
  email: 'hello@gmail.com',
  address: {
    street: 'Hardu Aboora',
    pinCode: 12345,
  },
  isStudent: true,
};

console.log(user1);

const user2: User = {
  name: 'Aadil',
  age: 4,
  email: 'hello@gmail.com',
};
