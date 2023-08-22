function f_gold(n) {
    let dp = Array(n).fill(1);
    let p2 = 0;
    let p3 = 0;
    let p5 = 0;
    for (let i = 1; i < n; i++) {
        let next2 = dp[p2] * 2;
        let next3 = dp[p3] * 3;
        let next5 = dp[p5] * 5;
        dp[i] = Math.min(next2, next3, next5);
        if (dp[i] == next2) {
            p2 += 1;
        }
        if (dp[i] == next3) {
            p3 += 1;
        }
        if (dp[i] == next5) {
            p5 += 1;
        }
    }
    return dp[n - 1];
}

