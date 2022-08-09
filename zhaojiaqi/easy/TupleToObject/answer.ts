export {};

// ts 内置了 PropertyKey 这个类型
// declare type PropertyKey = string | number | symbol;

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};
