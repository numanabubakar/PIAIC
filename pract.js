"use strict";
function twoSum(nums, target) {
    const newarr = [];
    for (var i = 0; i < nums.length; i++) {
        const n = nums[i];
        const m = target - n;
        if (n != m || nums.length == 2) {
            if (nums.includes(m)) {
                const secondValue = nums.indexOf(m);
                newarr.push(i);
                newarr.push(secondValue);
                break;
            }
        }
    }
    return newarr;
}
const ans = twoSum([3, 3], 6);
console.log(ans);
