import { Equal, Expect } from '@type-challenges/utils'

interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: boolean
}

// 两个去比较
type a = {
  readonly title: string
}

type b = {
  title: string
}

// 这样可以比较出来
type result = Equal<a, b>

type t1<T> = {
  [K in keyof T]: 
}

// 思路就是真的每个K，构建一个 { readonly K: value } 和 Pick<源对象, K>来比较，false去干掉 用never表示
type GetReadonlyKeys<T> = keyof {
  [K in keyof T as Equal<{ readonly [KK in K]: T[KK] }, Pick<T, K>> extends true ? K : never]: K
}


type cases = [
  Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
  Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo2>>>,
]
