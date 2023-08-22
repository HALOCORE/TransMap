function f_gold(n) {
    var dp = [1, 1, 1, 1, 1];
    var MOD = 1000000007;
    for (var _ = 0; _ < n - 1; _++) {
        dp = [
            (dp[1] + dp[2] + dp[4]) % MOD,
            (dp[0] + dp[2]) % MOD,
            (dp[1] + dp[3]) % MOD,
            dp[2],
            (dp[2] + dp[3]) % MOD,
        ];
    }
    return dp.reduce((a, b) => a + b) % MOD;
}

