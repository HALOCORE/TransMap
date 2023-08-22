
function f_gold(nums) {
    let n = nums.length;
    let mx = -1;
    let ans = n;
    let d = Array(n).fill(0);
    for (let i = 0; i < nums.length; i++) {
        let l = (i + 1) % n;
        let r = (n + i + 1 - nums[i]) % n;
        d[l] += 1;
        d[r] -= 1;
    }
    let s = 0;
    for (let k = 0; k < d.length; k++) {
        s += d[k];
        if (s > mx) {
            mx = s;
            ans = k;
        }
    }
    return ans;
}

