type Trunc<T extends number | string> =
  `${T}` extends `${infer N}.${any}`
    ? N
    : `${T}`
