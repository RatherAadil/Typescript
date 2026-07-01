type Role = 'Admin' | 'User';

function greet(name?: string) {
  console.log(`Hi, ${name || ''}
How are you.`);
}
greet('Aadil');

function createUser(name: string, email: string, role?: Role) {
  console.log({
    name,
    email,
    role: role ?? 'User',
  });
}

createUser('Aadil', 'aadil@example.com');

createUser('John', 'john@example.com', 'Admin');
