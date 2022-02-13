type Flatten<T extends any[], R extends any[] = []> =
  T extends [infer F, ...infer Rest]
    ? F extends any[]
      ? Flatten<Rest, [...R, ...Flatten<F>]>
      : Flatten<Rest, [...R, F]>
    : R
