
function f_gold(piles, k) {
    var presum = piles.map(function (p) {
        return [0].concat(p.map(
            (sum => value =>
                sum += value)(0)));
    });
    var dp = new Array(k + 1).fill(0);
    for (var s of presum) {
        for (var j = k; j >= 0; j--) {
            for (var idx = 0; idx < s.length; idx++) {
                if (j >= idx) {
                    dp[j] = Math.max(dp[j], dp[j - idx] + s[idx]);
                }
            }
        }
    }
    return dp[k];
}

