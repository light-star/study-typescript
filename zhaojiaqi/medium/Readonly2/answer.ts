export {};

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
type MyExclude<T, U> = T extends U ? never : T;

type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>;

type MyReadonly2<T, K extends keyof T = keyof T> = MyReadonly<MyPick<T, K>> & MyOmit<T, K>;
