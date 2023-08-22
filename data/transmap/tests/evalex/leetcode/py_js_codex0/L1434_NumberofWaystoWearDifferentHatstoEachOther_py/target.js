
function f_gold (hats) {
    var d = new Map();
    for (var i = 0; i < hats.length; i++) {
        for (var v = 0; v < hats[i].length; v++) {
            if (d.has(hats[i][v])) {
                d.get(hats[i][v]).push(i);
            } else {
                d.set(hats[i][v], [i]);
            }
        }
    }
    var n = hats.length;
    var mx = 0;
    for (var i = 0; i < hats.length; i++) {
        mx = Math.max(mx, Math.max(...hats[i]));
    }
    var dp = new Array(mx + 1);
    for (var i = 0; i < mx + 1; i++) {
        dp[i] = new Array(1 << n).fill(0);
    }
    dp[0][0] = 1;
    var mod = 1000000007;
    for (var i = 1; i < mx + 1; i++) {
        for (var mask = 1; mask < (1 << n); mask++) {
            dp[i][mask] = dp[i - 1][mask];
            for (var j = 0; j < d.get(i).length; j++) {
                if ((mask >> d.get(i)[j]) & 1) {
                    dp[i][mask] += dp[i - 1][mask ^ (1 << d.get(i)[j])];
                }
            }
            dp[i][mask] %= mod;
        }
    }
    return dp[mx][(1 << n) - 1];
}

