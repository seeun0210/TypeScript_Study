/**
 * Overloading
 */
/**
 * 파라미터를
 * 1)하나를 받거나
 * 2)세개를 받는 함수
 */
function stringOrStrings(members: string): string;
// function stringOrStrings(member1: string, member2: string): string;
function stringOrStrings(
  member1: string,
  member2: string,
  member3: string
): string;

// function stringOrStrings(member: string): number;
// 이 경우는 구현체에 없기 때문에 에러가 난다
// 함수에서 가능한 시그니처에대해서 오버로딩을 할 수 있다

//근데 이건 js로 컴파일되면서 없어진다(js에는 없는 문법이기 때문)
//->가급적 사용하지 않는 것이 좋다
/**
 * 만약에 하나의 파라미터만 입력받는다면
 * 아이돌 멤버들을 하나의 스트링으로 입력받는다.
 * 예) '안유진,장원영,레이'
 *
 * 만약에 세개의 파라미터를 받는다면
 * 각각 아이돌의 각각의 파라미터의 값으로 입력한다.
 * 예) '안유진','장원영','레이'
 */

function stringOrStrings(
  memberOrMembers: string,
  member2?: string,
  member3?: string
) {
  if (member2 && member3) {
    return `아이브: ${memberOrMembers}, ${member2}, ${member3}`;
  } else {
    return `아이브: ${memberOrMembers}`;
  }
}

console.log(stringOrStrings("안유진, 장원영, 레이"));
console.log(stringOrStrings("안유진", "장원영", "레이"));
// console.log(stringOrStrings("안유진", "장원영"));
