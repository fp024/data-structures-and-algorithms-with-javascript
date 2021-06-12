/**
 * 프로젝트 루트에서 npm i scanf 로 모듈을 설치하고 사용해본다.
 * https://www.npmjs.com/package/scanf
 */

import scanf from 'scanf';

console.log('이름을 입력해주세요');
let name = scanf('%S'); // 한글 처리는 정상적이지 않음.

console.log('나이를 입력해주세요');
let age = scanf('%d');

console.log('이름: [%s] type: [%s]', name, typeof name);
console.log('나이: [%s] type: [%s]', age, typeof age);