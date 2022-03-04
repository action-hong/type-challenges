// type NumberToArray<T extends number, R extends any[] = []>
//   = R['length'] extends T
//     ? R
//     : NumberToArray<T, [...R, 0]>

// type ArrayPop<T extends any[]>
//   = T extends [...infer R, any]
//     ? R
//     : never

// type _Fibonacci<
//   T extends any[],
//   A extends any[] = [],
//   B extends any[] = [0]
// > = T['length'] extends 0
//   ? A['length']
//   : _Fibonacci<ArrayPop<T>, B, [...A, ...B]>

// type Fibonacci<T extends number> = _Fibonacci<NumberToArray<T>>

type Fibonacci<
  T extends number,
  Prev extends any[] = [],
  Next extends any[] = [1],
  Count extends any[] = []
> = Count['length'] extends T
  ? Prev['length']
  : Fibonacci<T, Next, [...Prev, ...Next], [...Count, 0]>

type f100 = Fibonacci<10>
