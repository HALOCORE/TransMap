
function f_gold(s) {
    let mod = 10 ** 9 + 7;
    let n = s.length;
    let dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            dp[i][j] = new Array(4);
            for (let k = 0; k < 4; k++) {
                dp[i][j][k] = 0;
            }
        }
    }
    for (let i = 0; i < n; i++) {
        let c = s.charAt(i);
        dp[i][i][c.charCodeAt(0) - 97] = 1;
    }
    for (let l = 2; l <= n; l++) {
        for (let i = 0; i <= n - l; i++) {
            let j = i + l - 1;
            for (let c of "abcd") {
                let k = c.charCodeAt(0) - 97;
                if (s.charAt(i) == s.charAt(j) && s.charAt(i) == c) {
                    dp[i][j][k] = 2 + dp[i + 1][j - 1].reduce((a, b) => a + b, 0);
                } else if (s.charAt(i) == c) {
                    dp[i][j][k] = dp[i][j - 1][k];
                } else if (s.charAt(j) == c) {
                    dp[i][j][k] = dp[i + 1][j][k];
                } else {
                    dp[i][j][k] = dp[i + 1][j - 1][k];
                }
            }
        }
    }
    return dp[0][n - 1].reduce((a, b) => a + b, 0) % mod;
}

