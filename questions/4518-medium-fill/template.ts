// type FArray<T, N extends number, R extends unknown[] = []>
//   = R['length'] extends N
//     ? R
//     : FArray<T, N, [...R, T]>

// type Fill<
//   T extends unknown[],
//   N,
//   Start extends number = 0,
//   End extends number = T['length']
// > = T extends [...infer Head, ...infer Mid, ...infer Tail]
//   ? Head['length'] extends Start
//     ? [...Head, ...Mid]['length'] extends End
//       ? [...Head, ...FArray<N, Mid['length']>, ...Tail]
//       : [...Head, ...FArray<N, [...Mid, ...Tail]['length']>]
//     : T
//   : T

// T > N 则返回false
// type Greater<T extends number, N extends number, TA extends unknown[] = [], NA extends unknown[] = []>
//   = T extends N
//     ? false
//     : TA['length'] extends T
//       ? false
//       : NA['length'] extends N
//         ? true
//         : Greater<T, N, [0, ...TA], [0, ...NA]>

// 思路
// 用一个数组的长度来做标记, 现在遍历几个了
// 先判断 0 - start 这一部分, 不断取数组的第一个数放入数组中(这些不替换)
// 到了start处, 这时候要用替换值了
// 到了end了, 此时候直接返回剩余的数组即可!
// type Fill<
//   T extends unknown[],
//   N,
//   Start extends number = 0,
//   End extends number = T['length'],
//   C extends boolean = false, // start前面的是false, 后面的是true
//   G extends unknown[] = [] // 计数
// >
// = Start extends End
//   ? T
//   : T extends [infer H, ...infer Rest]
//     ? G['length'] extends Start
//       ? [N, ...Fill<Rest, N, Start, End, true, [...G, 1]>]
//       : G['length'] extends End
//         ? T
//         : C extends true
//           ? [N, ...Fill<Rest, N, Start, End, true, [...G, 1]>]
//           : [H, ...Fill<Rest, N, Start, End, false, [...G, 1]>]
//     : []

// 法2
// 类似的方法, 用两个数组分别计算到达start 和end没
// 法1类似用用个变量来表示显示是用哪个数组
type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  SA extends unknown[] = [], // 计数
  EA extends unknown[] = [] // 计数
> = T extends [infer F, ...infer L]
  ? EA['length'] extends End
    ? [F, ...Fill<L, N, Start, End, SA, EA>]
    : SA['length'] extends Start
    // 到底替换的地方了, 开始替换, 注意这里只增加EA的长度
    // 待增加到EA长度为 End时, 则替换完
      ? [N, ...Fill<L, N, Start, End, SA, [...EA, 1]>]
      : [F, ...Fill<L, N, Start, End, [...SA, 1], [...EA, 1]>]
  : []
