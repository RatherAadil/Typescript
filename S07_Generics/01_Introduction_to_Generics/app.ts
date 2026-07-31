//Generic is a dynamic type and its type can change dynamically during usage

//Type of Generic is decided when its instance is created.
//Generic represents infinitely many types.

//For better understanding we can corelate Generics with Functions with parameters and return value will be what we assign.

//Convention is to use T for type.

type DynamicType<Test> = Test;
type DynamicType2<T> = {
  value: T;
};
type DynamicType3<Test> = Test[];
const name: DynamicType<string> = 'Hello';
const age: DynamicType<number> = 60;
const num: DynamicType<70> = 70;

const User: DynamicType2<string> = {
  value: 'Hello',
};

const fruits: DynamicType3<String> = ['Apple', 'Banana', 'Cherry'];
const numbers: DynamicType3<number> = [1, 2, 3, 4, 5];

//USE CASE
//Without Generics

interface RegisterForm {
  isValid: boolean;
  data: {
    name: string;
    email: string;
    password: string;
  };
}
interface LoginForm {
  isValid: boolean;
  data: {
    email: string;
    password: string;
  };
}
interface PostForm {
  isValid: boolean;
  data: {
    postContent: string;
  };
}

// WITH GENERICS

type FormData<Data> = {
  isValid: boolean;
  data: Data;
};

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};
type LoginFormData = {
  email: string;
  password: string;
};
type PostFormData = {
  postContent: string;
};

const registerForm: FormData<RegisterFormData> = {
  isValid: true,
  data: { name: 'Aadil', email: 'abcd@example.com', password: 'abcd' },
};

const loginForm: FormData<LoginFormData> = {
  isValid: true,
  data: { email: 'abcd@example.com', password: 'abcd' },
};

const postForm: FormData<PostFormData> = {
  isValid: false,
  data: { postContent: 'Hello, how are you.' },
};
