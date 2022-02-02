// type IsAny<T> = [{}, T] extends [T, null] ? true : false

type IsAny<T> = boolean extends (T extends 1 ? true : false) ? true : false
type _IsAny<T> = T extends 1 ? true : false

type a2331 = _IsAny<never>
type a2332 = _IsAny<{}>
type a2333 = _IsAny<any>

type a2334 = boolean extends never ? true : false
type a2335 = boolean extends false ? true : false
type a2336 = boolean extends false ? true : false
