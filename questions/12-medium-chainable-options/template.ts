type Chainable<T = {}> = {
  option<K extends keyof any, V>(key: K, value: V): Chainable<T & Record<K, V>>
  get(): T
}
