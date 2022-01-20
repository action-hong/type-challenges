type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [KK in K]: T[KK]
}
