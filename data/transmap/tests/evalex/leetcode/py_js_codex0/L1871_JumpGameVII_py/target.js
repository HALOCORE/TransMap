function f_gold(s, minJump, maxJump) {
    let n = s.length;
    let dp = Array(n).fill(false);
    dp[0] = true;
    let pre_sum = Array(n + 1).fill(0);
    pre_sum[1] = 1;
    for (let i = 1; i < n; i++) {
        if (s[i] == '0') {
            let l = Math.max(0, i - maxJump);
            let r = i - minJump;
            if (r >= l && pre_sum[r + 1] - pre_sum[l] > 0) {
                dp[i] = true;
            }
        }
        pre_sum[i + 1] = pre_sum[i] + dp[i];
    }
    return dp[n - 1];
}

