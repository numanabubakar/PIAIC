function twoSum(nums: number[], target: number): number[] {
  const newarr: number[] = [];
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
const ans: number[] = twoSum([3, 3], 6);
console.log(ans);
