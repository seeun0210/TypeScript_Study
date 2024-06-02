/**
 * Type vs Interface
 */

// Object 선언할 때
interface IObject {
  x: number;
  y: number;
}

type TObject = {
  x: number;
  y: number;
};

//function 선언할 때
interface IFunction {
  (x: number, y: number): number;
}

type TFunction = (x: number, y: number) => number;

/**
 * Type에서는 할 수 있지만
 * Interface에서는 할 수 없는 것들
 */

//(1) primitive 타입 선언하기
type Name = string;

//(2) union 타입 선언하기
type UnionType = string | number;

//(3) primitive list 또는 tuple타입 선언하기
type TupleType = [number, string];

/**
 * Interface는 할 수 있고
 * Type은 못하는 것
 */

// interface merging
interface IRectangle {
  height: number;
}

interface IRectangle {
  width: number;
}

let rectangle: IRectangle = {
  height: 200,
  width: 100,
};

//type은 식별자 중복 자체가 안됨
// type TRactangle = {
//   height: number;
// };

// type TRactangle = {
//   width: number;
// };

/**
 * Interface Merging
 */
class Review {
  //프로퍼티
  getY = (x: number) => {
    return x;
  };
  //메서드
  getX(x: number) {
    return x;
  }
}
interface GetXnY {
  getX: (x: number) => number;
  getY: (y: number) => number;
}

interface GetXnY {
  getX: (x: number) => number;
  //   getY: (y: string) => number;
  //프로퍼티의 경우 오버로딩이 되지않기 때문에 같은 속성으로 지정해줘야함
}

interface GetXnY2 {
  getX(x: number): number;
  getY(y: number): number;
}

interface GetXnY2 {
  getX(x: number): number;
  getY(y: string): number; //메서드의 경우 함수르 인식하기 때문에 오버로딩이 가능하다
}

const testMethod: GetXnY2 = {
  getX(x) {
    return x;
  },
  getY(y) {
    return 1;
  },
};
