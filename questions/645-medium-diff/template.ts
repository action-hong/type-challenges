// type Diff<O, O1> = {
//   [K in (keyof O | keyof O1) as K extends Exclude<keyof O1, keyof O> | Exclude<keyof O, keyof O1> ? K : never]:
//   K extends keyof O
//     ? O[K]
//     : K extends keyof O1
//       ? O1[K]
//       : never
// }

// your answers
// type Diff<O, O1> = O extends O1 ? Omit<O, keyof O1> : Omit<O1, keyof O>
type Diff<O, O1> =
  Omit<O & O1, keyof O & keyof O1>
