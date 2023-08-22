
const f_gold = (nums) => {
    let stk = [];
    let ans = 0;
    let n = nums.length;
    let dp = Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        while (stk.length && nums[i] > nums[stk[stk.length - 1]]) {
            dp[i] = Math.max(dp[i] + 1, dp[stk.pop()]);
        }
        stk.push(i);
    }
    return Math.max(...dp);
}

