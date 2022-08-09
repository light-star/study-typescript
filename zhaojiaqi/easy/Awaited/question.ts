export {};

type ExampleType = Promise<string>;

type Result = MyAwaited<ExampleType>; // string

// resolve
type MyAwaited<T> = any;
