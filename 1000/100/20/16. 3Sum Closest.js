function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b); // Sort the input array in ascending order
  let closestSum = Infinity; // Initialize closest sum to a large value
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1; // Pointer at the start of the remaining array
    let right = nums.length - 1; // Pointer at the end of the remaining array
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]; // Calculate the current sum
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum; // Update closest sum if the current sum is closer to the target
      }
      if (sum === target) {
        return sum; // If the sum is exactly equal to target, return it
      } else if (sum < target) {
        left++; // If the sum is less than target, move left pointer to the right
      } else {
        right--; // If the sum is greater than target, move right pointer to the left
      }
    }
  }
  return closestSum; // Return the closest sum found
}
