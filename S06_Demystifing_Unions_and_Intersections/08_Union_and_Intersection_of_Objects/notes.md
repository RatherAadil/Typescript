# Union and Interseciton of Objects

```
-> In TypeScript, union (|) and intersection (&) operate on sets of
possible values, not on common properties.

-> Union gives us guarantee of less properties while as Intersection
gives guarantee of more properties as set has minimum values.
```

```
type T1 = { length: number };
type T2 = { length: number; name: string };

type T4 = T1 & T2;   ---> T2

Why T2 is smaller?? for that think in terms of sets of values:

What does T1 represent?

T1 = {
  all values that have
  length: number
}

What does T2 represent?

T2 = {
  all values that have
  length: number
  AND
  name: string
}

Since every value that satisfies T2 automatically satisfies T1

Do you need More context to understand ?

Set-theory view

Suppose these values exist:

{ length: 1 }

{ length: 2, name: "abc" }

{ length: 3, name: "xyz" }

The last two belong to both sets:

T1:
{ length: 1 }
{ length: 2, name: "abc" }
{ length: 3, name: "xyz" }

T2:
{ length: 2, name: "abc" }
{ length: 3, name: "xyz" }

Here you can see clearly see whatever values comes inside the T2 it is already present inside the T1 but no vice versa.
```

## Important:

```
-> When we do Union of two objects result is Superset.
-> When we do Intersection of two objects result is Subset.
```
