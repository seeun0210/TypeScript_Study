/**
 * Extension
 */
interface IName {
  name: string;
}

interface IIdol extends IName {
  age: number;
}

const idol: IIdol = {
  name: "안유진",
  age: 23,
};

type TName = {
  name: string;
};

type TIdol = TName & { age: number };

const idol2: TIdol = {
  name: "아이유",
  age: 29,
};

interface IIdol2 extends TName {
  age: number;
}

const idol3: IIdol2 = {
  name: "제니",
  age: 29,
};

type TIdol2 = IName & {
  age: number;
};

const idol4: TIdol2 = {
  name: "지수",
  age: 31,
};

//인터페이스에서 상속받을 때=> extends
//type에서 상속받을 때=> &
//타입이 인터페이스에서 상속 받을 수도 있고
//인터페이스가 타입을 상속받을 수 있다.

/**
 * extending multiple
 */
type DogName = {
  name: string;
};

type DogAge = {
  age: number;
};

type DogBread = {
  bread: string;
};

type Dog = DogName & DogAge & DogBread;

const dog: Dog = {
  name: "코드팩토리",
  age: 32,
  bread: "poodl",
};

interface CatName {
  name: string;
}

interface CatAge {
  age: number;
}

interface Cat extends CatName, CatAge {
  bread: string;
}

const cat: Cat = {
  name: "오리",
  age: 7,
  bread: "코리안 냥냥이",
};
/**
 * overriding
 */
type THeight = {
  height: number;
};

type TRectangle = THeight & {
  height: string;
  width: number;
};

// const rectangle:TRectangle={
//     height:,
//     width:100,
// }
//위의 경우에서 height는 number타입이면서 string타입이어야 함
//=>never type이 됨!
//중복으로 프로퍼티를 선언할 때는 꼭 같은 타입으로 입력해주어야 한다

type Twidth = {
  width: number | string;
};
type TRectangle2 = Twidth & {
  width: number; //number|string에서 number로 narrowing이 된 것!
  height: number;
};

const rectangle2: TRectangle2 = {
  height: 100,
  width: 200,
  //(property) width: number
};

interface IHeight {
  height: number;
}

interface IWidth {
  width: number;
}

// interface IRectangle extends IHeight {
//     height: string;
//   width: number;
// }

interface IWidth2 {
  width: number | string;
}

interface IRectangle extends IWidth2 {
  width: number;
  height: number;
}
//interface같은 경우에는 never타입이 되는경우를 에러로 막는다
