import { Equal, Expect } from '@type-challenges/utils'

// enum Comparison {
//   Greater,
//   Equal,
//   Lower,
// }

// type _Digit = {
//   zero: boolean
//   prev?: any
// }

// type Next<T extends _Digit> = {
//   zero: false
//   prev: T
// }

// type IsZero<T extends _Digit> = T['zero']

// type Prev<T extends _Digit> = T['prev']

// type _0 = {
//   zero: true
// }

// type _1 = Next<_0>
// type _2 = Next<_1>
// type _3 = Next<_2>
// type _4 = Next<_3>
// type _5 = Next<_4>
// type _6 = Next<_5>
// type _7 = Next<_6>
// type _8 = Next<_7>
// type _9 = Next<_8>

// type _Digits = [
//   _0, _1, _2, _3, _4, _5, _6, _7, _8, _9
// ]

// type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

// type ConvertDigit<T extends number> = _Digits[T]
// type ConvertStringToDigit<T extends string> = T extends `${Digit}` ? _Digits[T] : never

// type CompareDigit<A extends _Digit, B extends _Digit>
//  = IsZero<A> extends true
//    ? IsZero<B> extends true
//      ? Comparison.Equal
//      : Comparison.Lower
//    : IsZero<B> extends true
//      ? Comparison.Greater
//      : CompareDigit<Prev<A>, Prev<B>>

// type IsEmpty<T extends string> = T extends '' ? true : false

// // type Comparator<A extends number, B extends number> =
// //   Equal<A, B> extends true
// //     ? Comparison.Equal
// //     : Comparison.Greater

// type First<T extends string>
//  = T extends `${infer F}${any}`
//    ? F extends `${Digit}`
//      ? F
//      : T extends `${Digit}`
//        ? T
//        : ''
//    : ''

// type Rest<T extends string>
//  = T extends `${Digit}${infer R}`
//    ? R
//    : ''

// type CompareByAbsolute<A extends string, B extends string> =
//   IsEmpty<A> extends true
//     ? IsEmpty<B> extends true
//       ? Comparison.Equal
//       : Comparison.Lower
//     : IsEmpty<B> extends true
//       ? Comparison.Greater
//       : CompareDigit<ConvertStringToDigit<First<A>>, ConvertStringToDigit<First<B>>> extends Comparison.Equal
//         ? CompareByAbsolute<Rest<A>, Rest<B>>
//         : CompareDigit<ConvertStringToDigit<First<A>>, ConvertStringToDigit<First<B>>>

// type IsNegative<T extends string> =
//  T extends `-${any}` ? true : false

// type MyAbsolute<T extends string> =
//   T extends `-${infer R}` ? R : T

// type CompareByDigit<A extends string, B extends string> =
//   IsNegative<A> extends true
//     ? IsNegative<B> extends true
//       ? CompareByAbsolute<MyAbsolute<B>, MyAbsolute<A>>
//       : Comparison.Lower
//     : IsNegative<B> extends true
//       ? Comparison.Greater
//       : CompareByAbsolute<A, B>

// type Comparator<A extends number, B extends number> = CompareByDigit<`${A}`, `${B}`>

enum Comparison {
  Greater,
  Equal,
  Lower,
}

type StringDiff<A extends string, B extends string> =
  A extends `${infer La}${infer Ra}` ?
    B extends `${infer Lb}${infer Rb}` ?
      La extends Lb ?
        StringDiff<Ra, Rb>
        : [La, Lb]
      : Comparison.Greater
    : B extends '' ?
      Comparison.Equal
      : Comparison.Lower

type CompareDigits<
  A extends string,
  B extends string,
  C extends 0[] = [],
  Cl = `${C['length']}`
> =
  Cl extends A ?
    Cl extends B ?
      Comparison.Equal
      : Comparison.Lower
    : Cl extends B ?
      Comparison.Greater
      : CompareDigits<A, B, [0, ...C]>

type Compare<A extends string, B extends string, D = StringDiff<A, B>> =
  D extends [string, string] ?
    CompareDigits<D[0], D[1]>
    : D

type Comparator<
  A extends number,
  B extends number,
  Sa extends string = `${A}`,
  Sb extends string = `${B}`
> =
Sa extends Sb ? Comparison.Equal :
  Sa extends `-${infer a}` ?
    Sb extends `-${infer b}` ?
      Compare<`${b}`, `${a}`>
      : Comparison.Lower
    : Sb extends `-${any}` ?
      Comparison.Greater
      : Compare<Sa, Sb>

type cases = [
  Expect<Equal<Comparator<5, 5>, Comparison.Equal>>,
  Expect<Equal<Comparator<5, 6>, Comparison.Lower>>,
  Expect<Equal<Comparator<5, 8>, Comparison.Lower>>,
  Expect<Equal<Comparator<5, 0>, Comparison.Greater>>,
  Expect<Equal<Comparator<-5, 0>, Comparison.Lower>>,
  Expect<Equal<Comparator<0, 0>, Comparison.Equal>>,
  Expect<Equal<Comparator<0, -5>, Comparison.Greater>>,
  Expect<Equal<Comparator<5, -3>, Comparison.Greater>>,
  Expect<Equal<Comparator<5, -7>, Comparison.Greater>>,
  Expect<Equal<Comparator<-5, -7>, Comparison.Greater>>,
  Expect<Equal<Comparator<-5, -3>, Comparison.Lower>>,
  Expect<Equal<Comparator<-25, -30>, Comparison.Greater>>,
  Expect<Equal<Comparator<15, -23>, Comparison.Greater>>,
  Expect<Equal<Comparator<40, 37>, Comparison.Greater>>,
  Expect<Equal<Comparator<-36, 36>, Comparison.Lower>>,
  Expect<Equal<Comparator<27, 27>, Comparison.Equal>>,
  Expect<Equal<Comparator<-38, -38>, Comparison.Equal>>,
]
