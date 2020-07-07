export {};

// 静的メンバーについて
// いつも決まった値になる、newをしなくてもアクセスできるもの
// staticをつけると静的メンバーになる

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'hoge';
  static lastName: string = 'huga';

  static work() {
    return `Hey, guys! This is ${this.firstName} Are you interested in TypeScript? Lets dive into Yeeee`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

// 静的メンバーへのアクセス
console.log(Me.isProgrammer);
console.log(Me.work());