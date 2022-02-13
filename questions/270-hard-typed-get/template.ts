
type _Get<T, R extends any[] = []> =
  R extends []
    ? T : R extends [infer K, ...infer Rest]
      ? K extends keyof T
        ? _Get<T[K], Rest>
        : never
      : never

type Head<K extends String> = K extends `${infer H}.${infer _}` ? H : K
type Rest<K extends String> = K extends `${infer _}.${infer R}` ? R : ''

// type Get<T, K extends string> = _Get<T, Split<K, '.'>>
type Get<T, K extends string> =
  Head<K> extends keyof T
    ? Get<T[Head<K>], Rest<K>>
    : K extends Rest<K>
      ? T
      : never
