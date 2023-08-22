
function f_gold(nums, x) {
    x = nums.reduce((a, b) => a + b) - x;
    let n = nums.length;
    let s = 0;
    let seen = { 0: -1 };
    let ans = Number.POSITIVE_INFINITY;
    for (let i = 0; i < n; i++) {
        s += nums[i];
        if (!(s in seen)) {
            seen[s] = i;
        }
        if (s - x in seen) {
            let j = seen[s - x];
            ans = Math.min(ans, n - (i - j));
        }
    }
    return ans == Number.POSITIVE_INFINITY ? -1 : ans;
}

