// 2.4.2 배열의 요소를 삭제하기
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
nums.pop();
console.log(nums); // 1,2,3,4,5,6,7,8

for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i + 1];
}
console.log(nums); // 2,3,4,5,6,7,8,   <-  마지막은 undefined 이다.
console.log(nums.length);   // 8 <- 배열의 크기는 바뀌지 않음.

let deleted = nums.shift();
console.log(nums); // 3,4,5,6,7,8,   <-  마지막은 undefined 이다.
console.log(nums.length);   // 7 <- 배열의 크기도 1줄어듬
console.log(deleted)  // 2  <- shift에 의해 배열에서 제거된 값이 들어감.

nums.push(deleted);
console.log(nums); // 3,4,5,6,7,8,,2
console.log(nums.length);   // 8
