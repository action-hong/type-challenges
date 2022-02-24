type String2Union<S extends string> =
  S extends `${infer H}${infer Rest}`
    ? H | String2Union<Rest>
    : ''

type test = String2Union<'HELLO'>

type _Combinations<T, U = T>
  = [T] extends [never]
    ? '' : T extends U ? `${T & string}${_Combinations<Exclude<U, T>> | ''}` : ''

// type test1 = _Combinations<'A' | 'B'>

type AllCombinations<S extends string> = _Combinations<String2Union<S>>

type test1 = AllCombinations<'ABC'>
