
function f_gold(s, p) {
    let m = s.length;
    let n = p.length;
    if (n == 0) {
        return m == 0;
    }
    let dp = new Array(m + 1);
    for (let i = 0; i < m + 1; i++) {
        dp[i] = new Array(n + 1);
    }
    for (let i = 0; i < m + 1; i++) {
        for (let j = 0; j < n + 1; j++) {
            dp[i][j] = false;
        }
    }
    dp[0][0] = true;
    for (let j = 2; j < n + 1; j++) {
        if (p[j - 1] == '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if (s[i - 1] == p[j - 1] || p[j - 1] == '.') {
                dp[i][j] = dp[i - 1][j - 1];
            }
            else if (p[j - 1] == '*') {
                if (p[j - 2] == '.' || p[j - 2] == s[i - 1]) {
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j];
                }
                else {
                    dp[i][j] = dp[i][j - 2];
                }
            }
        }
    }
    return dp[m][n];
}

