type _curry<F> =
F extends (...args: any) => any ?
  Parameters<F> extends []
    ? ReturnType<F>
    : (value: First<Parameters<F>>) => _curry<(...rest: Shift<Parameters<F>>) => ReturnType<F>>
  :never

declare function Currying<F>(fn: F): _curry<F>
