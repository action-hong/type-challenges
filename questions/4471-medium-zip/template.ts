// type ArrayPeak<T extends unknown[]>
//   = T extends [infer H, ...any]
//     ? H
//     : never

// type ArrayShift<T extends unknown[]>
//   = T extends [any, ...infer Rest]
//     ? Rest
//     : never

// type Zip<T extends unknown[], N extends unknown[], R extends unknown[][] = []> =
//   T extends [infer H, ...infer Rest]
//     ? Zip<Rest, ArrayShift<N>, IsNever<ArrayPeak<N>> extends true ? R : [...R, [H, ArrayPeak<N>]]>
//     : R

// // type a = Zip<[1, 2, 3], ['1', '2']>
type Zip<T extends unknown[], N extends unknown[], R extends unknown[][] = []> =
  T extends [infer TH, ...infer TA]
    ? N extends [infer NH, ...infer NA]
      ? Zip<TA, NA, [...R, [TH, NH]]>
      : R
    : R
