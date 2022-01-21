type Shift<T> = T extends [f: any, ...r: infer R]
  ? R : never
