/**
 * Casting
 *
 * TS에서 Casting을 하면 JS에서는 적용이 안된다
 */
let codefactory = "code factory";
let testNumber = 3;

console.log(codefactory.toUpperCase());
// console.log(testNumber.toUpperCase());

let sampleNumber: any = 5;
// console.log(sampleNumber.toUpperCase());
//코드 상에서는 에러가 안나는데, 실행하면 에러가 남
let stringVar = sampleNumber as string;
//캐스팅을 할 경우 강제로 실제 그 타입이 아니더라도 그 타입이라고 가정을 할 수 있게 됨
//=> 마음대로 막하면 절대로 안되겠지
console.log(typeof (sampleNumber as string)); //number라고 나옴
//우리가 백날 string이라고 캐스팅 해봤자 number임

let number = 5;
console.log((number as any).toUpperCase());
//이렇게 number as any라고 캐스팅을 해버리면 원래는 존재하지 않는 toUpperCase에 대한 에러를 내던 기능을 잃게 됨
//실제 JS코드가 실행될 때 실제 타입과 코드를 쓸 때 인식하는 타입을 다르게 가져가 버릴 수 있음
//**그래서 우리가 실제로 as를 쓸 때에는 보통 상속 상에서 더 구채화 된 값으로 캐스팅을 할 때 as를 사용함!!
