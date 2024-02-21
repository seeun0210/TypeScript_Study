/**
 * Union Basics
 *
 * 유니언은 TS에서 타입을 병합할 수 있는 수많은 방법 중 하나이다.
 */
type StringOrBooleanType = string | boolean;

let stringOrBoolean: StringOrBooleanType = "아이브";
stringOrBoolean = true;

// stringOrBoolean = undefined;

type StrBoolNullType = string | boolean | null;

type StateTypes = "DONE" | "LOADING" | "ERROR";

let state: StateTypes = "DONE";
state = "LOADING";
// state = "INITIAL";

/**
 * 리스트의 유니언
 */
//string으로 구성된 리스트 또는 boolean으로 구성된 리스트
type StringListOrBooleanList = string[] | boolean[];

let strListOrBooleanList: StringListOrBooleanList = [
  "아이유",
  "김고은",
  "박소담",
];

strListOrBooleanList = [true, false, true, false];

// strListOrBooleanList = ["아이유", true];

type StrOrNumberList = (string | number)[];

let stringOrNumberList = [1, 2, 3, "아이유", "레드벨벳"];
stringOrNumberList = [1, 2, 3];
stringOrNumberList = ["아이유", "레드벨벳"];
// stringOrNumberList = [true, false];

/**
 * Interface로 사용하는 union
 */
interface Animal {
  name: string;
  age: number;
}
interface Human {
  name: string;
  age: number;
  address: string;
}
type AnimalOrHuman = Animal | Human;
let animalOrHuman: AnimalOrHuman = {
  name: "김세은",
  age: 26,
  address: "대한민국 서울",
};
console.log(animalOrHuman); //let animalOrHuman: Human
console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
console.log(animalOrHuman.address);
animalOrHuman = {
  name: "오리",
  age: 9,
};
console.log(animalOrHuman); //let animalOrHuman: Animal
console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
// console.log(animalOrHuman.address);
// casting의 문제점
// console.log((animalOrHuman as Human).address);
//얘가 Human인것 처럼 인식을 함-> 실행하면 에러남

//type을 형성해서 유니언을 형성하면 좋은 이유
let animalOrHuman2:
  | {
      name: string;
      age: number;
    }
  | { name: string; age: number; address: string } = {
  name: "김세은",
  age: 26,
  address: "대한민국 서울",
};
console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);
console.log(animalOrHuman2.address);

animalOrHuman2 = {
  name: "오리",
  age: 9,
};
console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);
// console.log(animalOrHuman2.address);
//{ name: string; age: number; } 형식에 address 속성이 없습니다.

//위에서는 Animal|Human으로 타입 키워드를 사용해서 타입을 형성했고, 아래에서는 바로 인터페이스를 넣었음
//위에서의 에러가 더 읽기 쉽다
//=> 키워드를 사용해서 타입을 형성한 다음에 에러를 파악하는게 유용함!!

//서로 상관이 없는 property를 갖고 있는 Union을 선언하면 어떻게 될까??
type Person = {
  name: string;
  age: number;
};
type Cat = {
  bread: string;
  country: string;
};
type PersonOrCat = Person | Cat;
//하나의 타입을 완전히 만족하고 다른 타입의 속성도 추가로 만족할 수 있음
const personOrCat: PersonOrCat = {
  name: "김세은",
  age: 26,
  bread: "Yorkshire Terrier",
  country: "영국",
};
//이거 가능

const personOrCat2: PersonOrCat = {
  name: "김세은",
  age: 26,
  // bread: "Yorkshire Terrier",
  // country: "영국",
};
//이것도 가능

const personOrCat3: PersonOrCat = {
  // name: "김세은",
  age: 26,
  // bread: "Yorkshire Terrier",
  country: "영국",
};
//->이런건 불가능하다는 말!! Person도 만족하지 않고, Cat도 만족하지 않기 때문!
// UNION타입에서 어느 것 하나는 만족해야한다
