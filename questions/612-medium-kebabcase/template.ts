type KebabCase<S extends string, isFirst extends boolean = true> =
  S extends `${infer F}${infer Rest}`
    ? F extends Alphabet[keyof Alphabet]
      ? `${isFirst extends true ? '' : '-'}${Lowercase<F>}${KebabCase<Rest, false>}`
      : `${F}${KebabCase<Rest, false>}`
    : S
    // type KebabCase<S extends string> = S extends `${infer Start}${infer End}`
    //   ? End extends Uncapitalize<End>
    //     ? Uncapitalize<`${Start}${KebabCase<End>}`>
    //     : Uncapitalize<`${Start}-${KebabCase<End>}`>
    //   : S
