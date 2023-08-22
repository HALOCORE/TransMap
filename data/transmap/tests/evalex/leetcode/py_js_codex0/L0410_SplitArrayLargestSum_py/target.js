function f_gold(nums, m) {
    function check(x) {
        var s = 0;
        var cnt = 1;
        for (var i = 0; i < nums.length; i++) {
            if (s + nums[i] > x) {
                cnt += 1;
                s = nums[i];
            }
            else {
                s += nums[i];
            }
        }
        return cnt <= m;
    }
    var left = Math.max.apply(null, nums);
    var right = nums.reduce(function (a, b) { return a + b; });
    while (left < right) {
        var mid = (left + right) >> 1;
        if (check(mid)) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
}

