// type _Curry<F extends (...args: any) => any>
//   = (...args: any)

// [1, 2, 3] => [1] | [1, 2] | [1, 2, 3]

type Tuple = unknown[]

type ShiftArray<Shifted extends Tuple, T extends Tuple>
 = T extends [
   ...Shifted,
   ...infer Rest
 ] ? Rest : never

type Slices<T extends Tuple> = T extends [] ? never : T | Slices<Pop<T>>

type OverloadsByArgs<
  Args extends Tuple,
  FullArgs extends Tuple,
  ReturnValue
> = Args extends unknown
  ? CurriedWithFixArgs<Args, ShiftArray<Args, FullArgs>, ReturnValue>
  : never

  type Curried<Args extends Tuple, ReturnValue> = Args extends []
    ? ReturnValue
    : UnionToIntersection<OverloadsByArgs<Slices<Args>, Args, ReturnValue>>

type CurriedWithFixArgs<
  Args extends Tuple,
  RestArgs extends Tuple,
  ReturnValue
> = (...args: Args) => Curried<RestArgs, ReturnValue>

declare function DynamicParamsCurrying<Args extends unknown[], ReturnValue>(fn: (...args: Args) => ReturnValue): Curried<Args, ReturnValue>

const curried1 = DynamicParamsCurrying((a: string, b: number, c: boolean) => true)

const c2 = curried1(1)
