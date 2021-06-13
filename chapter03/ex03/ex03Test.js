/**
 * 03. 사람의 이름과 성별을 저장하는 Person 클래스 구현후
 *     최소한 10개의 Person 객체 만들어 리스트에 넣기
 *     같은 성별을 가진 사람을 모두 출력하는 함수 구현
 */
import {List} from "../List.js"
import {Person} from "./Person.js";

function addPerson(name, gender, personList) {
    let person = new Person(name, gender);
    personList.append(person);
}

let personList = new List();
console.log('=== 전체 Person 목록 출력 === ')
addPerson('노진구', '남성', personList);
addPerson('도라에몽', '불명', personList);
addPerson('터프가이', '남성', personList);
addPerson('이슬이', '여성', personList);
addPerson('비실이', '남성', personList);
addPerson('뚱땡이', '남성', personList);
addPerson('다크나이트', '남성', personList);
addPerson('질럿', '남성', personList);
addPerson('캐리건', '여성', personList);
addPerson('마린', '남성', personList);

personList.displayList();

console.log('=== 남성만 출력 === ')
personList.displayListIf(function (element) {
    return element.gender == '남성'
});

console.log('=== 여성만 출력 === ')
personList.displayListIf(function (element) {
    return element.gender == '여성'
});

console.log('=== 성별 모름만 출력 === ')
personList.displayListIf(function (element) {
    return element.gender == '불명'
});
