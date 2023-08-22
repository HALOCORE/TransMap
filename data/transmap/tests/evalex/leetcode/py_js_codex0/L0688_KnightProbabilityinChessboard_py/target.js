function f_gold(n, k, row, column) {
    let dp = new Array(k + 1);
    for (let i = 0; i < k + 1; i++) {
        dp[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            dp[i][j] = new Array(n);
            for (let l = 0; l < n; l++) {
                dp[i][j][l] = 0;
            }
        }
    }
    for (let l = 0; l < k + 1; l++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (l == 0) {
                    dp[l][i][j] = 1;
                }
                else {
                    for (let a = -2; a <= 2; a++) {
                        for (let b = -2; b <= 2; b++) {
                            if (Math.abs(a) + Math.abs(b) == 3) {
                                let x = i + a;
                                let y = j + b;
                                if (x >= 0 && x < n && y >= 0 && y < n) {
                                    dp[l][i][j] += dp[l - 1][x][y] / 8;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return dp[k][row][column];
}

