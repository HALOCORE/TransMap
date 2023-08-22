
function f_gold(nums) {
    var maxLen = 0;
    var ans = 0;
    var n = nums.length;
    var dp = new Array(n).fill(1);
    var cnt = new Array(n).fill(1);
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    cnt[i] = cnt[j];
                }
                else if (dp[j] + 1 == dp[i]) {
                    cnt[i] += cnt[j];
                }
            }
        }
        if (dp[i] > maxLen) {
            maxLen = dp[i];
            ans = cnt[i];
        }
        else if (dp[i] == maxLen) {
            ans += cnt[i];
        }
    }
    return ans;
}

