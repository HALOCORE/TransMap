exports.__esModule = true;
exports.f_gold = function (n) {
    if (n == 1)
        return 6;
    var mod = Math.pow(10, 9) + 7;
    var dp = Array(n + 1);
    for (var i = 0; i < n + 1; i++) {
        dp[i] = Array(6);
        for (var j = 0; j < 6; j++) {
            dp[i][j] = Array(6).fill(0);
        }
    }
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            if (gcd(i + 1, j + 1) == 1 && i != j)
                dp[2][i][j] = 1;
        }
    }
    for (var k = 3; k < n + 1; k++) {
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 6; j++) {
                if (gcd(i + 1, j + 1) == 1 && i != j) {
                    for (var h = 0; h < 6; h++) {
                        if (gcd(h + 1, i + 1) == 1 && h != i && h != j)
                            dp[k][i][j] += dp[k - 1][h][i];
                    }
                }
            }
        }
    }
    var ans = 0;
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            ans += dp[n][i][j];
        }
    }
    return ans % mod;
};
var gcd = function (a, b) {
    if (a == 0)
        return b;
    return gcd(b % a, a);
};

