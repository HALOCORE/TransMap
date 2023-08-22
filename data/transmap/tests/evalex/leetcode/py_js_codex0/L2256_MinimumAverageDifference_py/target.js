
function f_gold(nums) {
    let s = nums.reduce((a, b) => a + b, 0);
    let ans = 0;
    let n = nums.length;
    let mi = Number.MAX_VALUE;
    for (let i = 0; i < n; i++) {
        let a = s[i] / (i + 1);
        let b = 0;
        if (i == n - 1) {
            b = (s[n - 1] - s[i]) / (n - i - 1);
        }
        let t = Math.abs(a - b);
        if (mi > t) {
            ans = i;
            mi = t;
        }
    }
    return ans;
}

