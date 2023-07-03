"use strict";
// const a: string = '5';
// // 변수 이름 뒤, 소문자여야함.
// const b: number = 5;
// const c: boolean = true;
// const d: undefined = undefined;
// const e: null = null;
// const f: any = 123; //모든 타입, 하지만 any를 쓰면 타입스크립트의 의미가 없음
// const f: symbol = Symbol.for('abc');
// const g: bigint = 1000000n;
class B {
}
class C extends B {
}
new C().a;
new C().b;
