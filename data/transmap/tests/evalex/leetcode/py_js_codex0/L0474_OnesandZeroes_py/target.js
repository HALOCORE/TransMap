
function f_gold(strs, m, n) {
    let dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
    let t = strs.map(s => [s.split("0").length - 1, s.split("1").length - 1]);
    for (let k = 0; k < strs.length; k++) {
        let n0 = t[k][0];
        let n1 = t[k][1];
        for (let i = m; i > n0 - 1; i--) {
            for (let j = n; j > n1 - 1; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - n0][j - n1] + 1);
            }
        }
    }
    return dp[m][n];
}

