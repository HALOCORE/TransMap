function f_gold(K, N) {
    var dp = [1];
    for (var i = 1; i < K; i++) {
        dp.push(1);
    }
    while (dp[K - 1] < N) {
        for (var i = K - 1; i > 0; i--) {
            dp[i] = dp[i] + dp[i - 1] + 1;
        }
        dp[0] = dp[0] + 1;
    }
    return dp[0];
}

