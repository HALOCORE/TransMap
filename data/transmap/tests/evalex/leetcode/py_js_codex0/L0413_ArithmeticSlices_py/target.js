function f_gold(nums) {
    let n = nums.length;
    let dp = new Array(n).fill(0);
    for (let i = 2; i < n; i++) {
        if (nums[i] + nums[i - 2] == (nums[i - 1] << 1)) {
            dp[i] = 1 + dp[i - 1];
        }
    }
    return dp.reduce((a, b) => a + b, 0);
}

