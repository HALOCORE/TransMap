function f_gold(nums1, nums2) {
    var m = nums1.length;
    var n = nums2.length;
    var dp = new Array(m + 1);
    for (var i = 0; i < m + 1; i++) {
        dp[i] = new Array(n + 1);
    }
    for (var i = 0; i < m + 1; i++) {
        for (var j = 0; j < n + 1; j++) {
            dp[i][j] = 0;
        }
    }
    var ans = 0;
    for (var i = 1; i < m + 1; i++) {
        for (var j = 1; j < n + 1; j++) {
            if (nums1[i - 1] == nums2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
                ans = Math.max(ans, dp[i][j]);
            }
        }
    }
    return ans;
}

