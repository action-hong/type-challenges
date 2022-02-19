import { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}

type T1 = {
  age: number
  name: string
}

type T2 = {
  gender: number
  address: string
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<T1, T2>, {
    age: number
    name: string
    gender: number
    address: string
  }>>
]
