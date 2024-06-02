/**
 * Tuple
 */
let iveTopMembers: string[] = ["안유진", "장원영", "레이"];

let numberAndStringTuple: [number, string] = [23, "코드팩토리"];
//빌드타임에 순서를 강제할 수 있음

numberAndStringTuple.push("아이유");
console.log(numberAndStringTuple); //[ 23, '코드팩토리', '아이유' ]

let unmodifiableTuple: readonly [number, string] = [23, "코드팩토리"];

// unmodifiableTuple.push();
//readonly를 부여함으로써 push를 막을 수 있다

/**
 * Tuple 유추하기
 */
let actresses = ["김고은", "박소담", "전여빈"];

let actressesTuple = ["김고은", "박소담", "전여빈"] as const;
//as const로 조금 더 정확한 타입으로 유추
const actressesTupleConst = ["김고은", "박소담", "전여빈"] as const;

let stringArray: string[] = [...actressesTuple, ...actressesTupleConst];

/**
 * Named Tuple
 */
const namedTuple: [name: string, age: number] = ["코드팩토리", 32];

/**
 * Assigning Tuple to Tuple
 *
 * Tuple은 같은 타입끼리만 할당이 가능하다
 */
const tuple1: [string, string] = ["아이유", "유애나"];
const tuple2: [number, number] = [1, 2];

// let tuple3: [number, number] = tuple1;
// let tuple4: [number, number, number] = tuple2;

let tuple5: [number, number] = tuple2;

/**
 * Tuple과 Array의 관계
 */
let ive: [string, string] = ["장원영", "안유진"];

let stringArr: string[] = ive;

// let ive2: [string, string] = stringArr;
// 구체적인 타입으로부터 덜 구체적인 타입으로의 할당은 불가능

/**
 * multi Dimensional Tuple
 */
const tuple20: [string, number][] = [
  ["코드팩토리", 20],
  ["아이유", 31],
  ["김고은", 30],
];
