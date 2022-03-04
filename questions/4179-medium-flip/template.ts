// type ToKey<T> = T extends true
//   ? 'true'
//   : T extends false
//     ? 'false'
//     : T

// type Flip<T> = {
//   [K in keyof T as ToKey<T[K]>]: K
// }

// type F1 = Flip<{pi: 3.14; bool: true}>

type Flip<T> = {
  [P in keyof T as T[P] extends number | string | symbol
    ? T[P]
    : T[P] extends boolean
      ? `${T[P]}`
      : never]: P
}
