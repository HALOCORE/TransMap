function f_gold(nums) {
    var f = 0;
    for (var i = 0; i < nums.length; i++) {
        f += i * nums[i];
    }
    var n = nums.length;
    var s = 0;
    for (var i = 0; i < nums.length; i++) {
        s += nums[i];
    }
    var ans = f;
    for (var i = 1; i < n; i++) {
        f = f + s - n * nums[n - i];
        ans = Math.max(ans, f);
    }
    return ans;
}

