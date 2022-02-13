type FilterOut<T extends any[], F, R extends any[] = []> =
  T extends [infer First, ...infer Rest]
    ? [First] extends [F]
      ? FilterOut<Rest, F, R>
      : FilterOut<Rest, F, [...R, First]>
    : R
