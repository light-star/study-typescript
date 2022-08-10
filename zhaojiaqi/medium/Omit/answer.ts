export {};

type MyExclude<T, U> = T extends U ? never : T;

type MyPick<T, U extends keyof T> = {
  [P in U]: T[P];
};

type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>;
