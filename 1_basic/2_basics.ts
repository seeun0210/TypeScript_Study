/**
 * Types
 */
let helloText: string = "Hello";
// helloText = true; //boolean타입은 저장할 수 없게됨

/**
 * JS에 존재하는 타입
 * 7개의 타입
 */
const stringVar: string = "string";
const numberVar: number = 3;
const bigIntVar: bigint = BigInt(99999999);
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined;

/**
 * TS에만 존재하는 타입
 */
//any - 아무 타입이나 입력할 수 잇는 치트키같은 타입
let anyVar: any;
anyVar = 100;
anyVar = "코드팩토리";
anyVar = true;

let testNumber: number = anyVar;
let testString: string = anyVar;
let testBoolean: boolean = anyVar;

//unknown - 알 수 없는 타입
let unknownType: unknown;
unknownType = 100;
unknownType = "코드팩토리";
unknownType = true;

// any type과 unknown type은 기본적으로 모든 타입을 다 해당변수에 입력할 수 있지만
// 다른 변수에 할당하는건 any type만 가능하다
// unknown type의 변수는 any 또는 unknown 타입의 변수에 할당하는 것 만 가능하다
// let testNumber2: number = unknownType;
// let testString2: string = unknownType;
// let testBoolean2: boolean = unknownType;
let unknownType2: unknown = unknownType;
let anyType2: any = unknownType;

// never -  어떠한 값도 저장되거나 반환되지 않을 때 사용하는 타입
// let neverType: never = null;
// let neverType: never = undefined;
// let neverType: never = "test";

/**
 * 리스트 타입
 */
const koreanGirlGroup: string[] = ["아이브", "레드벨벳", "뉴진스", "블랙핑크"];
const booleanList: boolean[] = [true, false, true, false];

//tsc는 typescript를 javascript로 변환해주는 컴파일러
//터미널에 tsc를 입력하면 ts->js로 변경해줌
//js파일에서는 type선언이 없어짐
//typescript의 경우 우리가 빌드할 때, 즉 실행하기 전에 사용하는 언어임
//실제 우리가 프로덕션 환경에 올라가는 프로젝트들은 TypeScript로 작성을 하고 JavaScript로 컴파일된 상태에서 JS가 실행이 됨
//=> TypeScript 코드를 실행하는데 어떤 오버헤드도 영향을 주지 않음
// 즉, 결국에 한번만 컴파일을 하고나면 JS가 실행되는 것이기 때문에 JS 엔진이 사용됨
//any type이나 unknown type을 남발하게되면 runtime에서 문제가 생길 수 있다.
