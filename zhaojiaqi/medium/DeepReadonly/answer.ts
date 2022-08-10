/* eslint-disable @typescript-eslint/ban-types */
export {};

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Function
    ? T[P]
    : T[P] extends Object
    ? DeepReadonly<T[P]>
    : T[P];
};

// 不知道为什么这么写，查了资料没有得到想要的答案
type DeepReadonly2<T> = {
  readonly [K in keyof T]: keyof T[K] extends never ? T[K] : DeepReadonly2<T[K]>;
};
