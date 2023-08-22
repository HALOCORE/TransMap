function f_gold(arr, difference) {
    var dp = {};
    var ans = 1;
    for (var i = 0; i < arr.length; i++) {
        dp[arr[i]] = dp[arr[i] - difference] + 1;
        ans = Math.max(ans, dp[arr[i]]);
    }
    return ans;
}

