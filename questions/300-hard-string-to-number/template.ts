type ToNumber<S extends string, T extends any[] = []> =
  S extends `${T['length']}`
    ? T['length']
    : ToNumber<S, [...T, 0]>
