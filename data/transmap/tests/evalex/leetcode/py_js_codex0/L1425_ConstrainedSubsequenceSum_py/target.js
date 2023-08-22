
function f_gold(nums, k) {
    let n = nums.length;
    let dp = Array(n).fill(0);
    let ans = -Infinity;
    let q = [];
    for (let i = 0; i < n; i++) {
        let v = nums[i];
        if (q.length > 0 && i - q[0] > k) {
            q.shift();
        }
        dp[i] = Math.max(0, q.length == 0 ? 0 : dp[q[0]]) + v;
        while (q.length > 0 && dp[q[q.length - 1]] <= dp[i]) {
            q.pop();
        }
        q.push(i);
        ans = Math.max(ans, dp[i]);
    }
    return ans;
}

