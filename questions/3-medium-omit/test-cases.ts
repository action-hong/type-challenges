import { Equal, Expect } from '@type-challenges/utils'

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}
type d = keyof Todo
type c = Exclude<Todo, 'description' | 'title'>
// type MyOmit<A, B> = {
//   [K in Exclude<keyof A, B>]: A[K]
// }
type MyOmit<A, B> = Pick<A, Exclude<keyof A, B>>
type a = MyOmit<Todo, 'description'>

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>
]
