type CamelSep =
  '_'

type _CamelCase<S extends string, R extends string = ''>
  = S extends `${infer W}${infer F}${infer REST}`
    ? W extends CamelSep
      ? _CamelCase<REST, `${R}${UpperFirst<F>}`>
      : _CamelCase<`${F}${REST}`, `${R}${Lowercase<W>}`>
    : `${R}${Lowercase<S>}`

// 思路：
// 先把首字母小写
// 然后向后递归, 发现下划线，干掉，同时大写下划线后面哪个字母，继续
// 没有小划线，就一直转化小写
// type CamelCase1<S extends string> = _CamelCase<Uncapitalize<S>>

// 用一个变量来判断下一个要大写，还是小写
type CamelCase1<S extends string, B extends boolean = false, R extends string = ''>
  = S extends `${infer First}${infer Rest}`
    ? First extends '_'
      ? CamelCase1<Rest, true, R>
      : B extends true
        ? CamelCase1<Rest, false, `${R}${Uppercase<First>}`>
        : CamelCase1<Rest, false, `${R}${Lowercase<First>}`>
    : R
