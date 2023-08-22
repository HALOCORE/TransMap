function f_gold(n) {
    var dp = Array(n + 1).fill(1);
    for (var i = 2; i <= n; i++) {
        for (var j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j);
        }
    }
    return dp[n];
}

