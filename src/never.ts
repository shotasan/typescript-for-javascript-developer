export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
// neverは値を返さないので値を代入できない
// let bar: never = undefined
// never型の関数だけは代入可能
let bar: never = error('only me!');
