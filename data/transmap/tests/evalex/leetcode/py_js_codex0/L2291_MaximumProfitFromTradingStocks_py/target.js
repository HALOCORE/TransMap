function f_gold(present, future, budget) {
    var arr = [(a, b - a) for (a, b) in zip(present, future) if (b > a)];
    var dp = [0] * (budget + 1);
    for (var v, w in arr) {
        for (var j = budget; j > v - 1; j--) {
            dp[j] = Math.max(dp[j], dp[j - v] + w);
        }
    }
    return dp[-1];
}

