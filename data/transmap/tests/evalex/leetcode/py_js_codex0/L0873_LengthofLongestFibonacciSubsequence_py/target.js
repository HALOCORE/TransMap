function f_gold(arr) {
    let mp = {};
    for (let i = 0; i < arr.length; i++) {
        mp[arr[i]] = i;
    }
    let n = arr.length;
    let dp = [];
    for (let i = 0; i < n; i++) {
        dp.push([]);
        for (let j = 0; j < n; j++) {
            dp[i].push(0);
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            dp[j][i] = 2;
        }
    }
    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            let delta = arr[i] - arr[j];
            if (delta in mp) {
                let k = mp[delta];
                if (k < j) {
                    dp[j][i] = dp[k][j] + 1;
                    ans = Math.max(ans, dp[j][i]);
                }
            }
        }
    }
    return ans;
}

