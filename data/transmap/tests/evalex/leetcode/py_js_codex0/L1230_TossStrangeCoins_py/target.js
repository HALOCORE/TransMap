function f_gold(prob, target) {
    var dp = Array(target + 1).fill(0);
    dp[0] = 1;
    for (var v of prob) {
        for (var j = target; j >= 0; j--) {
            dp[j] *= 1 - v;
            if (j >= 1) {
                dp[j] += dp[j - 1] * v;
            }
        }
    }
    return dp[dp.length - 1];
}

