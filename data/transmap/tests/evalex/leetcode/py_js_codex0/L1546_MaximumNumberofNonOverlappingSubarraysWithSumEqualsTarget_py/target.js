function f_gold(nums, target) {
    var i = 0;
    var n = nums.length;
    var ans = 0;
    while (i < n) {
        var s = 0;
        var seen = new Set([0]);
        while (i < n) {
            s += nums[i];
            if (seen.has(s - target)) {
                ans += 1;
                break;
            }
            i += 1;
            seen.add(s);
        }
        i += 1;
    }
    return ans;
}

