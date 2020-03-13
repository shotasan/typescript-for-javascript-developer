export {};

// 規制がゆるい
let profile1: object = { name: 'Ham' };
profile1 = { birthYear: 1976 };

// プロパティに対してもアノテーションが可能
let profile2: { name: string } = { name: 'Ham' };
// プロパティが異なるとエラーになる
// profile2 = { birthYear: 1976 };
// profile2 = { name: 1976 };
profile2 = { name: 'test' };
