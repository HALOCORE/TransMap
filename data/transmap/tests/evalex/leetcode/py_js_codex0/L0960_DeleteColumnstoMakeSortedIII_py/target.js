function f_gold(strs) {
    let n = strs[0].length;
    let dp = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (strs.every(s => s[j] <= s[i])) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return n - Math.max(...dp);
}

