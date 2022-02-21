type StringToArray<S extends string, R extends string[] = []>
  = S extends `${infer F}${infer Rest}`
    ? StringToArray<Rest, [F, ...R]>
    : R

type LengthOfString<S extends string> = StringToArray<S>['length']
