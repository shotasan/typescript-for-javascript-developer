export {};

// ユニオン型（順序の制限はできない）
let profile: (string | number)[] = ['ham', 43];
profile = [43, 'ham'];

// タプル型（順序の制限が可能）
// 型推奨の対象外
let profile2: [string, number] = ['ham', 43];
// エラーになる
// profile2 = [43, 'ham'];
