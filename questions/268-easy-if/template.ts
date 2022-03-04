// type If<C extends boolean, T, F> = C extends true ? T : F
type If<C extends true | false, T, F> = C extends true ? T : F
