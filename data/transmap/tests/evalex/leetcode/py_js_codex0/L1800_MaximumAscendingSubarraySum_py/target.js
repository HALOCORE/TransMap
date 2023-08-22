function f_gold(nums) {
    var res = 0;
    var cur = nums[0];
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            cur += nums[i];
        }
        else {
            res = Math.max(res, cur);
            cur = nums[i];
        }
    }
    res = Math.max(res, cur);
    return res;
}

