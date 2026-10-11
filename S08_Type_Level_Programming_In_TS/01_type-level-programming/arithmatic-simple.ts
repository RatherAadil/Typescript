type Signed<Sign extends "+" | "-", Value extends any[]> = {
  sign: Sign;
  value: Value;
};

// ===============================
// Helpers
// ===============================

type BuildArray<
  N extends number,
  R extends any[] = []
> = R["length"] extends N ? R : BuildArray<N, [...R, any]>;

// Convert number → Signed
type ToSigned<N extends number> =
  `${N}` extends `-${infer P extends number}`
    ? Signed<"-", BuildArray<P>>
    : Signed<"+", BuildArray<N>>;

// Convert Signed → number
type ToNumber<N extends Signed<any, any>> =
  N["value"]["length"] extends infer L extends number
    ? N["sign"] extends "-"
      ? `-${L}` extends `${infer R extends number}`
        ? R
        : never
      : L
    : never;

// Normalize zero
type Normalize<N extends Signed<any, any>> =
  N["value"]["length"] extends 0
    ? Signed<"+", []>
    : N;

// ===============================
// Tuple Operations
// ===============================

type AddArray<A extends any[], B extends any[]> = [...A, ...B];

type SubtractArray<
  A extends any[],
  B extends any[]
> = A extends [...infer Rest, ...B] ? Rest : [];

type IsGreaterOrEqual<
  A extends any[],
  B extends any[]
> = A extends [...B, ...any[]] ? true : false;

// ===============================
// Arithmetic
// ===============================

type AddSigned<
  A extends Signed<any, any>,
  B extends Signed<any, any>
> =
  A["sign"] extends B["sign"]
    ? Normalize<Signed<A["sign"], AddArray<A["value"], B["value"]>>>
    : IsGreaterOrEqual<A["value"], B["value"]> extends true
      ? Normalize<Signed<A["sign"], SubtractArray<A["value"], B["value"]>>>
      : Normalize<Signed<B["sign"], SubtractArray<B["value"], A["value"]>>>;

type Negate<N extends Signed<any, any>> =
  N["value"]["length"] extends 0
    ? Signed<"+", []>
    : N["sign"] extends "+"
      ? Signed<"-", N["value"]>
      : Signed<"+", N["value"]>;

type SubtractSigned<
  A extends Signed<any, any>,
  B extends Signed<any, any>
> = AddSigned<A, Negate<B>>;

type MultiplyArray<
  A extends any[],
  B extends any[],
  Result extends any[] = []
> =
  B extends [any, ...infer Rest]
    ? MultiplyArray<A, Rest, [...Result, ...A]>
    : Result;

type MultiplySigned<
  A extends Signed<any, any>,
  B extends Signed<any, any>
> =
  Normalize<
    Signed<
      A["sign"] extends B["sign"] ? "+" : "-",
      MultiplyArray<A["value"], B["value"]>
    >
  >;

type DivideArray<
  A extends any[],
  B extends any[],
  Count extends any[] = []
> =
  B extends []
    ? never
    : IsGreaterOrEqual<A, B> extends true
      ? DivideArray<SubtractArray<A, B>, B, [...Count, any]>
      : Count;

type DivideSigned<
  A extends Signed<any, any>,
  B extends Signed<any, any>
> =
  B["value"]["length"] extends 0
    ? never
    : Normalize<
        Signed<
          A["sign"] extends B["sign"] ? "+" : "-",
          DivideArray<A["value"], B["value"]>
        >
      >;

// ===============================
// Public API
// ===============================

type Add<A extends number, B extends number> =
  ToNumber<AddSigned<ToSigned<A>, ToSigned<B>>>;

type Subtract<A extends number, B extends number> =
  ToNumber<SubtractSigned<ToSigned<A>, ToSigned<B>>>;

type Multiply<A extends number, B extends number> =
  ToNumber<MultiplySigned<ToSigned<A>, ToSigned<B>>>;

type Divide<A extends number, B extends number> =
  ToNumber<DivideSigned<ToSigned<A>, ToSigned<B>>>;