/**
 * Multi Dimension Array
 */

/**
 * (1)
 * [1,2,3]
 *
 * (2)
 * [
 * [1,2,3],
 * [1,2,3]
 * ]
 *
 * (3)
 * [
 *  [
 *    [1,2,3]
 *  ]
 * ]
 */
const number2DArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

const str2DArr: string[][] = [
  ["1", "2", "3"],
  ["1", "2", "3"],
];

const strAndNumberArr: (number | string)[][] = [
  [1, "2", 3],
  ["4", 5, "6"],
];

let strOrNumberArr: string[][] | number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

strOrNumberArr = [
  ["1", "2", "3"],
  ["4", "5", "6"],
];

for (let arr of number2DArr) {
  for (let item of arr) {
  }
}
