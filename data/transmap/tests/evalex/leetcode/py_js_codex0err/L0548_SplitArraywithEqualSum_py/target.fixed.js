function f_gold(nums) {
    let n = nums.length;
    let s = new Array(n + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        s[i + 1] = s[i] + nums[i];
    }
    for (let j = 3; j < n - 3; j++) {
        let seen = new Set();
        for (let i = 1; i < j - 1; i++) {
            if (s[i] == s[j] - s[i + 1]) {
                seen.add(s[i]);
            }
        }
        for (let k = j + 2; k < n - 1; k++) {
            if (s[n] - s[k + 1] == s[k] - s[j + 1] && seen.has(s[n] - s[k + 1])) {
                return true;
            }
        }
    }
    return false;
}

