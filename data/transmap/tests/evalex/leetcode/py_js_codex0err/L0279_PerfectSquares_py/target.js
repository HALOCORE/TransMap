function f_gold(n) {
    var dp = new Array(n + 1);
    for (var i = 1; i <= n; i++) {
        var j = 1;
        var mi = Number.POSITIVE_INFINITY;
        while (j * j <= i) {
            mi = Math.min(mi, dp[i - j * j]);
            j += 1;
        }
        dp[i] = mi + 1;
    }
    return dp[n];
}

