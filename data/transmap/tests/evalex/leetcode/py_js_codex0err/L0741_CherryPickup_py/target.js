
function f_gold(grid) {
    let n = grid.length;
    let dp = Array(2 * n - 1);
    for (let i = 0; i < 2 * n - 1; i++) {
        dp[i] = Array(n);
        for (let j = 0; j < n; j++) {
            dp[i][j] = Array(n).fill(-Infinity);
        }
    }
    dp[0][0][0] = grid[0][0];
    for (let k = 1; k < 2 * n - 1; k++) {
        for (let i1 = 0; i1 < n; i1++) {
            for (let i2 = 0; i2 < n; i2++) {
                let j1 = k - i1;
                let j2 = k - i2;
                if (
                    !(0 <= j1 && j1 < n) ||
                    !(0 <= j2 && j2 < n) ||
                    grid[i1][j1] == -1 ||
                    grid[i2][j2] == -1
                ) {
                    continue;
                }
                let t = grid[i1][j1];
                if (i1 != i2) {
                    t += grid[i2][j2];
                }
                for (let x1 = i1 - 1; x1 <= i1 + 1; x1++) {
                    for (let x2 = i2 - 1; x2 <= i2 + 1; x2++) {
                        if (x1 >= 0 && x2 >= 0) {
                            dp[k][i1][i2] = Math.max(
                                dp[k][i1][i2],
                                dp[k - 1][x1][x2] + t
                            );
                        }
                    }
                }
            }
        }
    }
    return Math.max(0, dp[2 * n - 2][n - 1][n - 1]);
}

