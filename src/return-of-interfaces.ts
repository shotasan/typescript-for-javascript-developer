export {};

// 複数箇所に分散する機能を一箇所にまとめる
// すべてのメソッドが抽象メソッドのようなもの
// インターフェースは多重継承のようなことができる（正確には実装という）

class Mahoutsukai {}
class Souryo {}

class Taro extends Mahoutsukai {}

interface Kenja {
  // シグネチャ
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

// implements → 実装
// 2つのインターフェースを実装する
class Jiro implements Kenja, Senshi{
  ionazun(): void {
    console.log('ionazun');
  }

  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();