type NArray<T extends number, N extends number[] = []> = N['length'] extends T
  ? N
  : NArray<T, [...N, 0]>

// type GreaterThan<T extends number, U extends number> = T extends U
//   ? false
//   : NArray<T> extends [...any, ...NArray<U>]
//     ? true
//     : false

type GreaterThan<T extends number, U extends number, TA extends number[] = [], UA extends number[] = []>
  = T extends U
    ? false
    : T extends TA['length']
      ? false
      : U extends UA['length']
        ? true
        : GreaterThan<T, U, [...TA, 0], [...UA, 0]>
