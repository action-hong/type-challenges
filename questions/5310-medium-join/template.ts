// type Join<T extends unknown[], U extends string | number, F extends boolean = true> =
//   T extends [infer Head, ...infer Rest]
//     ? Head extends string
//       ? `${F extends false ? `${U}` : ''}${Head}${Join<Rest, U, false>}`
//       : ''
//     : ''

type Join<T extends unknown[], U extends string | number, S extends string = ''>
  = T extends [infer Head, ...infer Rest]
    ? Join<Rest, U, S extends '' ? `${Head & string}` : `${S}${U}${Head & string}`>
    : S

type t = Join<['2', '2', '2'], 1>
