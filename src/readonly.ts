export {};

class VisaCard {
  // 省略記法
  // readonlyをつけた場合はpublicと推測されるのでpublicを明示シなくてもよい
  // がpublicを書いておいたほうが安全(publicを書かなくてもよいのはreadonlyの時だけ)
  constructor(public readonly owner: string) {}

  // 通常の書き方
  // constructor(owner: string) {
  //   this.owner = owner;
  // }
}

let myVisaCard = new VisaCard('hoge');
console.log(myVisaCard.owner);

// readonlyなので値を変更できない
// myVisaCard.owner = 'huga'