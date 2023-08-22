
const f_gold = (nums) => {
    let counter = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (counter.has(nums[i])) {
            counter.set(nums[i], counter.get(nums[i]) + 1);
        } else {
            counter.set(nums[i], 1);
        }
    }
    let mod = 10 ** 9 + 7;
    let prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    let n = prime.length;
    let dp = new Array(1 << n).fill(0);
    dp[0] = 1;
    for (let x = 2; x <= 30; x++) {
        if (counter.get(x) == 0 || x % 4 == 0 || x % 9 == 0 || x % 25 == 0) {
            continue;
        }
        let mask = 0;
        for (let i = 0; i < prime.length; i++) {
            if (x % prime[i] == 0) {
                mask |= 1 << i;
            }
        }
        for (let state = 1; state < 1 << n; state++) {
            if (mask & state) {
                continue;
            }
            dp[mask | state] = (dp[mask | state] + counter.get(x) * dp[state]) % mod;
        }
    }
    let ans = 0;
    for (let i = 1; i < 1 << n; i++) {
        ans = (ans + dp[i]) % mod;
    }
    for (let i = 0; i < counter.get(1); i++) {
        ans = (ans << 1) % mod;
    }
    return ans;
};

