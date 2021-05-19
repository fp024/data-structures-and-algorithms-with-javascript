// 2.2.4 배열 전체에 적용되는 기능

// 배열을 다른 배열로 할당
let nums = [];
for (let i = 0; i < 10; i++) {
    nums[i] = i + 1;
}

let nums2 = nums;
console.log("nums2:" + nums2);  // nums2:1,2,3,4,5,6,7,8,9,10

nums[0] = 'new value';

console.log("nums :" + nums);    // nums :new value,2,3,4,5,6,7,8,9,10
// 배열 참조만 다른 이름으로 할당 되기 때문에 nums, nums2가 같은 배열을 참조하고 있음.
console.log("nums2:" + nums2);   // nums2:new value,2,3,4,5,6,7,8,9,10

// 저자님은 위의 경우를 얕은 복사라고 함.

