type DynamicType<T> = {
  data: T;
};

type Test<U> = {
  name: U;
};
let a: DynamicType<Test<string>> = {
  data: {
    name: 'Aadil',
  },
};
