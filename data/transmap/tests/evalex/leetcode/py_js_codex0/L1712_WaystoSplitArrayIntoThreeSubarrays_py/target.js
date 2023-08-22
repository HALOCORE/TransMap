
function f_gold(nums) {
    let mod = 1e9 + 7;
    let n = nums.length;
    let pre = Array(n + 1).fill(0);
    for (let i = 1; i < n + 1; i++) {
        pre[i] = pre[i - 1] + nums[i - 1];
    }
    let ans = 0;
    for (let i = 1; i < n - 1; i++) {
        if (pre[i] * 3 > pre[n]) break;
        let left = i + 1;
        let right = n - 1;
        while (left < right) {
            let mid = (left + right + 1) >> 1;
            if (pre[mid] - pre[i] <= pre[n] - pre[mid]) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }
        let mid_right = left;
        left = i + 1;
        right = n - 1;
        while (left < right) {
            let mid = (left + right) >> 1;
            if (pre[mid] - pre[i] >= pre[i]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        ans += (mid_right - left + 1) % mod;
    }
    return parseInt(ans % mod);
}

