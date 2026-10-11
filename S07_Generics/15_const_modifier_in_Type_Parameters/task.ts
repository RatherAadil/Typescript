// METHOD OVERLOADING

interface StorageService {
  get(key: 'username'): string;
  get(key: 'age'): number;
  get(key: 'isLoggedIn'): boolean;
}

const storage: StorageService = {
  get(key: unknown) {
    const data = {
      username: 'Aadil',
      age: 25,
      isLoggedIn: true,
    };
    return data[key];
  },
};

const username = storage.get('username');
const age = storage.get('age');
const isLoggedIn = storage.get('isLoggedIn');

console.log(username, age, isLoggedIn);
