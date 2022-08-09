export {};

type Result = MyExclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'

// resolve
type MyExclude<T, U> = any;
