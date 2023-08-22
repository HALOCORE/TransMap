function f_gold(nums, k) {
    var mp = { 0: -1 };
    var s = ans = 0;
    for (var i = 0; i < nums.length; i++) {
        s += nums[i];
        if (s - k in mp) {
            ans = Math.max(ans, i - mp[s - k]);
        }
        if (!(s in mp)) {
            mp[s] = i;
        }
    }
    return ans;
}

