type LengthOfString<S extends string, T extends any[] = []> =
  S extends ''
    ? T['length']
    : LengthOfString<PopString<S>, [...T, 0]>
