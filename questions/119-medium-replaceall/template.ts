// type ReplaceAll<S extends string, From extends string, To extends string, R extends string = ''> =
//   From extends ''
//     ? S
//     : S extends `${From}${infer Rest}`
//       ? ReplaceAll<Rest, From, To, `${R}${To}`>
//       : S extends `${infer First}${infer Rest}`
//         ? ReplaceAll<Rest, From, To, `${R}${First}`>
//         : `${R}${S}`

type ReplaceAll<S extends string, From extends string, To extends string>
  = From extends ''
    ? S
    : S extends `${infer F}${From}${infer L}`
      ? `${F}${To}${ReplaceAll<L, From, To>}`
      : S

type From = 'hello'

type text = 'hello'

type check<T extends string> = T extends `${infer F}${From}`
  ? F : T
