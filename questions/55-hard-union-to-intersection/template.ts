type UnionToIntersection<U> = (U extends unknown ? (args: U) => unknown : never) extends (args: infer P) => unknown ? P : never
