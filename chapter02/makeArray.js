// 2.2.1 배열 만들기
let numbers = [];
console.log(numbers.length); // 0 출력

numbers = [1,2,3,4,5]
console.log(numbers.length); // 5 출력

let array01 =  new Array();
console.log(array01.length);  // 0 출력

let array02 = new Array(1,2,3,4,5);
console.log(array02.length);   // 5 

// 크기를 지정해서 배열 만들기
let array03 = new Array(10);
console.log(array03);               // ,,,,,,,,,
console.log(array03.length);        // 10


// 특정 객체의 배열 여부 확인
let i = 3;
let arr = [1,2,3,4,5];
console.log(Array.isArray(i));      // false
console.log(Array.isArray(arr));    // true



