export {};

type Result = Concat<[1], [2]>; // expected to be [1, 2]

// resolve
type Concat<T, U> = any;
