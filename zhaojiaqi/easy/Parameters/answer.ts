export {};

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer A) => any
  ? A
  : never;
