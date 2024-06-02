/**
 * Unknown Type
 */
let anyValue: any;

anyValue = 24;
anyValue = "아이유";
anyValue = false;
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

let unknownValue: unknown;

unknownValue = 24;
unknownValue = "아이유";
unknownValue = false;
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

// let anyType: any = anyValue;
// let unknownType: unknown = anyValue;
// let booleanType: boolean = anyValue;
// let arrayType: string[] = anyValue;
// let objectType: {} = anyValue;
// let nullType: null = anyValue;
// let undefinedType: undefined = anyValue;

// let anyType: any = unknownValue;
// let unknownType: unknown = unknownValue;
// let booleanType: boolean = unknownValue;
// let arrayType: string[] = unknownValue;
// let objectType: {} = unknownValue;
// let nullType: null = unknownValue;
// let undefinedType: undefined = unknownValue;

//unknown 타입을 갖고 있는 값의 경우,any 타입을 갖고 있는 any타입 또는 unknown 타입을 갖고 있는 변수에만 할당이 가능하다

// any와 unknown의 값을 할당하는 것은 실제 값을 할당할때에는 상관없지만
// 변수에서 또다른 변수에 assign할때에는 any와 unknown타입에만 assign이 가능하다

anyValue.toUpperCase();
anyValue.name;
new anyValue();
//런타임시 에러남

// unknownValue.toUpperCase();
// unknownValue.name;
// new unknownValue();
//런타임 전에 에러를 알 수 있음

function isString(target: unknown): target is string {
  return typeof target === "string";
  let testVal: unknown;

  if (isString(testVal)) {
    testVal;
  }
}

/**
 * Union Type
 */
type uOrString = unknown | string;
type uOrBoolean = unknown | boolean;
type uOrNumber = unknown | number;
type uOrAny = unknown | any; //any
type anyOrU = any | unknown; //any

/**
 * intersection Type
 * unknown과 무언가의 intersection을 하게 되면 무조건 상대 type이 된다
 */
type uAndString = unknown & string;
type uAndBoolean = unknown & boolean;
type uAndNumber = unknown & number;
type uAndAny = unknown & any; //any
type anyAndU = any & unknown; //any

/**
 * Operator 사용
 */
let number1: unknown = 10;
let number2: unknown = 20;
// number1 + number2;
// number1 - number2;
// number1 / number2;
// number1 * number2;
//unknown타입이라서 사칙연산 안됨

number1 === number2;
number1 == number2;
number1 !== number2;
number1 != number2;
