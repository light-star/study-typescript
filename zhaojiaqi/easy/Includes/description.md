- isEqual https://github.com/microsoft/TypeScript/issues/27024

- 利用了 ts 的延迟条件类型，延迟条件类型的可分配规则依赖于 ts 内部的 `isTypeIdenticalTo`，如果两个条件类型具有相同的类型约束，并且两个条件的真和假分支是相同类型，则为可分配的，否则不可分配。

- 可不可分配就说 extends 是否 true，或者说 string 可以分配可以 string，但不能分配给 number，就说类型匹不匹配的意思

- 但是这个不能判断交叉类型，交叉类型得用其他方法，比如 `isEqual2`
