import { Equal, Expect } from '@type-challenges/utils'

enum Comparison {
  Greater,
  Equal,
  Lower,
}

type _Digit = {
  zero: boolean
  prev?: any
}

type _0 = {
  zero: true
}

type IsZero<T extends _Digit> = T['zero']
type Next<P extends _Digit> = {
  zero: false
  prev: P
}
type Prev<P extends _Digit> = P['prev']

type _1 = Next<_0>
type _2 = Next<_1>
type _3 = Next<_2>
type _4 = Next<_3>
type _5 = Next<_4>
type _6 = Next<_5>
type _7 = Next<_6>
type _8 = Next<_7>
type _9 = Next<_8>

type _Digits = [_0, _1, _2, _3, _4, _5, _6, _7, _8, _9]
type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type ConvertDigit<T extends Digit> = _Digits[T]
type ConvertDigitString<T extends `${Digit}`> = _Digits[T]

// compareDigit
type CompareDigit<A extends _Digit, B extends _Digit> =
  IsZero<A> extends true
    ? IsZero<B> extends true
      ? Comparison.Equal
      : Comparison.Lower
    : IsZero<B> extends true
      ? Comparison.Greater
      : CompareDigit<Prev<A>, Prev<B>>

type NumberLike = string
type IsNegetive<A extends NumberLike> = A extends `-${any}` ? true : false

type testIsNegative1 = IsNegetive<'-1'>
type testIsNegative2 = IsNegetive<'1'>

type MyAbsolute<A extends NumberLike> = A extends `-${infer X}` ? X : A
type IsEmpty<T extends string> = T extends '' ? true : false
type FirstDigit<A extends NumberLike> =
  A extends `${infer First}${Digit}${any}`
    ? First extends `${Digit}`
      ? First
      : A extends `${Digit}`
        ? A
        : never
    : never

type RestDigit<A extends NumberLike>
 = A extends `${Digit}${infer Rest}`
   ? Rest
   : never

// 按照第一位比下去
type CompareByAbsoluteDigits<A extends NumberLike, B extends NumberLike> =
  IsEmpty<A> extends true
    ? IsEmpty<B> extends true
      ? Comparison.Equal
      : Comparison.Lower
    : IsEmpty<B> extends true
      ? Comparison.Greater
      : CompareDigit<ConvertDigitString<FirstDigit<A>>, ConvertDigitString<FirstDigit<B>>> extends Comparison.Equal
        ? CompareByAbsoluteDigits<RestDigit<A>, RestDigit<B>>
        : CompareDigit<ConvertDigitString<FirstDigit<A>>, ConvertDigitString<FirstDigit<B>>>

type CompareByDigits<A extends NumberLike, B extends NumberLike> =
  IsNegetive<A> extends true
    ? IsNegetive<B> extends true
      ? CompareByAbsoluteDigits<MyAbsolute<B>, MyAbsolute<A>>
      : Comparison.Lower
    : IsNegetive<B> extends true
      ? Comparison.Greater
      : CompareByAbsoluteDigits<A, B>

type Comparator<A extends number, B extends number> =
  Equal<A, B> extends true
    ? Comparison.Equal
    : CompareByDigits<`${A}`, `${B}`>
