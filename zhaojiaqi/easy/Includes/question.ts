export {};

// expected to be `false`
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>;

// resolve
type Includes<T extends readonly any[], U> = any;
