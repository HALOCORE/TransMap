function f_gold(nums, k) {
    var s = 0;
    var mp = { 0: -1 };
    for (var i = 0; i < nums.length; i++) {
        s += nums[i];
        var r = s % k;
        if (r in mp && i - mp[r] >= 2) {
            return true;
        }
        if (!(r in mp)) {
            mp[r] = i;
        }
    }
    return false;
}

