function f_gold(nums, target) {
    var dp = Array(target + 1).fill(0);
    dp[0] = 1;
    for (var i = 1; i <= target; i++) {
        for (var num of nums) {
            if (i >= num) {
                dp[i] += dp[i - num];
            }
        }
    }
    return dp[dp.length - 1];
}

