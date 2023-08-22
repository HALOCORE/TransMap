function f_gold(text1, text2) {
    var m = text1.length;
    var n = text2.length;
    var dp = new Array(m + 1);
    for (var i = 0; i < m + 1; i++) {
        dp[i] = new Array(n + 1);
    }
    for (var i = 0; i < m + 1; i++) {
        for (var j = 0; j < n + 1; j++) {
            dp[i][j] = 0;
        }
    }
    for (var i = 1; i < m + 1; i++) {
        for (var j = 1; j < n + 1; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
}

