// type Replace<S extends string, From extends string, To extends string, F extends string = ''> =
//   From extends ''
//     ? S
//     : S extends `${From}${infer Rest}`
//       ? `${F}${To}${Rest}`
//       : S extends `${infer First}${infer Rest}`
//         ? Replace<Rest, From, To, `${F}${First}`>
//         : `${F}${S}`

type Replace<S extends string, From extends string, To extends string>
  = From extends ''
    ? S
    : S extends `${infer F}${From}${infer R}`
      ? `${F}${To}${R}`
      : S
