/**
 * Type and Interface
 */

/**
 * Type
 *
 * 타입은 쉽게 말해서 TS의 타입에 이름을 지어주는 역학을 한다.
 */
type NewStringType = string;

type NewNullType = null;

type NewNumberType = number;

type MaleOrFemale = "male" | "female";

const stringVar: NewStringType = "test";

type IdolType = {
  name: string;
  year?: number;
};
const yuJin: IdolType = {
  name: "안유진",
  year: 2002,
};

/**
 * Interface
 */
interface IdolInterface {
  name: string;
  year: number;
}
const yuJin2: IdolInterface = {
  name: "안유진",
  year: 2002,
};
interface IdolIT {
  name: NewStringType;
  year: NewNumberType;
}
const yuJin3: IdolIT = {
  name: "안유진",
  year: 2002,
};

interface IdolOptional {
  name: string;
  year?: number;
}
const yuJin4: IdolOptional = {
  name: "안유진",
  //   year: 2002,
};

//Type vs Interface
//인터페이스는 기본적으로 객체형태롤 들어감
//=>함수도 선언할 수 있고, 일반 개게도 선언할 수 있음
//but, 타입처럼 primitive를 나열할 수는 없다
