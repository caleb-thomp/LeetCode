var threeSum = function(nums) {
  const results = [];
  nums.sort((a, b) => a - b); // sort the array in ascending order
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue; // skip duplicates
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        results.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) {
          left++; // skip duplicates
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--; // skip duplicates
        }
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return results;
};