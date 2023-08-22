function f_gold(nums) {
    var s = nums.reduce(function (a, b) { return a + b; }, 0);
    var presum = 0;
    for (var i = 0; i < nums.length; i++) {
        if ((presum << 1) == s - nums[i]) {
            return i;
        }
        presum += nums[i];
    }
    return -1;
}

