import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CamelCase1<'foobar'>, 'foobar'>>,
  Expect<Equal<CamelCase1<'FOOBAR'>, 'foobar'>>,
  Expect<Equal<CamelCase1<'foo_bar'>, 'fooBar'>>,
  Expect<Equal<CamelCase1<'foo_bar_hello_world'>, 'fooBarHelloWorld'>>,
  Expect<Equal<CamelCase1<'HELLO_WORLD_WITH_TYPES'>, 'helloWorldWithTypes'>>,
  Expect<Equal<CamelCase1<''>, ''>>,
]
