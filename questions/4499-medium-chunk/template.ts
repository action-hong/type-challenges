type Chunk<T extends unknown[], N extends number, TEMP extends unknown[] = [], R extends unknown[][] = []>
  = T extends [infer F, ...infer L]
    ? TEMP['length'] extends N
      ? Chunk<L, N, [F], [...R, TEMP]>
      : Chunk<L, N, [...TEMP, F], R>
    : TEMP['length'] extends 0
      ? R
      : [...R, TEMP]
