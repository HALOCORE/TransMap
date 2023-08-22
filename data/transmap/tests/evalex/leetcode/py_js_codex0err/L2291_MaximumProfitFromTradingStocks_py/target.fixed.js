function f_gold(present, future, budget) {
    var arr = [];
    for (let i = 0; i < present.length; i++) {
        if (future[i] > present[i]) {
            arr.push([present[i], future[i] - present[i]]);
        }
    }
    var dp = Array(budget + 1).fill(0);
    for (var [v, w] of arr) {
        for (var j = budget; j > v - 1; j--) {
            dp[j] = Math.max(dp[j], dp[j - v] + w);
        }
    }
    return dp.at(-1);
}

