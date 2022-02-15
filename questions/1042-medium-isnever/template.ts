type IsNever<T> = [T] extends [never] ? true : false

type chekc1 = IsNever<never>
