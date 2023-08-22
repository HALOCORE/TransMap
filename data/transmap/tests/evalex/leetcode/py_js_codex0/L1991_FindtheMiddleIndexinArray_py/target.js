function f_gold(nums) {
    var s = nums.reduce(function (a, b) { return a + b; }, 0);
    var total = 0;
    for (var i = 0; i < nums.length; i++) {
        total += nums[i];
        if (total - nums[i] == s - total) {
            return i;
        }
    }
    return -1;
}

