// 2.4.4 배열 요소 정렬하기

// 배열의 요소 역순으로 바꾸기
let nums = [1, 2, 3, 4, 5];
nums.reverse();
console.log(nums);  // 5,4,3,2,1


// 배열의 요소 순서대로 정렬
let names = ["David", "Mike", "Cynthia", "Clayton", "Bryan", "Raymond"];
names.sort();
console.log(names);  // Bryan,Clayton,Cynthia,David,Mike,Raymond


// 숫자는 안됨..

let numsArray = [3, 1, 2, 100, 4, 200];
numsArray.sort();
console.log(numsArray); // 1,100,2,200,3,4
// 정렬이 숫자도 문자열처럼 처리되서, 결과가 기대대로 안나옴.


let numsArray02 = [3, 1, 2, 100, 4, 200];

// 음수: 왼쪽 숫자가 오른쪽 숫자보다 작다
// 0: 같다
// 양수: 왼쪽 숫자가 오른쪽보다 크다
function compare(left, right) {
    console.log('left:' + left + ", right:" + right);
    return left - right;
}

numsArray02.sort(compare);
console.log(numsArray02);  // 1,2,3,4,100,200

