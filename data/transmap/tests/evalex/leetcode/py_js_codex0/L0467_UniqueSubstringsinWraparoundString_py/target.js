function f_gold(p) {
    var dp = Array(26).fill(0);
    var k = 0;
    for (var i = 0; i < p.length; i++) {
        if (i && (p.charCodeAt(i) - p.charCodeAt(i - 1)) % 26 == 1) {
            k += 1;
        }
        else {
            k = 1;
        }
        var idx = p.charCodeAt(i) - 'a'.charCodeAt(0);
        dp[idx] = Math.max(dp[idx], k);
    }
    return dp.reduce(function (a, b) { return a + b; }, 0);
}

