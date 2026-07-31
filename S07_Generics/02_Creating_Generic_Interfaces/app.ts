interface FormData<Data> {
  isValid: boolean;
  data: Data;
}

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}
interface LoginFormData {
  email: string;
  password: string;
}
interface PostFormData {
  postContent: string;
}

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
