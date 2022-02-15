type PopString<S extends string> = S extends `${any}${infer Rest}` ? Rest : ''

type LengthOfString1<S extends string, T extends any[] = []> =
  S extends '' ? T['length']
    : LengthOfString1<PopString<S>, [...T, 0]>
