function f_gold(nums, k) {
    var s = 0;
    for (var i = 0; i < k; i++) {
        s += nums[i];
    }
    var ans = s;
    for (var i = k; i < nums.length; i++) {
        s += nums[i] - nums[i - k];
        ans = Math.max(ans, s);
    }
    return ans / k;
}

