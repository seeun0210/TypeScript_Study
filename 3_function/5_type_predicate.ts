/**
 * Type Predicate
 */
//Type을 구분하는 함수!

function isNumber(input: any): input is number {
  return typeof input === "number";
}
console.log(isNumber(10)); //true

function isNumberRetBool(input: any): boolean {
  return typeof input === "number";
}
let number: any = 5; //number는 any type

if (isNumberRetBool(number)) {
  number;
  //let number: any
}

if (isNumber(number)) {
  number;
  //let number: number
}

interface Doge {
  name: string;
  age: number;
}

interface Cat {
  name: string;
  bread: string;
}

type DogeOrCat = Doge | Cat;

function isDoge(animal: DogeOrCat): animal is Doge {
  //반환 타입을 변수 is type 형태로 적어줌!
  //이렇게 하면 내로잉 했을 때 정확한 타입을 유추할 수 있다
  return (animal as Doge).age !== undefined;
}

const doge: DogeOrCat =
  Math.random() > 0.5
    ? {
        name: "도지",
        age: 32,
      }
    : {
        name: "오리",
        bread: "코리안 길냥이",
      };

if (isDoge(doge)) {
  doge;
  //const doge: Doge
} else {
  doge;
  //const doge: Cat
}
