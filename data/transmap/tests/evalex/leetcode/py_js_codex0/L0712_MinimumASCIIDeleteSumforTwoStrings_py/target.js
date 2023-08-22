function f_gold(s1, s2) {
    var m = s1.length;
    var n = s2.length;
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
        dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
    }
    for (var j = 1; j < n + 1; j++) {
        dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
    }
    for (var i = 1; i < m + 1; i++) {
        for (var j = 1; j < n + 1; j++) {
            if (s1[i - 1] == s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }
            else {
                dp[i][j] = Math.min(dp[i - 1][j] + s1.charCodeAt(i - 1), dp[i][j - 1] + s2.charCodeAt(j - 1));
            }
        }
    }
    return dp[m][n];
}

