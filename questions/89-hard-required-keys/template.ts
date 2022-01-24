type RequiredKeys<T> = keyof {
  [K in keyof T as T[K] extends Required<T>[K] ? K : never]: 1
}
