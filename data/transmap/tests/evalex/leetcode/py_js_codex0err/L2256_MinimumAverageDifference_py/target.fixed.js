
function f_gold(nums) {
    let s = nums.map((sum => value => sum += value)(0));
    let ans = 0;
    let n = nums.length;
    let mi = Number.MAX_VALUE;
    for (let i = 0; i < n; i++) {
        let a = Math.floor(s[i] / (i + 1));
        let b = 0;
        if (i != n - 1) {
            b = Math.floor((s[s.length - 1] - s[i]) / (n - i - 1));
        }
        let t = Math.abs(a - b);
        if (mi > t) {
            ans = i;
            mi = t;
        }
    }
    return ans;
}

