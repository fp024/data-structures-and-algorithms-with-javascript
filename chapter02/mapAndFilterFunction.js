// 2.5.2 새 배열을 반환하는 반복자 함수 - map(), filter()
//  Java 8에서 먼저 이런 부류의 함수를 봤더니 눈에 잘 들어온다.

function curve(grade) {
    return grade + 5;
}

let grades = [77, 65, 81, 92, 83];
let newGrades = grades.map(curve);
console.log(newGrades);  // 82,70,86,97,88


// 문자열에 map() 적용
function first(word) {
    return word[0];
}

let words = ["spring", "javascript", "clang"];
let firstChars = words.map(first);
console.log(firstChars.join(""));  // sjc


// filter 함수
function isEven(num) {
    if (num == 0) {
        return false;
    }
    return num % 2 == 0;
}

function isOdd(num) {
    if (num == 0) {
        return false;
    }
    return !isEven(num);
}

let nums = [];
for (let i = 0; i < 20; i++) {
    nums[i] = i + 1;
}

let evens = nums.filter(isEven);
console.log("Even numbers:", evens); // Even numbers: 2,4,6,8,10,12,14,16,18,20

let odds = nums.filter(isOdd);
console.log("Odd numbers:", odds); // Odd numbers: 1,3,5,7,9,11,13,15,17,19


// filter() 함수 활용
function passing(num) {
    return num >= 60;
}

let grades01 = [];
for (let i = 0; i < 20; i++) {
    grades01[i] = Math.floor(Math.random() * 101);
}

let passGrades = grades01.filter(passing);
console.log("All grades: ");
console.log(grades01);
console.log("Passing grades: ");
console.log(passGrades);   // 60이상인 점수만 출력

/*
    All grades:
    22,2,75,1,41,32,97,6,62,15,81,58,47,55,3,33,32,39,24,35
    Passing grades:
    75,97,62,81
*/


// 문자열에 filter() 함수 적용
function contains(str) {
    return str.indexOf("cie") > -1;
}

words = ["recieve", "deceive", "percieve", "deceit", "concieve"];
let missSpelled = words.filter(contains);
console.log(missSpelled); // recieve,percieve,concieve
