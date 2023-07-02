
// const a: string = '5';
// // 변수 이름 뒤, 소문자여야함.
// const b: number = 5;
// const c: boolean = true;
// const d: undefined = undefined;
// const e: null = null;
// const f: any = 123; //모든 타입, 하지만 any를 쓰면 타입스크립트의 의미가 없음
// const f: symbol = Symbol.for('abc');
// const g: bigint = 1000000n;


// function add(x: number, y: number) { return x + y } //타입을 붙여주는것을 타이핑이라고 함
// //리턴값은 매개변수 자리 바로 뒤
// const result = add(1,5);

// const add: (x: number, y: number) => number = (x, y) => x + y;
// 타입부분을 지웠을때도 자바스크립트적으론 말이 되야함.

// type Add = (x: number, y: number) => number;
// const add: Add = (x, y) => x + y;
// type으로 타입을 선언하는 방식 타입 애일리어스 (type alias)

// interface Add{
//     (x: number, y:number): number;
// }
// const add: Add = (x, y) => x + y;
// 인터페이스 방식

// const arr: string[] = ['123', '456']
// const arr2: number[] = [123, 456]
// const arr2: Array<number> = [123, 456]
// 배열; 꺽쇄, 제네릭
// const arr3: [number,number,string] = [123, 456,'hello'];
// 튜플;
// const b: 5 = 5;
// 이런 식으로 정확한 원시값 타입도 존재

// const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };

// let aa = 123;
// aa = 'hello' as unknown as number;

// const head:Element = document.querySelector('#head')!;
// console.log(head);
//+:Element, 태그

// <div id = "head"></div>

// const head = document.querySelector('#head');
// if (head) {
//   console.log(head);
// }


// type World = "world"|"hell";
// const a: World = 'world';

// const b = `hello ${a}`;

// type Greeting = `hello ${World}`;
// const c: Greeting = ''



// const enum EDirection {
//     Up,
//     Down,
//     Left,
//     Right,
//   }

//   const ODirection = {
//     Up: 0,
//     Down: 1,
//     Left: 2,
//     Right: 3,
//   } as const;

//   EDirection.Up;
//   EDirection.Left;


//   function walk(dir:EDirection){}

//   const obj = {a:'123',b:'hello',c:'world'}as const;
//   type Key = typeof obj[keyof typeof obj];

//   (enum member) EDirection.Up = 0

//   ODirection.Up;

//   (property) Up: 0

//   // Using the enum as a parameter
//   function walk(dir: EDirection) {}

//   // It requires an extra line to pull out the keys
//   type Direction = typeof ODirection[keyof typeof ODirection];
//   function run(dir: Direction) {}

//   walk(EDirection.Left);
//   run(ODirection.Right);

// type A = { a: string };
// const a: A = { a: 'hello' };

// interface B { a: string }
// const b: B = { a: 'hello' };


// function add(x: string | number, y: string | number): string | number { return x + y }
// /// union
// const result: string | number = add(1, 2);

// add('1', '2')
// add(1, '2')

// type A = {
//     a: string;
// }
// type B = {
//     b: string;
// }

// const aa: A | B = { a: 'hello', b: 'world' };
// //둘 중에 하나의 속성만 있어도 된다. | 유니온
// const bb: A & B = { a: 'hello', b: 'world' };
// //모든 속성이 다 있어야 한다. & 인터섹션 intersection
// //둘 다 성립한다!!!

// type Animal = {breath: true};
// type Mammal = Animal & {breed: true};
// type Human = Mammal & {think: true};

// interface A{
//     breath: true
// }
// interface B extends A{
//     breed: true
// }
// const b: B = { breath:true, breed: true};

// const zerocho: Human = {breath: true, breed: true, think: true};
// //상속의 개념으로 이해해보자

// //인터페이스는 여러번 선언이 가능함

// type A = {name:string};
// type B = {age:number};

// type AB = A|B;

// type C = {name:string, age:number};// 이쪽이 더 좁은 타입 객체는 상세할 수 록 더 좁음

// const ab: AB = {name: 'chungstar'};

// //const c:C = {name: 'chungstar',age: 29, married: false};//어? 넓은 타입에 좁은 타입을 넣었는데 안되지? 잉여 속성 검사때문임

// const obj = {name: 'chungstar',age: 29, married: false}
// const c:C = obj;


// declare function forEach<T>(arr: T[], callback: (el: T) => undefined): void;
// // declare function forEach<T>(arr: T[], callback: (el: T) => void): void;
// let target: number[] = [];
// forEach([1, 2, 3], el => target.push(el));

// interface A {
//     talk: () => void;
// }
// const a: A = {
//     talk() { return 3; }
// }

//타입 가드

function numOrStr(a: number | string) {
  if (typeof a === 'string') {
    a.split(',');
  } else {
    a.toFixed(1);
  }
}

function numOrNumArr(a: number | number[]) {
  if (Array.isArray(a)) {
    a.slice(1);
  } else {
    a.toFixed(1);
  }
}

// class A{
//     aaa(){}
// }
// class B{
//     bbb(){}
// }
// function aOrB(param: A|B){
//     if(param instanceof A){
//         param.aaa();
//     }
// }
// aOrB(new A());
// aOrB(new B());

// type B = { type: 'b', bbb: string };
// type C = { type: 'c', ccc: string };
// type D = { type: 'd', ddd: string };
// type A = B | C | D;
// function typeCheck(a: A) {
//   if (a.type === 'b') {
//     a.bbb;
//   } else if (a.type === 'c') {
//     a.ccc;
//   } else {
//     a.ddd;
//   }
// }

// interface Cat { meow: number }
// interface Dog { bow: number }
// function catOrDog(a: Cat | Dog): a is Dog {
//     //타입 판별을 직접 만드세요
//   if ((a as Cat).meow) { return false }
//   return true;
// }
// // 타입을 구분해주는 커스텀 함수를 직접 만들 수 있음
// function pet(a:Cat|Dog){
//     if(catOrDog(a)){
//         console.log(a.bow);
//     }
//     if('meow' in a){
//         console.log(a.meow);
//     }
// }

// const cat: Cat | Dog = { meow: 3 }
// if (catOrDog(cat)) {
//     console.log(cat.meow);
// }
// if ('meow' in cat) {
//     console.log(cat.meow);
// }

// const isRejected = (input: PromiseSettledResult<unknown>): input is PromiseRejectedResult => input.status === 'rejected';
// const isFulfilled = <T>(input: PromiseSettledResult<T>): input is PromiseFulfilledResult<T> => input.status === 'fulfilled';

// const promises = await Promise.allSettled([Promise.resolve('a'), Promise.resolve('b')]);
// const errors = promises.filter(isRejected);

// export{};

// const x:{}='hello';
// const y: Object = 'hi'; // {}, Object 모든 타입(null과 undefined 제외)
// const xx:object = 'hi';
// const yy:object = {hello:'world'}; //object 지양, interface, type, class
// const z: unknown = 'hi';

// // unknown = {} | null | undefined
// if(z){
//   z; ///const z: {}
// } else{
//   z; ///const z: unknown
// }

//// 인덱스드 시그니처
//// type A = {a: string, b: string, c: string, d: string};
// type A = {[key: string]:string};
// const aaa: A = { a: 'hello',b: 'world'};

// // 맵드 타입스
// type B = 'Human'|'Mammal'|'Animal';
// type A = {[key in B]:number};
// const aaa: A = { 'Human': 3, 'Mammal': 5, 'Animal': 1243 };