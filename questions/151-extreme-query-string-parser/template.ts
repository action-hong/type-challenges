// type MyMerge<A, B> = {
//   [K in keyof A | keyof B]: K extends keyof A
//     ? K extends keyof B
//       ? Equal<A[K], B[K]> extends true ? A[K] : [A[K], B[K]]
//       : A[K]
//     : K extends keyof B
//       ? B[K]
//       : never
// }

// type ParseQueryString<S extends string> = S extends ''
//   ? {}
//   : S extends `${infer K}=${infer V}&${infer Rest}`
//     ? MyMerge<{[P in K]: V}, ParseQueryString<Rest>>
//     : S extends `${infer K}&${infer Rest}`
//       ? MyMerge<{[P in K]: true}, ParseQueryString<Rest>>
//       : S extends `${infer K}=${infer V}`
//         ? { [P in K]: V }
//         : S extends `${infer K}`
//           ? { [P in K]: true }
//           : {}
// type m151 = ParseQueryString<'k1=v1&k1=v1'>

// type Result<V1, V2> = V1 extends V2 ? V1 : V1 extends [...infer O] ? [...O, V2] : [V1, V2]

// type MergeResult<T, K extends string, V, R = T & { [key in K]: V }> = K extends keyof T
//   ? { [K1 in keyof T]: K extends K1 ? Result<T[K1], V> : T[K1] }
//   : { [K2 in keyof R]: R[K2] }

// type ParseKV<S extends string, R> = S extends `${infer K}=${infer V}` ? MergeResult<R, K, V extends '' ? true : V> : '' extends S ? R : MergeResult<R, S, true>

// type ParseQueryString<S extends string, R = {}> = S extends `${infer F}&${infer O}` ? ParseQueryString<O, ParseKV<F, R>> : ParseKV<S, R>

// 思路，分成两步
// 先分&，再分k=v

type Result<A, B> = A extends B ? A : A extends [...infer O] ? [...O, B]: [A, B]

type MergeResult<T, K extends string, V, R = T & { [key in K]: V }> =
  K extends keyof T
    ? {
      [K1 in keyof T]: Result<T[K1], V>
    }
    : {
      [K2 in keyof R]: R[K2]
    }

type ParseKV<S extends string, R> =
  S extends `${infer K}=${infer V}`
    ? MergeResult<R, K, V extends '' ? true : V>
    : '' extends S
      ? R
      : MergeResult<R, S, true>

type ParseQueryString<S extends string, R = {}> =
  S extends `${infer F}&${infer O}`
    ? ParseQueryString<O, ParseKV<F, R>>
    : ParseKV<S, R>
