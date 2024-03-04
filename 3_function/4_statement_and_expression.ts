/**
 * Statement and Expression
 */

//statement(문장)
function addTwoNumbers(x: number, y: number) {
  return x + y;
}

//expression(표현식)
const addTwoNumbersExp = (x: number, y: number) => {
  return x + y;
};

/**
 * Statement
 */
function add(x: number, y: number): number {
  return x + y;
}
function subtract(x: number, y: number): number {
  return x - y;
}
function multiply(x: number, y: number): number {
  return x * y;
}
function divide(x: number, y: number): number {
  return x / y;
}

/**
 * Expression
 */
type CalculationType = (x: number, y: number) => number;
//타입을 하나하나 명시하는 것 보다
//expression을 사용해서 함수의 시그티처 타입을 선언한 다음 반복적으로 사용하는 것이 훨씬 더 깔끔하다
const add2: CalculationType = function (x, y) {
  return x + y;
};
const subtract2: CalculationType = function (x, y) {
  return x - y;
};
const multiply2: CalculationType = function (x, y) {
  return x * y;
};
const divide2: CalculationType = function (x, y) {
  return x / y;
};
