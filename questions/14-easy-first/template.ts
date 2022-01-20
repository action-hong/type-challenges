type First<T extends any[]> =
  T extends [first: infer F, ...rest: any]
    ? F : never
