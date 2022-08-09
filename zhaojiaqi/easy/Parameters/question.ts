export {};

const foo = (arg1: string, arg2: number): void => {};

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]

// resolve
type MyParameters<T> = any;
