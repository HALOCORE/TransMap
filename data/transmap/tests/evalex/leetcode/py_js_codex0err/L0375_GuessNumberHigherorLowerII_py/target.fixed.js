
function f_gold(n) {
    var dp = Array(n + 10).fill(0).map(() => Array(n + 10).fill(0));
    for (var l = 2; l < n + 1; l++) {
        for (var i = 1; i < n - l + 2; i++) {
            var j = i + l - 1;
            dp[i][j] = Number.POSITIVE_INFINITY;
            for (var k = i; k < j + 1; k++) {
                var t = Math.max(dp[i][k - 1], dp[k + 1][j]) + k;
                dp[i][j] = Math.min(dp[i][j], t);
            }
        }
    }
    return dp[1][n];
}

