
function f_gold(nums) {
    let cnt = nums.filter(x => x === 1).length;
    let n = nums.length;
    let s = Array(2 * n + 1).fill(0);
    for (let i = 0; i < 2 * n; i++) {
        s[i + 1] = s[i] + nums[i % n];
    }
    let mx = 0;
    for (let i = 0; i < 2 * n; i++) {
        let j = i + cnt - 1;
        if (j < 2 * n) {
            mx = Math.max(mx, s[j + 1] - s[i]);
        }
    }
    return cnt - mx;
}

