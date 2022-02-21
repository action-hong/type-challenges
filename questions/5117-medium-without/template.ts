type CheckIn<T, U> =
  U extends unknown[]
    ? T extends U[number]
      ? true
      : false
    : T extends U
      ? true
      : false

type Without<T extends unknown[], U, R extends unknown[] = []> =
  T extends [infer H, ...infer Rest]
    ? CheckIn<H, U> extends true
      ? Without<Rest, U, R>
      : Without<Rest, U, [...R, H]>
    : R
