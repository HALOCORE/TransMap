
function f_gold(nums, target) {
    var s = nums.reduce(function (a, b) {
        return a + b;
    });
    if (s < target || (s - target) % 2 != 0) return 0;
    var n = (s - target) / 2;
    var dp = Array(n + 1).fill(0);
    dp[0] = 1;
    for (var v of nums) {
        for (var j = n; j > v - 1; j--) {
            dp[j] += dp[j - v];
        }
    }
    return dp[dp.length - 1];
}

