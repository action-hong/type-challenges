type LastIndexOf<T extends unknown[], U> =
  T extends [...infer Rest, infer Tail]
    ? U extends Tail
      ? Rest['length'] : LastIndexOf<Rest, U>
    : -1
