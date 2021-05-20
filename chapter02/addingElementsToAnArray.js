// 2.4.1 배열에 요소 추가하기

let nums = [1, 2, 3, 4, 5];
console.log(nums); // 1,2,3,4,5
nums.push(6);
console.log(nums); // 1,2,3,4,5,6


let nums01 = [1, 2, 3, 4, 5];
console.log(nums01); // 1,2,3,4,5
nums01[nums01.length] = 6;
console.log(nums01); // 1,2,3,4,5,6


// 배열의 처음의 요소를 추가하기!
let nums02 = [2, 3, 4, 5];
const newNum = 1;
const nums02Length = nums02.length;

for (let i = nums02Length; i > 0; i--) {
    nums02[i] = nums02[i - 1];
}
nums02[0] = newNum;
console.log(nums02); // 1,2,3,4,5


// 앞의 방법을 unshift()를 사용하여 단순하게 해결
let nums03 = [2, 3, 4, 5];
console.log(nums03); // 2,3,4,5

nums03.unshift(newNum);
console.log(nums03); // 1,2,3,4,5

nums03 = [3, 4, 5];
nums03.unshift(newNum, 2);
console.log(nums03); //  1,2,3,4,5
