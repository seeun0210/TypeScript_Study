"use strict";
/**
 * Types
 */
let helloText = "Hello";
// helloText = true; //boolean타입은 저장할 수 없게됨
/**
 * JS에 존재하는 타입
 * 7개의 타입
 */
const stringVar = "string";
const numberVar = 3;
const bigIntVar = BigInt(99999999);
const booleanVar = true;
const symbolVar = Symbol(1);
const nullVar = null;
const undefinedVar = undefined;
/**
 * TS에만 존재하는 타입
 */
//any - 아무 타입이나 입력할 수 잇는 치트키같은 타입
let anyVar;
anyVar = 100;
anyVar = "코드팩토리";
anyVar = true;
let testNumber = anyVar;
let testString = anyVar;
let testBoolean = anyVar;
//unknown - 알 수 없는 타입
let unknownType;
unknownType = 100;
unknownType = "코드팩토리";
unknownType = true;
// any type과 unknown type은 기본적으로 모든 타입을 다 해당변수에 입력할 수 있지만
// 다른 변수에 할당하는건 any type만 가능하다
// unknown type의 변수는 any 또는 unknown 타입의 변수에 할당하는 것 만 가능하다
// let testNumber2: number = unknownType;
// let testString2: string = unknownType;
// let testBoolean2: boolean = unknownType;
let unknownType2 = unknownType;
let anyType2 = unknownType;
// never -  어떠한 값도 저장되거나 반환되지 않을 때 사용하는 타입
// let neverType: never = null;
// let neverType: never = undefined;
// let neverType: never = "test";
/**
 * 리스트 타입
 */
const koreanGirlGroup = ["아이브", "레드벨벳", "뉴진스", "블랙핑크"];
const booleanList = [true, false, true, false];
//tsc는 typescript를 javascript로 변환해주는 컴파일러
