function f_gold(nums) {
    var s = nums.reduce(function (a, b) { return a + b; });
    if (s % 2 != 0) {
        return false;
    }
    var n = s >> 1;
    var dp = new Array(n + 1).fill(false);
    dp[0] = true;
    for (var v of nums) {
        for (var j = n; j >= v; j--) {
            dp[j] = dp[j] || dp[j - v];
        }
    }
    return dp[n];
}

