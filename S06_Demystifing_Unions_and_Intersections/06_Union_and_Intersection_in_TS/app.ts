// ==============UNIOIN AND INTERSECTION WITH PRIMITIVE DATA TYPES ==================

type T1 = string | 'Hi';
type T2 = string & 'HI';

type T3 = boolean & false;
type T4 = boolean | false;

//Difference of two sets (A-B) or (B-A)
type T5 = Exclude<boolean, true>;
type T6 = Exclude<boolean, false>;

type T7 = string | `Hi, ${string}`;
type T8 = string & `Hi, ${string}`;

type T9 = number | 90;
type T10 = number & 90;

type T11 = (string | number) & string;
type T12 = (string | number) & (string | boolean);
type T13 = (string | number) | (string | boolean);

type T14 = (string | number | boolean) & (string | boolean);

type T15 = unknown & string;
type T16 = unknown | string;

type T17 = number & string;
type T18 = 5 & 9;
