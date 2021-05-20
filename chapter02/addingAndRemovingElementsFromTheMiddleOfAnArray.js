// 2.4.3 배열 중간에 요소를 추가하거나 배열의 중간에 있는 요소 삭제하기

let nums = [1, 2, 3, 7, 8, 9];
let newElements = [4, 5, 6];
nums.splice(3, 0, newElements);
console.log(nums); // 스파이더 몽키에서 이렇게 출력되지만 1,2,3,4,5,6,7,8,9
// 실제 구조는  [1,2,3,[4,5,6],7,8,9] 이다.
console.log(nums.length);  //  7


let nums02 = [1, 2, 3, 7, 8, 9];
nums02.splice(3, 0, 4, 5, 6);
console.log(nums02);
console.log(nums02.length);  //  9
/**
 * 스파이더 몽키에서  [1,2,3,[4,5,6],7,8,9] 내용을 1,2,3,4,5,6,7,8,9 으로 출력해주는 바람에,
 * 저자님께서 splice()에 3번째 인자로 배열을 전달한 것과
 * 요소를 나열해서 직접 전달 것이 동일한 동작인 줄 알고 착각을 하신 것 같다.
 * 스파이더 몽키가 처리를 잘못한 것을 아닌데, 단지 print()를 할 때, 배열안의 내부 배열이 구분이 안되게 표시된다.
 */


// 배열 요소 삭제 예시
let nums03 = [1, 2, 3, 100, 200, 300, 400, 4, 5];
nums03.splice(3,4);
console.log(nums03);   // 1,2,3,4,5
