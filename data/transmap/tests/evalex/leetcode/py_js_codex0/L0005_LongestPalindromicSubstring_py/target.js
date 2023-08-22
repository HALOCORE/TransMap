function f_gold(s) {
    let n = s.length;
    let dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n);
    }
    let start = 0;
    let mx = 1;
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < j + 1; i++) {
            if (j - i < 2) {
                dp[i][j] = s[i] == s[j];
            }
            else {
                dp[i][j] = dp[i + 1][j - 1] && s[i] == s[j];
            }
            if (dp[i][j] && mx < j - i + 1) {
                start = i;
                mx = j - i + 1;
            }
        }
    }
    return s.substring(start, start + mx);
}

