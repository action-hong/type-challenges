// 法1, 切换成数组
// type Str2Array<
//   T extends string,
//   R extends string[] = []
// > = T extends `${infer H}${infer Rest}` ? Str2Array<Rest, [...R, H]> : R

// type AHead<T extends string[]> = T extends [infer H, ...infer Rest] ? H : never
// type ATail<T extends string[]> = T extends [...infer Rest, infer L] ? L : never
// type DArray<T extends string[]> = T extends [any, ...infer M, any] ? M : []

// type _Is<T extends string[]> = T['length'] extends 0 | 1
//   ? true
//   : AHead<T> extends ATail<T>
//     ? _Is<DArray<T>>
//     : false

// type IsPalindrome<T extends number | string> = _Is<Str2Array<`${T}`>>

// type testArray = Str2Array<'abc'>
// type H = AHead<testArray>
// type L = ATail<testArray>
// type aa = _Is<['a', 'b', 'c']>

// 法2, 直接取第一个
type FirstChar<T extends string> = T extends `${infer F}${infer Rest}` ? F : ''
type IsOneOrZeroLength<T extends string> = T extends `${infer F}${infer S}`
  ? F extends ''
    ? true
    : S extends ''
      ? true
      : false
  : false

type one = IsOneOrZeroLength<'a'>
type two = IsOneOrZeroLength<'aa'>
type zero = IsOneOrZeroLength<''>

type _Is2<T extends string>
  = IsOneOrZeroLength<T> extends true
    ? true
    // 必须考虑2个字符的情况, 不考虑的话
    // 对于aa来说, 会得到 aa extends '' + 'aa' + '' 的情况, 即死循环了
    : T extends `${FirstChar<T>}${FirstChar<T>}`
      ? true
      : T extends `${FirstChar<T>}${infer M}${FirstChar<T>}`
        ? _Is2<M>
        : false

type IsPalindrome<T extends number | string> = _Is2<`${T}`>

// 法3 reverse 一下 进行比较
