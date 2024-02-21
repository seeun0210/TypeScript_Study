/**
 * Narrowing
 *
 * Narrowing은 Union타입에서 더욱 구체적인 타입으로
 * 논리적으로 유추할 수 있게 하는 것을 의미한다ㄴ
 */
let numberOrString: number | string = "codefactory";
numberOrString; //let numberOrString: string
//string을 할당했기 때문에 바로 string으로 타입이 유추됨

const decimal = 12.3278;

console.log(decimal.toFixed(2)); //12.33
// numberOrString.toFixed();
// narrowing을 하면 narrowing된 이 타입으로 완전하게 인지가 됨

/**
 * Narrowing의 종류
 *
 * 1) Assignment Narrowing
 * 2) typeof Narrowing
 * 3) Truthiness Narrowing
 * 4) Equality Narrowing
 * 5) in operator narrowing
 * 6) instanceof narrowing
 * 7) discriminated union narrowing
 * 8) exhaustiveness checking
 */

//(1) Assignment Narrowing
// 특정 값을 할당해서 내로잉
let numOrString: number | string = "아이유";
numOrString.toString();

//(2) typeof Narrowing
//typeof 키워드를 통해서 narrowing
numOrString = Math.random() > 0.5 ? 123 : "아이유";
//let numOrString: string | number

if (typeof numOrString === "string") {
  numOrString;
  //let numOrString: string
  //string으로 narrowing이 됨
} else {
  numOrString;
  //let numOrString: number
  //number로 narrowing이 됨
}

//(3) Truthiness Narrowing
let nullOrString: null | string[] =
  Math.random() > 0.5 ? null : ["아이유", "레드벨벳"];

if (nullOrString) {
  //truthy
  nullOrString;
  //let nullOrString: string[]
} else {
  //falsy(null, undefined)
  nullOrString;
  //let nullOrString: null
}

//(4) Equality Narrowing
let numOrString2: number | string = Math.random() > 0.5 ? 123 : "아이유";
let stringOrBool2: string | boolean = Math.random() > 0.5 ? "아이브" : true;

if (numOrString2 === stringOrBool2) {
  stringOrBool2;
  //let stringOrBool2: string
  numOrString2;
  //let numOrString2: string
  //string타입으로 유추가 됨
} else {
  stringOrBool2;
  //let stringOrBool2: string | true
  numOrString2;
  //let numOrString2: string | number
  //둘중에 하나가 string이 아니면 됨
}

let numberOrStringOrNull: number | string | null =
  Math.random() > 0.5 ? 123 : Math.random() > 0.5 ? "안유진" : null;

if (typeof numberOrStringOrNull === "number") {
  numberOrStringOrNull;
  //let numberOrStringOrNull: number
} else {
  numberOrStringOrNull;
  //let numberOrStringOrNull: string | null
}

//(5) in operate Narrowing
interface Human {
  name: string;
  age: number;
}

interface Dog {
  name: string;
  type: string;
}

let human: Human = {
  name: "안유진",
  age: 23,
};

let dog: Dog = {
  name: "오리",
  type: "Yorkshire Terrier",
};

let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;

console.log("name" in human); //true
console.log("type" in dog); //true
console.log("age" in dog); //false
//-> 존재하는 키값의 여부를 in 키워드를 통해서 알 수 있다

if ("type" in humanOrDog) {
  //이 조건이 만족하면 humanOrDog의 타입은 Dog임
  humanOrDog;
  //let humanOrDog: Dog
} else {
  //Dog 타입이 아니면 당연히 Human 타입
  humanOrDog;
  //let humanOrDog: Human
}

//(6) instanceof narrowing
let dataOrString: Date | String =
  Math.random() > 0.5 ? new Date() : "코드팩토리";

if (dataOrString instanceof Date) {
  dataOrString;
  //let dataOrString: Date
} else {
  dataOrString;
  //let dataOrString: String
}

//(7)Discriminated Union Narrowing
interface Animal {
  type: "dog" | "human";
  height?: number;
  //강아지의 종
  bread?: string;
}
let animal: Animal =
  Math.random() > 0.5
    ? {
        type: "human",
        height: 127,
      }
    : {
        type: "dog",
        bread: "Yorkshire Terrier",
      };

if (animal.type === "human") {
  animal.height;
  //(property) Animal.height?: number | undefined
} else {
  animal.bread;
  //(property) Animal.bread?: string | undefined
  animal.height;
  //(property) Animal.height?: number | undefined
}

interface Human2 {
  type: "human";
  height: number;
}
interface Dog2 {
  type: "dog";
  bread: string;
}
interface Fish2 {
  type: "fish";
  length: number;
}
type HumanOrDog2 = Human2 | Dog2 | Fish2;

let humanOrDog2: HumanOrDog2 =
  Math.random() > 0.5
    ? {
        type: "human",
        height: 172,
      }
    : Math.random() > 0.5
    ? {
        type: "dog",
        bread: "Yorkshire Terrier",
      }
    : {
        type: "fish",
        length: 12,
      };

if (humanOrDog2.type === "human") {
  humanOrDog2;
  //let humanOrDog2: Human2
} else {
  humanOrDog2;
  //let humanOrDog2: Dog2
}
//=> 공통되는 property를 갖고 있는 객체의 정의를 선언할 때,
//인터페이스로 선언하든, 타입으로 선언하든
//뭉뚱그려서 선언하는 것 보다
//여러 개로 나눠서 선언한 다음에 유니언으로 묶어주는 것이 좋다!!
//->타입을 정확히 유추하는데 유리함

//(8) Exhaustiveness Checking
switch (humanOrDog2.type) {
  case "human":
    humanOrDog2;
    //let humanOrDog2: Human2
    break;
  case "dog":
    humanOrDog2;
    //let humanOrDog2: Dog2
    break;
  case "fish":
    humanOrDog2;
    //let humanOrDog2: Fish2
    break;
  default:
    humanOrDog2;
    //let humanOrDog2: never

    const _check: never = humanOrDog2;
    //'Fish2' 형식은 'never' 형식에 할당할 수 없습니다.
    break;
}
//=>맞게 수정하려면??
//Fish2 캐이스를 추가해주면 된다
