
type LastIndexOf<T extends unknown[], U> =
  T extends [...infer Rest, infer Tail]
    ? Tail extends U
      ? Rest['length']
      : LastIndexOf<Rest, U>
    : -1
