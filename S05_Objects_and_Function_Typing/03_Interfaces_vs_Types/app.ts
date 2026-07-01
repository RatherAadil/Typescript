interface IUser {
  name: string;
  age: number;
  email: string;
  address: {
    street: string;
    pinCode: number;
  };
}

type TUser = {
  name: string;
  age: number;
  email: string;
  address: {
    street: string;
    pinCode: number;
  };
};

//====================== Extend ===========
interface User {
  name: string;
  age: number;
}
interface Student extends User {
  schoolName: string;
  class: string;
}
interface Employee extends User {
  companyName: string;
  designation: string;
}

type Usr = {
  name: string;
  age: number;
};
type Std = {
  schoolName: string;
  class: string;
} & Usr;
