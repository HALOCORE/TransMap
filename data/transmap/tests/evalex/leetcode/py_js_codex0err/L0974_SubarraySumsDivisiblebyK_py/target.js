function f_gold(nums, k) {
    var ans = s = 0;
    var counter = { 0: 1 };
    for (var i = 0; i < nums.length; i++) {
        s += nums[i];
        ans += counter[s % k];
        counter[s % k] += 1;
    }
    return ans;
}

