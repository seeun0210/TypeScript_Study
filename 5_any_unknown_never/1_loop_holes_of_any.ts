/**
 * Loopholes of Any
 */
let number: number;
number = 10;

// number.toUpperCase()

// (number as any).toUpperCase();
//실행할 수 있는 것 처럼 보이지만 런타임시 에러가 발생한다

const multiply2 = (x: number, y: number) => {
  return x * y;
};

let args1: any = "코드팩토리";
let args2: any = true;

multiply2(args1, args2);
// multiply2("코드팩토리", true);

let iu: any = { name: "아이유", age: 30 };
// iu
//어떤 속성이 있는지 알 수 없음

const callbackRunner = (x: number, y: number, callback: any) => {
  return callback(x, y);
};
const callback = (x: number, y: number) => {
  return x * y;
};
console.log(callbackRunner(5, 4, callback));
//20이 정상적으로 출려됨
//그런데 callback(x)를 넣어도 결과값은 NaN이 되지만 에러가 있다고 알려주지 않는다.
//any의 위험성!! => 리팩토링시 매우 위험해진다
