function f_gold(amount, coins) {
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (let coin of coins) {
        for (let j = coin; j < amount + 1; j++) {
            dp[j] += dp[j - coin];
        }
    }
    return dp[dp.length - 1];
}

