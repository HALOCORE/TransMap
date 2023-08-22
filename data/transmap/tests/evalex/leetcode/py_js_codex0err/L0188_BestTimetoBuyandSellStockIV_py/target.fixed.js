
function f_gold (k, prices) {
    var n = prices.length;
    if (n < 2) {
        return 0;
    }
    var dp = new Array(n);
    for (var i = 0; i < n; i++) {
        dp[i] = new Array(k + 1);
        for (var j = 0; j < k + 1; j++) {
            dp[i][j] = new Array(2).fill(0);
        }
    }
    for (var i = 1; i < k + 1; i++) {
        dp[0][i][1] = -prices[0];
    }
    for (var i = 1; i < n; i++) {
        for (var j = 1; j < k + 1; j++) {
            dp[i][j][0] = Math.max(dp[i - 1][j][1] + prices[i], dp[i - 1][j][0]);
            dp[i][j][1] = Math.max(dp[i - 1][j - 1][0] - prices[i], dp[i - 1][j][1]);
        }
    }
    return dp[n - 1][k][0];
}

