type Permutation<T, P = T> =
  [T] extends [never]
    ? []
    : T extends any ? [T, ...Permutation<Exclude<P, T>>] : []
