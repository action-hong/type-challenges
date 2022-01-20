type Last<T extends any[]> =
  T extends [...F: any[], L: infer L] ?
    L : never
