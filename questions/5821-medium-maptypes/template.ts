type MapKeyType<
  T,
  R,
  // 这里做类型分配
  // Type 是一个 unioin
  Type = R extends { mapFrom: T; mapTo: infer TO } ? TO : never
> =
  // 这里要判断Type是否为never
  [Type] extends [never] ? T : Type

type MapTypes<T, R> = {
  [K in keyof T]: MapKeyType<T[K], R>
}

// type test5821 = MapTypes<{date: string}, {mapFrom: string; mapTo: Date} | {mapFrom: string; mapTo: null}>
type test5821 = MapTypes<
{ name: string; date: Date },
{ mapFrom: string; mapTo: boolean } | { mapFrom: Date; mapTo: string }
>

type test5555= MapTypes<{name: string}, {mapFrom: boolean; mapTo: never}>
