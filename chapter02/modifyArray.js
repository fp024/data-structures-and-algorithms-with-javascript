// 2.2.2 배열 요소 접근하고 값 고치기
let nums = [];
for (let i = 0; i < 20; i++) {
    nums[i] = i + 1;
}
console.log(nums);

let sum = 0;
for (const num of nums) {
    sum += num;
}
console.log(sum);
