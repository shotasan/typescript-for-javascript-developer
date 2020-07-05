export {};

// 抽象メソッドは抽象クラス内でしか定義できない
// 継承先のクラスで柱梁クラスで定義されている抽象メソッドを実装していないとエラーになる

abstract class Animal {
  abstract cry(): string;

  // 抽象クラス内でも通常のメソッドは定義できる
  hoge() {
    return 'hogehoge';
  }
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

class Tiger extends Animal {
  cry() {
    return 'grrr';
  }
}

// 抽象クラスはインスタンス化できない
// let animal = new Animal();

// 抽象クラスのメソッドを呼び出す
let lion = new Lion();
console.log(lion.hoge());