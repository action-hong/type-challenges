
declare function SimpleVue<D, C, M>(options: {
  data: () => D
  computed: ThisType<D> & C
  methods: ThisType<D & M & { [K in keyof C]: C[K] extends () => infer R ? R : never }> & M
}): D & M & { [K in keyof C]: C[K] extends () => infer R ? R : never }
