import { Equal } from '@type-challenges/utils'

enum Comparison {
  Greater,
  Equal,
  Lower,
}

type Comparator<A extends number, B extends number> =
  Equal<A, B> extends true
    ? Comparison.Equal
    : Comparison.Greater
