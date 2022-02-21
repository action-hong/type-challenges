type IndexOf<T extends unknown[], U, R extends unknown[] = []> =
  T extends [infer H, ...infer Rest]
    ? H extends U
      ? R['length']
      : IndexOf<Rest, U, [...R, H]>
    : -1
