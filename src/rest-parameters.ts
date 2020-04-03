export {};

const reducer = (accumulator: number, currentValue: number) => {
  console.log({accumulator, currentValue});
  return accumulator + currentValue;
}
// レスとパラメーター（可変長引数）
const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

console.log(sum(1,2,3,4,5));

[1, 2, 3, 4].reduce(reducer);