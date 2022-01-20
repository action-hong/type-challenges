type Pop<T extends any[]> =
  T extends [...F: infer R, l: any]
    ? R : never
