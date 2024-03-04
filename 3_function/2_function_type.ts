/**
 * Function type
 */
type Mapper = (x: string) => string;
const runner = (callback: Mapper) => {
  return ["안유진", "장원영", "레이"].map(callback);
};
console.log(runner((x) => `아이브 멤버:${x}`));

type MultiplyTwoNumbers = (x: number, y: number) => number;

const multiplyTwoNumbers: MultiplyTwoNumbers = (x, y) => {
  return x + y;
};

/**
 * interface로 함수 타입 선언하기
 */
interface IMultiplyTwoNumbers {
  (X: number, y: number): number;
}
const multiplyTwoNumbers2: IMultiplyTwoNumbers = (x, y) => {
  return x * y;
};
