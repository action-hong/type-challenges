type String2Array<T extends string, R extends any[] = []> =
  T extends `${infer F}${infer G}` ? [F, ...String2Array<G>] : R

type hello = String2Array<'hello'>

type _Drop<S, D extends string[]> =
S extends `${infer F}${infer Rest}`
  ? F extends D[number]
    ? `${_Drop<Rest, D>}`
    : `${F}${_Drop<Rest, D>}`
  : S
type DropString<S, R extends string> = _Drop<S, String2Array<R>>

type a = DropString<'butter fly!', ' '>
