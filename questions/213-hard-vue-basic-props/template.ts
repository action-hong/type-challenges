// type ToUnion<T> = T extends any[] ? T[number] : T

type ToUnion<T> =
  T extends Array<infer A> //
    ? ToUnion<A>
    : T extends () => infer A
      ? A
      : T extends abstract new (...args: any) => any
        ? InstanceType<T>
        : any

type Props<T> = {
  [K in keyof T]: T[K] extends { type: infer U } ? ToUnion<U> : ToUnion<T[K]>
}

declare function VueBasicProps<P, D, C, M>(options: {
  props: P
  data: (this: Props<P>) => D
  computed: ThisType<P & D> & C
  methods: ThisType<Props<P> & D & { [K in keyof C]: C[K] extends (...args: any) => infer R ? R: never } & M> & M
}): any
