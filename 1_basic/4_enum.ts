/**
 * Enum
 */

/**
 * API요청을 한다.
 * 상태는 4가지 상태
 *
 * DONE-요청 완료 상태
 * ERROR-에러가 생긴 상태
 * LOADING-로딩 상태
 * INITIAL-초기 상태
 */
function runWork() {
  let state = "INITIAL";

  try {
    state = "LOADING";
    //작업을 한다

    state = "DONE";
  } catch (e) {
    state = "ERROR";
  } finally {
    return state;
  }
}
console.log(runWork() === "DONE");
const doneState = "DONE";
const loadingState = "LOADING";
const errorState = "ERROR";
const initialState = "INITIAL";
function runWork2() {
  let state = initialState;

  try {
    state = loadingState;
    //작업을 한다

    state = doneState;
  } catch (e) {
    state = errorState;
  } finally {
    return state;
  }
}
console.log(runWork2() === doneState);

enum State {
  DONE,
  LOADING,
  INITIAL,
  ERROR,
}
function runWork3() {
  let state = State.INITIAL;

  try {
    state = State.LOADING;
    //작업을 한다

    state = State.DONE;
  } catch (e) {
    state = State.ERROR;
  } finally {
    return state;
  }
}
console.log(runWork3() === State.DONE); //true
console.log(runWork3()); //0(DONE은 0)
//0이 나오는 이유는 enum을 선언하면 state라는 enum안에서 0,1,2,3이라는 숫자가 부여됨
//이게 싫다면
enum State2 {
  DONE = "DONE",
  LOADING = "LOADING",
  INITIAL = "INITIAL",
  ERROR = "ERROR",
}
function runWork4() {
  let state = State2.INITIAL;

  try {
    state = State2.LOADING;
    //작업을 한다

    state = State2.DONE;
  } catch (e) {
    state = State2.ERROR;
  } finally {
    return state;
  }
}
console.log(runWork4()); //DONE 이 출력된다
