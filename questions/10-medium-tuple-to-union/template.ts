type TupleToUnion<T> =
  T extends [infer R, ...infer Rest]
    ? R | TupleToUnion<Rest>
    : never
