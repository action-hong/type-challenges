// type W = '\n' | '\t' | ' '

type TrimRight<S extends string> =
  S extends `${infer SS}${W}`
    ? TrimRight<SS>
    : S
