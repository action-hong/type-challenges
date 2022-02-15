type NumberLike = string | number | bigint

type Or<A extends boolean, B extends boolean>
  = A extends true ? A : B

type CoalesceToString<T extends NumberLike> = `${T}`

type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

type DigitAddTable = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
type DigitSubTable = ['0', '0', '1', '2', '3', '4', '5', '6', '7', '8']

// 加1,减1
// type AddOneDigit<T extends Digit>
//   = {
//     result: DigitAddTable[T]
//     carry: T extends '9' ? true : false
//   }

// type SubOneDigit<T extends Digit>
//   = DigitSubTable[T]

type SubOneFromDigit<digit extends Digit> =
  digit extends '1' ? '0'
    : digit extends '2' ? '1'
      : digit extends '3' ? '2'
        : digit extends '4' ? '3'
          : digit extends '5' ? '4'
            : digit extends '6' ? '5'
              : digit extends '7' ? '6'
                : digit extends '8' ? '7'
                  : digit extends '9' ? '8'
                    : digit extends '10' ? '9'
                      : never

type AddOneToDigit<digit extends Digit> =
  digit extends '0' ? { result: '1'; carry: false}
    : digit extends '1' ? { result: '2'; carry: false }
      : digit extends '2' ? { result: '3'; carry: false }
        : digit extends '3' ? { result: '4'; carry: false }
          : digit extends '4' ? { result: '5'; carry: false }
            : digit extends '5' ? { result: '6'; carry: false }
              : digit extends '6' ? { result: '7'; carry: false }
                : digit extends '7' ? { result: '8'; carry: false }
                  : digit extends '8' ? { result: '9'; carry: false }
                    : digit extends '9' ? { result: '0'; carry: true }
                      : never

type SumDigit<A extends Digit, B extends boolean> = {
  result: A
  carry: B
}

// 两个单的个数相加
type SumDigitOp<A extends Digit, B extends Digit, CarryIn extends boolean = false, CarryOut extends boolean = false>
  = CarryIn extends true
    ? AddOneToDigit<A> extends SumDigit<infer LeftFromIncreament, infer CarryFromIncreament>
      ? SumDigitOp<LeftFromIncreament, B, false, Or<CarryFromIncreament, CarryOut>>
      : never
    : B extends '0'
      ? { result: A; carry: CarryOut }
      : AddOneToDigit<A> extends SumDigit<infer LeftFromIncreament, infer CarryFromIncreament>
        ? SumDigitOp<LeftFromIncreament, SubOneFromDigit<B>, false, Or<CarryFromIncreament, CarryOut>>
        : never

type test472 = SumDigitOp<'9', '9', false>

type RightMostDigitResult<rest extends string, digit extends Digit> = { rest: rest; digit: digit }

type RightMostDigit<s extends string> =
  s extends `${infer rest}${Digit}`
    ? s extends `${rest}${infer digit}`
      ? { rest: rest; digit: digit }
      : never
    : never

type SumStrings<L extends string, R extends string, Result extends string = '', Carry extends boolean = false>
    = '' extends L
      ? '' extends R
        // 左右都是空
        ? Carry extends true ? `1${Result}` : Result
        // 左为空 右有值
        // 有进位, 变成1, 然后把进位去掉
        : Carry extends true ? SumStrings<'1', R, Result, false> : `${R}${Result}`
      : '' extends R
        // 左有值, 右为空
        ? Carry extends true ? SumStrings<'1', L, Result, false> : `${L}${Result}`
        // 左右都有值
        : RightMostDigit<L> extends RightMostDigitResult<infer LRest, infer LDigit>
          ? RightMostDigit<R> extends RightMostDigitResult<infer RRest, infer RDigit>
            ? SumDigitOp<LDigit, RDigit, Carry> extends SumDigit<infer SumResult, infer SumCarry>
              ? SumStrings<LRest, RRest, `${SumResult}${Result}`, SumCarry>
              : never
            : never
          : never

type Sum<left extends string | number | bigint, right extends string | number | bigint> =
  SumStrings<CoalesceToString<left>, CoalesceToString<right>>

type test473 = SumStrings<'', '8', '77', true>

type CheckNever<T> = [T] extends [never] ? true : false

type c1 = CheckNever<never>
