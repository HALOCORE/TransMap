
function f_gold(n, k) {
    var mod = 1000000007;
    var dp = Array(k + 1).fill(0);
    var pre = Array(k + 2).fill(0);
    for (var i = 1; i <= n; i++) {
        dp[0] = 1;
        for (var j = 1; j <= k; j++) {
            dp[j] = (pre[j + 1] - pre[Math.max(0, j - i + 1)] + mod) % mod;
        }
        for (var j = 1; j <= k + 1; j++) {
            pre[j] = (pre[j - 1] + dp[j - 1]) % mod;
        }
    }
    return dp[k];
}

