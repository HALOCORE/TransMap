function f_gold(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let coin of coins) {
        for (let j = coin; j < amount + 1; j++) {
            dp[j] = Math.min(dp[j], dp[j - coin] + 1);
        }
    }
    return dp[dp.length - 1] > amount ? -1 : dp[dp.length - 1];
}

