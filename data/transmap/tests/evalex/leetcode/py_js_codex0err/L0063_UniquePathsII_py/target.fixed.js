function f_gold(obstacleGrid) {
    var m, n;
    m = obstacleGrid.length;
    n = obstacleGrid[0].length;
    var dp = new Array(m);
    for (var _i = 0; _i < m; _i++) {
        dp[_i] = new Array(n).fill(0);
    }
    for (var i = 0; i < m; i++) {
        if (obstacleGrid[i][0] == 1) {
            break;
        }
        dp[i][0] = 1;
    }
    for (var j = 0; j < n; j++) {
        if (obstacleGrid[0][j] == 1) {
            break;
        }
        dp[0][j] = 1;
    }
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            if (obstacleGrid[i][j] == 0) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp[m - 1][n - 1];
}

