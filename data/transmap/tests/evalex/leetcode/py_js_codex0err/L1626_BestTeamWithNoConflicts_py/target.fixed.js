function f_gold(scores, ages) {
    var nums = Array.from(Array(scores.length), (_, k) => [ages[k], scores[k]]);
    nums.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
    var n = nums.length;
    var dp = nums.map(function (num) { return num[1]; });
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < i; j++) {
            if (nums[i][1] >= nums[j][1]) {
                dp[i] = Math.max(dp[i], dp[j] + nums[i][1]);
            }
        }
    }
    return Math.max.apply(Math, dp);
}

