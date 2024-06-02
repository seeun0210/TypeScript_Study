/**
 * Problems with Array in JS
 */
const number = [1, "2", 3, "4", 5];

let strings: string[] = ["1", "2", "3"];

// strings.push(2);

let stringOrNumberArray: (string | number)[] = [1, "2", 3];

let stringArrayOrNumberArr: string[] | number[] = [1, 2, 3];

let stringArrNumberArr = ["1", "2", "3"];

let stringOrNumberArr: string | number[] = [1, 2, 3];

stringOrNumberArr = "3";

let boolsArr = [true, false, true];

boolsArr.push(false);

// boolsArr.push(1);

const onlyString = ["1", "2", "3"];
const onlyNumbers = [1, 2, 3];

for (let i = 0; i < onlyString.length; i++) {
  let item = onlyString[i];
}

for (let item of onlyNumbers) {
}

let number3 = onlyNumbers[0];

let number4 = onlyNumbers[99999]; //let number4: number
//실제로 number4의 값은 undefined이지만 ts에서는 number type이 될거라고 가정을 함
//=>버그가 발생할 수 있다
