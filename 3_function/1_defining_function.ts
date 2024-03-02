/**
 * Defining Function
 */
// function printName(name){
//     console.log()
// }
function printName(name: string) {
  console.log(name);
}
function returnTwoCouples(person1: string, person2: string) {
  return `${person1}과 ${person2}는 사귀고 있습니다.`;
}
console.log(returnTwoCouples("아이유", "코드팩토리"));
// returnTwoCouples(0, 1);
// returnTwoCouples("아이유");
// returnTwoCouples("아이유","코드팩토리","레드벨벳");

/**
 * Optional Parameter
 */
function multiplyOption(x: number, y?: number) {
  //(parameter) y: number | undefined
  if (y) {
    return x * y;
  } else {
    return x;
  }
}
console.log(multiplyOption(10, 20));
console.log(multiplyOption(10));

function multiplyOption2(x: number, y: number = 20) {
  //y의 기본값이 20(값이 안들어왔을 때)
  return x * y;
}
console.log(multiplyOption2(10)); //200
console.log(multiplyOption2(10, 30)); //300

/**
 * 나머지 매개변수
 */
function getInfiniteParameter(...args: string[]) {
  return args.map((x) => `너무좋아 ${x}`);
}

console.log(getInfiniteParameter("아이유", "아이브", "블랙핑크"));
// console.log(getInfiniteParameter(1,2,3));

/**
 * Return Type
 */
function addTwoNumbers(x: number, y: number) {
  // function addTwoNumbers(x: number, y: number): number
  return x + y;
}
addTwoNumbers(1, 2);

function randomNumber() {
  return Math.random() > 0.5 ? 10 : "랜덤";
}
randomNumber();
//function randomNumber(): 10 | "랜덤"

function subtractTwoNumbers(x: number, y: number): number {
  //   return "이게반환이 되나?";
  return x - y;
}

const subtractTwoNumbersArrow = (x: number, y: number): number => {
  return x - y;
};

/**
 * 특수 반환 타입
 *
 * void/never
 */
function doNotReturn(): void {
  console.log("저는 반환을 하지 않습니다");
  //   return 3;
  return;
}
doNotReturn();

function neverEndingLoop(): never {
  //반환하는 상황 자체를 만들면 안됨...
  //이 함수가 끝나지 않음
  while (true) {}
}
function throwError2(): never {
  throw Error();
}
