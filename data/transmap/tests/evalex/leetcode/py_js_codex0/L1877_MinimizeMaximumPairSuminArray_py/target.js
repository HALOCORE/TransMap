function f_gold(nums) {
    nums.sort();
    var res = 0;
    var n = nums.length;
    for (var i = 0; i < (n >> 1); i++) {
        res = Math.max(res, nums[i] + nums[n - i - 1]);
    }
    return res;
}

