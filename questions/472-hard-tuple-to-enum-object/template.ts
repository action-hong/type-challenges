
const OperatingSystem = ['macOS', 'Windows', 'Linux'] as const
type O1 = typeof OperatingSystem

// 枚举出所有序号, 太厉害了!
type TupleKeys<T extends readonly unknown[]>
 = T extends readonly [
   infer Head,
   ...infer Tail
 ] ? TupleKeys<Tail> | Tail['length']
   : never

type Enum<T extends readonly string[], N extends boolean = false> =
  {
    readonly [K in TupleKeys<T> as Capitalize<T[K]> ]: N extends false ? T[K] : K
  }

type a472 = Enum<typeof OperatingSystem>
