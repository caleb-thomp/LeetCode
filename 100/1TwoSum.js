function twoSum(nums, target) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (hash.hasOwnProperty(complement)) {
            return [hash[complement], i];
        }
        hash[nums[i]] = i;
    }
    return [];
}
