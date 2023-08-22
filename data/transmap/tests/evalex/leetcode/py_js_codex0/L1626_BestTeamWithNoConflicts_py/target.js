function f_gold(scores, ages) {
    var nums = Array.from(zip(ages, scores));
    nums.sort();
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

