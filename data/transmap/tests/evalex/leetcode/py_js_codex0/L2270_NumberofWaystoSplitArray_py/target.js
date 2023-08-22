function f_gold(nums) {
    var left = 0;
    var right = nums.reduce(function (a, b) { return a + b; });
    var cnt = 0;
    for (var v of nums.slice(0, -1)) {
        left += v;
        right -= v;
        if (left >= right) {
            cnt += 1;
        }
    }
    return cnt;
}

