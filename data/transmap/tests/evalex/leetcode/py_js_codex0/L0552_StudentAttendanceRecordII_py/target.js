
function f_gold(n) {
    var mod = 1000000007;
    var dp = new Array(n);
    for (var _i = 0; _i < n; _i++) {
        dp[_i] = new Array(2);
        for (var _j = 0; _j < 2; _j++) {
            dp[_i][_j] = new Array(3);
            for (var _k = 0; _k < 3; _k++) {
                dp[_i][_j][_k] = 0;
            }
        }
    }
    dp[0][0][0] = dp[0][0][1] = dp[0][1][0] = 1;
    for (var i = 1; i < n; i++) {
        dp[i][1][0] = (dp[i - 1][0][0] + dp[i - 1][0][1] + dp[i - 1][0][2]) % mod;
        dp[i][0][1] = dp[i - 1][0][0];
        dp[i][0][2] = dp[i - 1][0][1];
        dp[i][1][1] = dp[i - 1][1][0];
        dp[i][1][2] = dp[i - 1][1][1];
        dp[i][0][0] = (dp[i - 1][0][0] + dp[i - 1][0][1] + dp[i - 1][0][2]) % mod;
        dp[i][1][0] = (dp[i][1][0] + dp[i - 1][1][0] + dp[i - 1][1][1] + dp[i - 1][1][2]) % mod;
    }
    var ans = 0;
    for (var j = 0; j < 2; j++) {
        for (var k = 0; k < 3; k++) {
            ans = (ans + dp[n - 1][j][k]) % mod;
        }
    }