type Intersection<T extends unknown[]> =
  T extends [infer Head, ...infer Tail]
    ? (Head extends unknown[] ? Head[number] : Head) & Intersection<Tail>
    : unknown

// type Intersection<T extends unknown[]> = T extends [infer Head, ...infer Tail]
//   ? (Head extends unknown[] ? Head[number] : Head) & Intersection<Tail>
//   : unknown

type NTU<T extends unknown[]> = T[number] & (2 | 3 | 4)

type t5821 = NTU<[1, 2, 3]>
