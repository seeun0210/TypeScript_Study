/**
 * Intersection
 *
 * And
 */
interface Human {
  name: string;
  age: number;
}
interface Contacts {
  phone: string;
  address: string;
}

//intersection 선언
type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
  name: "코드팩토리",
  age: 32,
  phone: "01012341234",
  address: "서울시",
};

//primitive Type을 intersection을 만들면???
//일단 논리적으로 불가능함 =>never타입!! (절대로 존재할 수가 없는 상황)
type NumberAndString = number & string;
//type NumberAndString = never

// let numberAndString: NumberAndString = undefined;
// 어떤 값도 할당할 수가 없다

//그럼 never를 할당할 수 있지 않을까??
// let numberAndString = never;
//결론 안된다
// 왜냐? never는 typescript의 type never이다
