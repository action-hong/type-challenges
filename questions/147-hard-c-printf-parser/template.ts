type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat<S extends string, R extends string[] = []> =
  S extends `${infer F}${infer C}${infer Rest}`
    ? F extends '%'
      ? C extends keyof ControlsMap
        ? ParsePrintFormat<Rest, [...R, ControlsMap[C]]>
        : ParsePrintFormat<Rest, R>
      : ParsePrintFormat<`${C}${Rest}`, R>
    : R
