function f_gold(nums) {
    let n = nums.length;
    let dp = Array(n).fill(0).map(() => Array(1001).fill(1));
    let ans = 0;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            let d = nums[i] - nums[j] + 500;
            dp[i][d] = Math.max(dp[i][d], dp[j][d] + 1);
            ans = Math.max(ans, dp[i][d]);
        }
    }
    return ans;
}

