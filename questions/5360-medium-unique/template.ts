type Unique<T extends unknown[], R extends unknown[] = []> =
  T extends [infer H, ...infer Rest]
    ? H extends R[number]
      ? Unique<Rest, R>
      : Unique<Rest, [...R, H]>
    : R
