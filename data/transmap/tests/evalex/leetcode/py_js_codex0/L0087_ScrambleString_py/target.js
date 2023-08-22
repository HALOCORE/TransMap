function f_gold(s1, s2) {
    let n = s1.length;
    let dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            dp[i][j] = new Array(n + 1);
            for (let k = 0; k < n + 1; k++) {
                dp[i][j][k] = false;
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            dp[i][j][1] = s1[i] == s2[j];
        }
    }
    for (let l = 2; l < n + 1; l++) {
        for (let i1 = 0; i1 < n - l + 1; i1++) {
            for (let i2 = 0; i2 < n - l + 1; i2++) {
                for (let i = 1; i < l; i++) {
                    if (dp[i1][i2][i] && dp[i1 + i][i2 + i][l - i]) {
                        dp[i1][i2][l] = true;
                        break;
                    }
                    if (dp[i1][i2 + l - i][i] && dp[i1 + i][i2][l - i]) {
                        dp[i1][i2][l] = true;
                        break;
                    }
                }
            }
        }
    }
    return dp[0][0][n];
}

