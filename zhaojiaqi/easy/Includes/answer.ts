export {};

type isEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
  ? true
  : false;

type isEqual2<X, Y> = X extends Y ? (Y extends X ? true : false) : false;

type Includes<T extends readonly any[], U> = T extends [infer A1, ...infer A2]
  ? isEqual<A1, U> extends true
    ? true
    : Includes<A2, U>
  : false;
