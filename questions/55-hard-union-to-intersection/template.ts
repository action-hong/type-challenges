type UnionToIntersection<U> = (U extends unknown ? (args: U) => unknown : never) extends (args: infer P) => unknown ? P : never

// interface Animal {
//   name: string
// }

// interface Dog extends Animal {
//   bark(): void
// }

// interface Greyhound extends Dog {
//   kind: string
// }

// function test(fn: (arg: Dog) => Dog): void {
// }

// declare function g(arg: Animal): Greyhound

// test(g)
