export {};

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type TupleToObject<T extends readonly any[]> = any;

// resolve
// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
type result = TupleToObject<typeof tuple>;
