function f_gold(nums, k) {
    var n = nums.length;
    var presum = new Array(n + 1);
    for (var i = 0; i < n; i++) {
        presum[i + 1] = presum[i] + nums[i];
    }
    return [
        -1
        if (i - k < 0 || i + k >= n)
        else (presum[i + k + 1] - presum[i - k]) / (k * 2 + 1)
        for (var i = 0; i < n)
    ];
}

