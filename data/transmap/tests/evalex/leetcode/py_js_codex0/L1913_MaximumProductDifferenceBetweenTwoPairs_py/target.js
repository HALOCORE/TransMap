function f_gold(nums) {
    nums.sort();
    return nums[nums.length - 1] * nums[nums.length - 2] - nums[0] * nums[1];
}

