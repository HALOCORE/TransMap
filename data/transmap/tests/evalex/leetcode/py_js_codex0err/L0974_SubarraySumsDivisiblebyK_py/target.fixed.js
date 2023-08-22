function f_gold(nums, k) {
    var ans = 0, s = 0;
    var counter = { 0: 1 };
    for (var i = 0; i < nums.length; i++) {
        s += nums[i];
        ans += s % k in counter ? counter[s % k] : 0;
        counter[s % k] = s % k in counter ? counter[s % k] + 1 : 1;
    }
    return ans;
}

