// 2.5.1 배열을 만들지 않는 반복자 함수
function square(num) {
    console.log(num, num * num);
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
nums.forEach(square);

/*
1 1
2 4
3 9
4 16
5 25
6 36
7 49
8 64
9 81
10 100
 */


// every() 반복자
function isEven(num) {
    if (num == 0) {
        return false;
    }
    return num % 2 == 0;
}

let numsOfEven = [2, 4, 6, 8, 10];
let even = numsOfEven.every(isEven);

if (even) {
    console.log("all numbers are even."); // 배열의 모든 수가 짝수여서, 출력
} else {
    console.log("not all numbers are even.");
}

// 홀수, 짝수가 모두 있는 배열
let someEvenNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 하나라도 있으면 true
let someEven = nums.some(isEven);
if (someEven) {
    console.log("some numbers are even"); // 배열에 짝수라도 있어서, 출력
} else {
    console.log("no numbers are even");
}

let oddNumbs = [1, 3, 5, 7, 9];
// 하나라도 있으면 true
someEven = oddNumbs.some(isEven);
if (someEven) {
    console.log("some numbers are even");
} else {
    console.log("no numbers are even"); // 배열에 짝수가 하나도 없어서, 출력
}
