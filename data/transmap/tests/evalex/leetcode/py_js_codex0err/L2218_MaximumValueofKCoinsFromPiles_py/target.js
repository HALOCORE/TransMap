
function f_gold(piles, k) {
    var presum = piles.map(function (p) {
        return p.reduce(function (acc, curr) {
            return acc + curr;
        }, 0);
    });
    var dp = new Array(k + 1).fill(0);
    for (var s = 0; s < presum.length; s++) {
        for (var j = k; j >= 0; j--) {
            for (var idx = 0; idx < presum[s].length; idx++) {
                if (j >= idx) {
                    dp[j] = Math.max(dp[j], dp[j - idx] + presum[s][idx]);
                }
            }
        }
    }
    return dp[k];
}

