export {};

class Person {
  name: string;
  age: number;

  // constructorはreturnが無いため型定義は必要ない
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`
  }
}

let taro = new Person("taro", 30);
console.log(taro.profile());