function fourSum(nums, target) {
  if (!nums || nums.length < 4) {
    return []; // If input array is null or has less than 4 elements, return an empty array
  }
  nums.sort((a, b) => a - b); // Sort the input array in ascending order
  const result = []; // Array to store the quadruplets
  const n = nums.length; // Length of the input array
  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue; // Skip duplicates in the first element
    }
    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue; // Skip duplicates in the second element
      }
      let left = j + 1; // Initialize left pointer
      let right = n - 1; // Initialize right pointer
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right]; // Calculate sum of four elements
        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]); // If sum is equal to target, add quadruplet to result
          left++;
          right--;
          while (left < right && nums[left] === nums[left - 1]) {
            left++; // Skip duplicates in left pointer
          }
          while (left < right && nums[right] === nums[right + 1]) {
            right--; // Skip duplicates in right pointer
          }
        } else if (sum < target) {
          left++; // If sum is less than target, increment left pointer
        } else {
          right--; // If sum is greater than target, decrement right pointer
        }
      }
    }
  }
  return result;
}
