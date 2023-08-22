
function f_gold(nums) {
    nums = [1].concat(nums, [1]);
    var n = nums.length;
    var dp = new Array(n);
    for (var i = 0; i < n; i++) {
        dp[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            dp[i][j] = 0;
        }
    }
    for (var l = 2; l < n; l++) {
        for (var i = 0; i < n - l; i++) {
            var j = i + l;
            for (var k = i + 1; k < j; k++) {
                dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + nums[i] * nums[k] * nums[j]);
            }
        }
    }
    return dp[0][n - 1];
}

