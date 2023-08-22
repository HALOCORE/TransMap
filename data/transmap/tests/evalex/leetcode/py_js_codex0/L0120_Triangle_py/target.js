function f_gold(triangle) {
    var n = triangle.length;
    var dp = Array(n + 1).fill(0);
    for (var i = n - 1; i >= 0; i--) {
        for (var j = 0; j <= i; j++) {
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
        }
    }
    return dp[0];
}

