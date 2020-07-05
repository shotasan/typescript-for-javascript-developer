export {};

// アクセサー
// getとset

// * owner
  // * 所有者
  // * 初期化時に設定できる
  // * 途中で変更できない
  // * 参照できる
// * secretNumber
  // * 個人番号
  // * 初期化時に設定できる
  // * 途中で変更できる
  // * 参照できない

class MyNumberCard {
  // ゲッターと名前がかぶらないようアンダースコアをつける
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
  this._owner = owner;
    this._secretNumber = secretNumber;
  }

  // メンバー変数ownerを参照するためのメソッド(ゲッター)
  // メンバー変数と同盟だとエラーが表示される
  get owner() {
    return this._owner;
  }

  // メンバー変数secretNumberを変更するためのメソッド（セッター）
  set secretNumber(secretNumbre: number) {
    this._secretNumber = secretNumbre;
  }

  // デバッグ用のメソッド
  debugPrint() {
    return `secretNumber: ${this._secretNumber}`
  }
}

let card = new MyNumberCard('hoge', 1234567890);
// readonlyでエラーになる
// card.owner = 'huga'
console.log(card.debugPrint());

// 値を更新する
card.secretNumber = 1111111111;
console.log(card.debugPrint());

// undefinedが出力される
console.log(card.secretNumber);
