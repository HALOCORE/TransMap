
function f_gold(nums, k) {
    k += 1;
    let n = nums.length;
    let g = Array(n).fill(0).map(() => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        let s = 0;
        let mx = 0;
        for (let j = i; j < n; j++) {
            s += nums[j];
            mx = Math.max(mx, nums[j]);
            g[i][j] = mx * (j - i + 1) - s;
        }
    }
    let f = Array(n + 1).fill(0).map(() => Array(k + 1).fill(Number.POSITIVE_INFINITY));
    f[0][0] = 0;
    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j < k + 1; j++) {
            for (let h = 0; h < i; h++) {
                f[i][j] = Math.min(f[i][j], f[h][j - 1] + g[h][i - 1]);
            }
        }
    }
    return f[n][k];
}

