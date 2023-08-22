function f_gold(stones) {
    var s = stones.reduce(function (a, b) { return a + b; });
    var m = stones.length;
    var n = s >> 1;
    var dp = new Array(n + 1);
    for (var i = 0; i < dp.length; i++) {
        dp[i] = 0;
    }
    for (var i = 0; i < stones.length; i++) {
        for (var j = n; j >= stones[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
        }
    }
    return s - dp[dp.length - 1] * 2;
}

