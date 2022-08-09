export {};

type Result = Push<[1, 2], '3'>; // [1, 2, '3']

// resolve
type Push<T, U> = any;
