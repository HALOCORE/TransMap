const f_gold = (stones) => {
    let n = stones.length;
    let dp = Array(n).fill(0).map(() => Array(n).fill(false));
    dp[0][0] = true;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            let k = stones[i] - stones[j];
            if (k > j + 1) {
                continue;
            }
            dp[i][k] = dp[j][k - 1] || dp[j][k] || dp[j][k + 1];
            if (i == n - 1 && dp[i][k]) {
                return true;
            }
        }
    }
    return false;
}

