function f_gold(nums) {
    var n = nums.length;
    var presum = [0];
    for (var i = 0; i < n; i++) {
        presum[i + 1] = presum[i] + nums[i];
    }
    var res = [];
    for (var i = 0; i < nums.length; i++) {
        var t = nums[i] * i - presum[i] + presum[n] - presum[i + 1] - nums[i] * (n - i - 1);
        res.push(t);
    }
    return res;
}

