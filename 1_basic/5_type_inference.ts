/**
 * Type Inference
 *
 * 타입추론
 */
let stringType = "string";
let booleanType = true;
let numberType = 30;

booleanType = false;

// booleanType = "false";
// string을 boolean타입에 할당할 수 없다는 에러가 뜸

const constStringType = "const string";
//string 리터럴 타입
const constBooleanType = true;
//boolean type중에서도 true만 들어갈 수 있다
//타입추론을 할 때 구체적인 타입으로 추론이 된다

let yuJin = {
  name: "안유진",
  age: 2003,
};
const yuJin2 = {
  name: "안유진",
  age: 2003,
};
yuJin2.name = "코드팩토리";
console.log(yuJin2); //{ name: '코드팩토리', age: 2003 }

const yuJin3 = {
  name: "안유진" as const,
  //안유진이라는 값을 const로 캐스팅하라고 지정할 수 있음
  //=>그러면 yuJin2에서처럼 이름이 안유진 이외의 다른 값으로 바뀌는 것을 방지할 수 있다
  age: 2003,
};
// yuJin3.name = "코드팩토리"; //변경할 수 없다
yuJin3.name = "안유진"; //이것만 가능
console.log(yuJin3.name); //(property) name: "안유진"
console.log(yuJin2.name); //(property) name: string

/**
 * Array
 */
let numbers = [1, 2, 3, 4, 5];
let numbersAndString = [1, 2, 3, "4", "5", "6"]; //let numbersAndString: (string | number)[]

numbers.push(6);
// numbers.push("6");

const number = numbers[0];
const nos = numbersAndString[0]; //const nos: string | number
const nos2 = numbersAndString[6];
//ts는 일반 array를 선언했을 때 리스트의 길이를 넘는 인덱스를 가져와도 인지하지 못함
//=>위험하다

//tuple
const twoNumbers = [1, 3] as const;
//const twoNumbers: readonly [1, 3]
//readonly: 수정할 수 없다

// twoNumbers[0] = 10;
// twoNumbers.push(100);

const first = twoNumbers[0]; //const first: 1
// const first2 = twoNumbers[2];
// tuple로 선언하면 array의 길이를 넘어선 index를 불러오면 바로 에러가 난다

// 일반 array를 선언하게 되면 string|number이런 식으로 리스트가 구성되지만
// tuple로 선언하게 되면 정확히 몇 번째에 어떤 값이 있어야 하는지 정확히 알 수 있다
