export {};

class Person {
  // アクセス修飾子
  // デフォルトはpublic書かなくてもOK
  // protectedは派生クラスからもアクセス可能
  public name: string;
  // private age: number;
  protected age: number;
  protected nationality: string;

  // constructorはreturnが無いため型定義は必要ない
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Person("taro", 30, "Japan");
// console.log(taro.profile());
console.log(taro.name);
// privateはインスタンスからは呼べない
// console.log(taro.age);