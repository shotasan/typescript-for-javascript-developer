export {};

enum Months {
  January = 1,
  Fabruary,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
console.log(Months.Fabruary);
console.log(Months.December);

enum COLOR {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#0000000'
}

let green = COLOR.GREEN;
console.log(green);
// 存在しない場合はエラーになる
// COLOR.YELLOW;

// 追加する
enum COLOR {
  PINK = '#FFFF00'
  // 初期化をしないとエラーになる
  // GREY
}
COLOR.PINK;
