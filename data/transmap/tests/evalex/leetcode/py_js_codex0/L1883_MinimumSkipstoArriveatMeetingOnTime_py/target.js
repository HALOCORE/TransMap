
function f_gold(dist, speed, hoursBefore) {
    let n = dist.length;
    let dp = Array(n + 1).fill(0).map(() => Array(n + 1).fill(Number.POSITIVE_INFINITY));
    dp[0][0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= i; j++) {
            if (i != j) {
                dp[i][j] = Math.min(
                    dp[i][j],
                    ((dp[i - 1][j] + dist[i - 1] - 1) / speed + 1) * speed,
                );
            }
            if (j > 0) {
                dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1] + dist[i - 1]);
            }
        }
    }
    for (let i = 0; i <= n; i++) {
        if (dp[n][i] <= hoursBefore * speed) {
            return i;
        }
    }
    return -1;
}

