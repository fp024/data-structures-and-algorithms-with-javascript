// reduce() 함수 예제

function add(runningTotal, currentValue) {
    console.log("runningTotal: ", runningTotal, " ,currentValue: ", currentValue);
    return runningTotal + currentValue;
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = nums.reduce(add); // reduce 함수의 최초 값은 배열의 1번째 요소부터 시작
console.log(sum);

/*
runningTotal:  1  ,currentValue:  2
runningTotal:  3  ,currentValue:  3
runningTotal:  6  ,currentValue:  4
runningTotal:  10  ,currentValue:  5
runningTotal:  15  ,currentValue:  6
runningTotal:  21  ,currentValue:  7
runningTotal:  28  ,currentValue:  8
runningTotal:  36  ,currentValue:  9
runningTotal:  45  ,currentValue:  10
55
 */

// reduce() 함수를 이용해문자열 연결
function concat(accumulatedString, item) {
    console.log("accumulatedString: ", accumulatedString, " ,item: ", item);
    return accumulatedString + item;
}

let words = ["the ", "quick ", "brown ", "fox "];
let sentence = words.reduce(concat);
console.log(sentence);   // the quick brown fox


// reduceRight()
sentence = words.reduceRight(concat);
console.log(sentence == 'fox brown quick the ');   //  true
