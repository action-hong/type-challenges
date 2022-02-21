type Split<S extends string, SEP extends string, R extends String[] = []> =
  S extends ''
    ? R
    : S extends `${infer F}${SEP}${infer Rest}`
      ? Split<Rest, SEP, [...R, F]>
      : [...R, S]
