export {};

// 名前空間
// 同一クラスは作れない
// namespaceを使って名前空間を作成する

namespace Japanese {
  export namespace Tokyo {
    // 外の空間からアクセスできるようにするためexportをつける
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
  
}
  
namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('hoge');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('huga');
console.log(meOsaka.name);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);