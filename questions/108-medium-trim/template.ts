// type Trim<S extends string> =
//   S extends `${W}${infer R}${W}`
//     ? Trim<R>
//     : S extends `${W}${infer R}`
//       ? Trim<R>
//       : S extends `${infer R}${W}`
//         ? Trim<R>
//         : S

type Trim<S extends string>
  = S extends `${W}${infer R}` | `${infer R}${W}`
    ? Trim<R> : S
