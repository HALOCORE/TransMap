
function f_gold(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let dp = new Array(m + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n + 1);
    }
    let mx = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == '1') {
                dp[i + 1][j + 1] = Math.min(dp[i][j + 1], dp[i + 1][j], dp[i][j]) + 1;
                mx = Math.max(mx, dp[i + 1][j + 1]);
            }
        }
    }
    return mx * mx;
}

