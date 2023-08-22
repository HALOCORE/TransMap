function f_gold(word1, word2) {
    var m = word1.length;
    var n = word2.length;
    var dp = new Array(m + 1);
    for (var i = 0; i < m + 1; i++) {
        dp[i] = new Array(n + 1);
        dp[i][0] = i;
    }
    for (var j = 0; j < n + 1; j++) {
        dp[0][j] = j;
    }
    for (var i = 1; i < m + 1; i++) {
        for (var j = 1; j < n + 1; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }
            else {
                dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
            }
        }
    }
    return dp[m][n];
}

