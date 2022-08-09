export {};

type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]

// reslove
type Unshift<T, U> = any;
