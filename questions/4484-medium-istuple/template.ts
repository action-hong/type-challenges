type IsTuple<T> =
  T extends readonly any[]
    ? number extends T['length']
      ? false
      : true
    : false

// tuple的长度是固定的, 例如 [number] 长度是1
// 则 number extends 1 为假 取true
