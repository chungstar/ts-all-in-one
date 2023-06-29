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

<div id = "head"></div>

const head = document.querySelector('#head');
if (head) {
  console.log(head);
}