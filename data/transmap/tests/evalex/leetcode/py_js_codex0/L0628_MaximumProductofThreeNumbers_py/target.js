function f_gold(nums) {
    var n = nums.length;
    nums.sort(function (a, b) { return a - b; });
    return Math.max(nums[0] * nums[1] * nums[n - 1], nums[n - 1] * nums[n - 2] * nums[n - 3]);
}

