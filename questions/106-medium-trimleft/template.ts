type W = ' ' | '\n' | '\t'

type TrimLeft<S extends string> =
  S extends `${W}${infer R}` ? TrimLeft<R> : S
