export {};

class Animal {
  constructor(public name: String){}

  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  public speed: number

  // 親の次に子の初期化が実行される
  // それぞれのメンバーの初期化をどこで行っているか明示したほうが良い
  constructor(name: String, speed: number) {
    super(name);

    this.speed = speed;
  }

  run(): string {
    // 親クラスのメソッドを実行
    const parenMessage = super.run();
    console.log({parenMessage});
    return `${super.run()} ${this.speed}km/h`;
  }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 80).run());