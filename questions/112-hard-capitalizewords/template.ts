type SEG = ' ' | '.' | ','

type Alphabet = {
  'a': 'A'
  'b': 'B'
  'c': 'C'
  'd': 'D'
  'e': 'E'
  'f': 'F'
  'g': 'G'
  'h': 'H'
  'i': 'I'
  'j': 'J'
  'k': 'K'
  'l': 'L'
  'm': 'M'
  'n': 'N'
  'o': 'O'
  'p': 'P'
  'q': 'Q'
  'r': 'R'
  's': 'S'
  't': 'T'
  'u': 'U'
  'v': 'V'
  'w': 'W'
  'x': 'X'
  'y': 'Y'
  'z': 'Z'
}

type UpperFirst<T> = T extends keyof Alphabet ? Alphabet[T] : T

type _CapitalizeWords<S extends string, R extends string = ''> =
  S extends `${infer W}${infer F}${infer Rest}`
    ? W extends SEG
      ? _CapitalizeWords<Rest, `${R}${W}${UpperFirst<F>}`>
      : _CapitalizeWords<`${F}${Rest}`, `${R}${W}`>
    : `${R}${S}`

// 先对第一个字母大写
// type CapitalizeWords<S extends string> = _CapitalizeWords<Capitalize<S>>

type CapitalizeWords<S extends string, B extends boolean = true, R extends string = ''>
  = S extends `${infer First}${infer Rest}`
    ? First extends SEG
      ? CapitalizeWords<Rest, true, `${R}${First}`>
      : B extends true
        ? CapitalizeWords<Rest, false, `${R}${Uppercase<First>}`>
        : CapitalizeWords<Rest, false, `${R}${First}`>
    : R
