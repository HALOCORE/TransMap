function f_gold(cuboids) {
    for (let c of cuboids) {
        c.sort();
    }
    cuboids.sort();
    let n = cuboids.length;
    let dp = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (cuboids[j][1] <= cuboids[i][1] && cuboids[j][2] <= cuboids[i][2]) {
                dp[i] = Math.max(dp[i], dp[j]);
            }
        }
        dp[i] += cuboids[i][2];
    }
    return Math.max(...dp);
}

